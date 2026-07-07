// Serves /ads.txt for Google AdSense once NEXT_PUBLIC_ADSENSE_CLIENT is set
// (e.g. "ca-pub-1234567890123456"). AdSense requires this file at the root
// domain to authorize Google to sell the site's ad inventory.

export const dynamic = "force-static";

export function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const pubId = client?.replace(/^ca-/, ""); // ads.txt uses "pub-...", not "ca-pub-..."

  const body = pubId
    ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
    : "# AdSense not configured yet ~ set NEXT_PUBLIC_ADSENSE_CLIENT and redeploy.\n";

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
