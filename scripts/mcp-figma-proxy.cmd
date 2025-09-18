@echo off
REM Bridge Figma's HTTP/SSE MCP server to STDIO for Codex
REM Usage: scripts\mcp-figma-proxy.cmd [extra mcp-proxy args]
py -m mcp_proxy --transport streamablehttp http://127.0.0.1:3845/mcp %*
