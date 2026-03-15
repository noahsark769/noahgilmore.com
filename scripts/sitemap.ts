import fs from 'fs'
import { getAllPosts } from '../src/utils/posts'

const siteUrl = 'https://noahgilmore.com'

function generateSitemap() {
  const posts = getAllPosts(['slug', 'date'])

  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/blog', priority: '0.8' },
    { url: '/examples/ios-copy-to-clipboard', priority: '0.5' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  fs.writeFileSync('./public/sitemap.xml', xml)
}

generateSitemap()
