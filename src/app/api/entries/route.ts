import data from '@/src/prebuilt.json'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json(data.entries.map((entry) => entry.title))
}
