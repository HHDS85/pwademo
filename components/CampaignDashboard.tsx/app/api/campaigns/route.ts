import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany({
      include: {
        publisherAds: true,
        media: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, campaigns });
  } catch (error) {
    console.error('Fehler beim Laden der Kampagnen:', error);
    return NextResponse.json({ success: false, error: 'Fehler beim Laden' }, { status: 500 });
  }
}