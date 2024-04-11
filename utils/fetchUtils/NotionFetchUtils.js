import { Client } from '@notionhq/client'

export const revalidate = 60 * 60 * 24 * 7 // 1 week

export async function getNotionDiscover() {
  try {
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    })
    const { results: blocks } = await notion.blocks.children.list({
      block_id: process.env.NOTION_DISCOVER_ID,
    })

    const data = blocks.map(block => {
      try {
        if (block.type == 'paragraph') {
          const text = block.paragraph.rich_text[0].plain_text
          const [key, value] = text.split(': ')

          return { [key]: value }
        }

        return {}
      } catch (error) {
        console.log('Error in a notion block in discover page')
      }
    })

    const content = data.reduce((acc, obj) => ({ ...acc, ...obj }), {})

    return content
  } catch (error) {
    throw new Error(error)
  }
}
