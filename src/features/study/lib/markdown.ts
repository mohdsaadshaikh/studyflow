// Line-based parser for the markdown subset authored in content files:
// ## / ### headings, paragraphs, - and 1. lists, ``` code fences, | tables |.

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; text: string }
  | { type: "table"; rows: string[][] };

/** Parses the small markdown subset used by topic content strings. */
export function parseNotes(md: string): Block[] {
  const lines = md.split("\n");
  const out: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      out.push({ type: "h2", text: line.slice(3).trim() });
      i++;
    } else if (line.startsWith("### ")) {
      out.push({ type: "h3", text: line.slice(4).trim() });
      i++;
    } else if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      out.push({ type: "code", text: buf.join("\n") });
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push({ type: "ul", items });
    } else if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      out.push({ type: "ol", items });
    } else if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].split("|").slice(1, -1).map((c) => c.trim());
        if (cells.some((c) => /^-+$/.test(c))) {
          i++;
          continue;
        }
        rows.push(cells);
        i++;
      }
      out.push({ type: "table", rows });
    } else if (line.trim() === "") {
      i++;
    } else if (line.startsWith("> ")) {
      out.push({ type: "p", text: line.slice(2) });
      i++;
    } else {
      const buf: string[] = [line];
      i++;
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].startsWith("#") &&
        !lines[i].startsWith("- ") &&
        !/^\d+\.\s/.test(lines[i]) &&
        !lines[i].startsWith("|") &&
        !lines[i].startsWith("```")
      ) {
        buf.push(lines[i]);
        i++;
      }
      out.push({ type: "p", text: buf.join(" ") });
    }
  }
  return out;
}
