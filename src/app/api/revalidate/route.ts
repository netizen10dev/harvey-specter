import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

// Called by a Sanity webhook whenever content changes.
// Vercel env: SANITY_REVALIDATE_SECRET  (must match the secret in the Sanity webhook URL)
// Webhook URL: https://<your-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
// Webhook trigger: on create / update / delete for any document type

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }

  // Revalidate every page in the app — covers current and any future routes.
  revalidatePath('/', 'layout')

  return Response.json({ revalidated: true, now: Date.now() })
}
