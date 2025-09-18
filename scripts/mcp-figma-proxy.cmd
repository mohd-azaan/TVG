@echo off
setlocal

REM Auto-launch Figma desktop if needed so the MCP server is available
if defined FIGMA_EXE (
  set "FIGMA_PATH=%FIGMA_EXE%"
) else (
  set "FIGMA_PATH=%LOCALAPPDATA%\Figma\Figma.exe"
)

if exist "%FIGMA_PATH%" (
  tasklist /FI "IMAGENAME eq Figma.exe" | find /I "Figma.exe" >NUL
  if errorlevel 1 (
    echo Starting Figma desktop via "%FIGMA_PATH%"
    start "" "%FIGMA_PATH%"
  )
) else (
  echo Warning: Figma.exe not found at "%FIGMA_PATH%". Set FIGMA_EXE env var to override.
)

REM Wait for the local MCP server port to become available
set "WAIT_SECONDS=30"
set "PORT_READY=0"
for /L %%I in (1,1,%WAIT_SECONDS%) do (
  powershell -NoLogo -NoProfile -Command "try { $client = New-Object System.Net.Sockets.TcpClient; $client.Connect('127.0.0.1',3845); $client.Close(); exit 0 } catch { exit 1 }" >NUL 2>&1
  if not errorlevel 1 (
    set "PORT_READY=1"
    goto :PORT_READY_LABEL
  )
  timeout /t 1 /nobreak >NUL
)

:PORT_READY_LABEL
if "%PORT_READY%"=="0" (
  echo Warning: Timed out waiting for Figma MCP server on 127.0.0.1:3845
)

REM Bridge Figma's HTTP/SSE MCP server to STDIO for Codex
REM Usage: scripts\mcp-figma-proxy.cmd [extra mcp-proxy args]
py -m mcp_proxy --transport streamablehttp http://127.0.0.1:3845/mcp %*

endlocal
