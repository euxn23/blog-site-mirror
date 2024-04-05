import { getFeed } from '../_feed'

export async function GET() {
  return new Response(getFeed().rss2(), { headers: { 'Content-Type': 'application/rss+xml; charset=UTF-8' } })
}
