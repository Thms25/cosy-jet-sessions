import MessageView from '@/sections/contact/message-view'
import { getNotionContent } from '@/utils/fetchUtils/NotionFetchUtils'

export default async function page() {
  const content = await getNotionContent('contact')
  return <MessageView content={content} />
}
