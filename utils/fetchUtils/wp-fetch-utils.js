const URL = process.env.WP_API_URL

export async function getPageContent(slug) {
  const res = await fetch(URL + '/pages')
  const pages = await res.json()
  const page = pages.find(page => page.slug === slug)

  return page
}
