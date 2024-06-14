// Components
import Homeview from '../sections/home/home-view'
import { getNotionContent } from '../utils/fetchUtils/NotionFetchUtils'

// types

// ---------------------------------------------------------------------

export default async function Home() {
  // Home vuew
  const data = await getNotionContent('home')
  const content = {
    slogan: data.slogan || '',
    description: data.description || '',
  }
  return <Homeview content={content} />
}
