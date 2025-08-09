export async function GET() {
  const pages = [
    { url: "https://jacobhazzardrealestate.com/", lastModified: "2025-08-08" },
    { url: "https://jacobhazzardrealestate.com/about", lastModified: "2025-08-08" },
    { url: "https://jacobhazzardrealestate.com/contact", lastModified: "2025-08-08" },
    // Add more pages here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
