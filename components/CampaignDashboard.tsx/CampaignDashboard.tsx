'use client';
import { useEffect, useState } from 'react';

export default function CampaignDashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const res = await fetch('/api/campaigns');
        const data = await res.json();
        setCampaigns(data.campaigns || []);
      } catch (err) {
        console.error('Fehler beim Laden der Kampagnen:', err);
      }
    }
    fetchCampaigns();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Meine Kampagnen</h1>
      {campaigns.length === 0 ? (
        <p className="text-gray-600">Keine Kampagnen vorhanden.</p>
      ) : (
        <div className="grid gap-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="p-6 rounded shadow border bg-white dark:bg-gray-900"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{campaign.name}</h2>
                <span
                  className={\`px-2 py-1 rounded text-sm font-medium \${campaign.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}\`}
                >
                  {campaign.status === 'draft' ? 'Entwurf' : 'Aktiv'}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{campaign.description}</p>
              <div className="text-sm text-gray-500">
                Zeitraum: {new Date(campaign.startDate).toLocaleDateString()} – {new Date(campaign.endDate).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-500">
                Ziel-URL: <a href={campaign.campaignUrl} className="text-blue-600 underline">{campaign.campaignUrl}</a>
              </div>
              <div className="mt-4 flex gap-2 text-sm">
                <button className="px-3 py-1 rounded bg-gray-200 text-black">Bearbeiten</button>
                <button className="px-3 py-1 rounded bg-red-500 text-white">Löschen</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}