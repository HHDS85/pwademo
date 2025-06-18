export async function saveCampaign(data: any, type: 'draft' | 'active') {
  try {
    const response = await fetch('/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, status: type })
    });
    const result = await response.json();
    if (result.success) {
      alert(type === 'draft' ? 'Entwurf gespeichert.' : 'Kampagne gebucht!');
    } else {
      alert('Fehler beim Speichern der Kampagne.');
    }
  } catch (error) {
    console.error('API-Fehler:', error);
    alert('Verbindung zum Server fehlgeschlagen.');
  }
}