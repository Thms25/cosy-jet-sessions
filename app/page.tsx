import React from 'react'

// Components
import Homeview from '../sections/home/home-view'
import { getNotionContent } from '../utils/fetchUtils/NotionFetchUtils'
// ---------------------------------------------------------------------

export default async function Home() {
  // Home vuew
  const content = await getNotionContent('home')
  return <Homeview content={content} />
}
