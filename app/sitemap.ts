import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://spanotic.com',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/team',
      lastModified: new Date(),
    },
    {
      url: 'https://spanotic.com/contact',
      lastModified: new Date(),
    },
  ];
}
