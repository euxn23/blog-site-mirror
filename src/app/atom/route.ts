import { getFeed } from '../_feed'

export async function GET() {
  return new Response(getFeed().atom1(), { headers: { 'Content-Type': 'application/atom+xml;charset=UTF-8' } })
}
