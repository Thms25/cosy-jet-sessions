import PartnershipView from '@/sections/contact/partnership-view'
import { getNotionContent } from '@/utils/fetchUtils/NotionFetchUtils'

export default async function page() {
  const content = await getNotionContent('contact')
  return <PartnershipView content={content} />
}
