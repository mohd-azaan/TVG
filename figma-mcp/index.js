// Minimal Figma fetcher (keeps token hardcoded per user request)
// Usage examples:
//   node ./figma-mcp/index.js                             # uses defaults
//   node ./figma-mcp/index.js 2208-460                    # explicit node id (hyphen form)
//   node ./figma-mcp/index.js https://www.figma.com/design/l9wfacgoGasg0xZ1W6nbQL/TVG-Website-UI-Design--Copy-?node-id=2208-460&m=dev

const FIGMA_TOKEN = ""; // TODO: paste a fresh Figma Personal Access Token here
const FILE_KEY = "l9wfacgoGasg0xZ1W6nbQL"; // From your link
const DEFAULT_NODE_HYPHEN = "2208-460"; // From your link; Figma API expects 2208:460

function parseArgs(argv) {
  const [, , arg] = argv;
  if (!arg) return { fileKey: FILE_KEY, nodeHyphen: DEFAULT_NODE_HYPHEN };
  if (/^https?:\/\//i.test(arg)) {
    // Parse Figma link
    try {
      const u = new URL(arg);
      const pathParts = u.pathname.split("/").filter(Boolean);
      // The file key is the segment after /file or /design
      const fileKey = pathParts[1] || FILE_KEY;
      const nodeHyphen = (u.searchParams.get("node-id") || DEFAULT_NODE_HYPHEN).trim();
      return { fileKey, nodeHyphen };
    } catch {
      return { fileKey: FILE_KEY, nodeHyphen: DEFAULT_NODE_HYPHEN };
    }
  }
  // Treat as node id in hyphen form
  return { fileKey: FILE_KEY, nodeHyphen: String(arg).trim() };
}

function hyphenToColon(nodeHyphen) {
  return nodeHyphen.replace(/-/g, ":");
}

async function req(url) {
  const res = await fetch(url, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API error ${res.status}: ${text}`);
  }
  return res.json();
}

function summarizeFills(fills) {
  if (!Array.isArray(fills)) return [];
  return fills.map((f) => ({
    type: f.type,
    visible: f.visible !== false,
    opacity: typeof f.opacity === "number" ? f.opacity : undefined,
    color:
      f.color && typeof f.color === "object"
        ? {
            r: f.color.r,
            g: f.color.g,
            b: f.color.b,
          }
        : undefined,
    gradientType: f.gradientType,
    imageRef: f.imageRef,
  }));
}

function summarizeNode(node) {
  const base = {
    id: node.id,
    name: node.name,
    type: node.type,
    visible: node.visible,
    rotation: node.rotation,
    absoluteBoundingBox: node.absoluteBoundingBox,
  };

  if (node.type === "TEXT") {
    base.characters = node.characters;
    base.style = {
      fontFamily: node.style?.fontFamily,
      fontSize: node.style?.fontSize,
      fontWeight: node.style?.fontWeight,
      lineHeightPx: node.style?.lineHeightPx,
      textAlignHorizontal: node.style?.textAlignHorizontal,
      textAlignVertical: node.style?.textAlignVertical,
    };
  }

  if (node.fills) base.fills = summarizeFills(node.fills);
  if (node.strokes) base.strokes = node.strokes.map((s) => ({ type: s.type }));
  if (Array.isArray(node.children)) {
    base.childrenCount = node.children.length;
    // Small type breakdown of direct children
    const byType = {};
    for (const c of node.children) byType[c.type] = (byType[c.type] || 0) + 1;
    base.childrenByType = byType;
  }
  return base;
}

(async () => {
  try {
    if (!FIGMA_TOKEN) {
      throw new Error(
        "FIGMA_TOKEN is empty. Paste your Figma Personal Access Token into figma-mcp/index.js"
      );
    }

    const { fileKey, nodeHyphen } = parseArgs(process.argv);
    const nodeColon = hyphenToColon(nodeHyphen);

    const fileUrl = `https://api.figma.com/v1/files/${fileKey}`;
    const nodesUrl = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(
      nodeColon
    )}`;

    const [file, nodes] = await Promise.all([req(fileUrl), req(nodesUrl)]);
    const node = nodes?.nodes?.[nodeColon]?.document;

    if (!node) {
      throw new Error(
        `Node ${nodeColon} not found in file ${fileKey}. Double-check the link or node id.`
      );
    }

    const summary = {
      success: true,
      file: {
        key: fileKey,
        name: file.name,
        lastModified: file.lastModified,
      },
      node: summarizeNode(node),
    };

    console.log(JSON.stringify(summary, null, 2));
  } catch (err) {
    console.error(
      JSON.stringify(
        { success: false, error: err?.message || String(err) },
        null,
        2
      )
    );
    process.exit(1);
  }
})();

