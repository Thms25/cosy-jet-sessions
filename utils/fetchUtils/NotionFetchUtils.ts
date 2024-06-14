import { Client } from '@notionhq/client'

export const revalidate = 60 * 60 * 24 * 7 // 1 week

const IDS = {
  discover: process.env.NOTION_DISCOVER_ID,
  about: process.env.NOTION_ABOUT_ID,
  home: process.env.NOTION_HOME_ID,
  contact: process.env.NOTION_CONTACT_ID,
}

export async function getNotionContent(slug: string) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    })
    const { results: blocks } = await notion.blocks.children.list({
      block_id: IDS[slug],
    })

    const data = blocks.map(block => {
      try {
        if ('type' in block && block.type == 'paragraph') {
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
