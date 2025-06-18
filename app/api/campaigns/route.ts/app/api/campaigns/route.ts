import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      description,
      publisherAds,
      startDate,
      endDate,
      videoUrl,
      videoFile,
      campaignUrl,
      status = 'draft',
      userId = 'demo-user'
    } = body;

    const campaign = await prisma.campaign.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        campaignUrl,
        status,
        userId,
        publisherAds: {
          create: publisherAds.map((ad: any) => ({
            publisher: ad.publisher,
            section: ad.section,
            budget: ad.budget,
            impressions: ad.impressions || 0,
          })),
        },
        media: {
          create: {
            videoUrl,
            videoFile,
          },
        },
      },
    });

    return NextResponse.json({ success: true, campaign });
  } catch (error) {
    console.error('Error creating campaign:', error);
    return NextResponse.json({ success: false, error: 'Failed to save campaign' }, { status: 500 });
  }
}