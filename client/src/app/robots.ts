// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/private/', '/admin/'],
    },
    sitemap: 'https://finaxial.tech/sitemap.xml',
  }
}
