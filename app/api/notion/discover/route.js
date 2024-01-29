import { Client } from "@notionhq/client";

export async function GET(request) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    });
    const { results: blocks } = await notion.blocks.children.list({
      block_id: process.env.NOTION_DISCOVER_ID,
    });

    const data = blocks.map((block) => {
      try {
        if (block.type == "paragraph") {
          const text = block.paragraph.rich_text[0].plain_text;
          const [key, value] = text.split(": ");

          return { [key]: value };
        }

        return {};
      } catch (error) {
        console.log("Error in a notion block in discover page");
      }
    });

    const content = data.reduce((acc, obj) => ({ ...acc, ...obj }), {});

    return new Response(JSON.stringify(content), {
      headers: { "Content-Type": "application.json" },
      status: 500,
      message: "Notion discover route succesfully fetched",
    });
  } catch (error) {
    return new Response("error in notion discover route", {
      headers: { "Content-Type": "application.json" },
      status: 500,
    });
  }
}
