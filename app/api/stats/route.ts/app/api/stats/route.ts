import { NextResponse } from 'next/server';

export async function GET() {
  const mockStats = [
    { date: '2025-06-10', impressions: 150, publisher: 'Spiegel Online', budget: 100 },
    { date: '2025-06-11', impressions: 180, publisher: 'Die Zeit', budget: 80 },
    { date: '2025-06-12', impressions: 200, publisher: 'Monopol', budget: 120 },
    { date: '2025-06-13', impressions: 160, publisher: 'Spiegel Online', budget: 90 },
  ];

  return NextResponse.json({ stats: mockStats });
}