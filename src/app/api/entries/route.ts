import entries from '@/src/prebuilt.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json(entries.map((entry) => entry.title))
}
