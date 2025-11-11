import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abolfazl Nazari',
    short_name: 'Abolfazl-Nazari',
    description: 'توسعه دهنده فرانت‌اند',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#121212',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
