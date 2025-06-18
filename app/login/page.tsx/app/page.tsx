import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-gray-800 dark:text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Pay with Attention.
        </h1>
        <p className="text-lg mb-6">
          Die smarte Werbeplattform für Publisher mit Paywall – Kampagnen buchen, platzieren und skalieren mit maximaler Effizienz.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Jetzt einloggen
            </button>
          </Link>
          <Link href="/dashboard/campaigns/new">
            <button className="px-6 py-3 border border-black text-black rounded-xl hover:bg-black hover:text-white transition dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
              Kampagne starten
            </button>
          </Link>
        </div>
        <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Trusted by Medienpartner wie Spiegel, ZEIT, Monopol.
        </div>
      </div>
    </div>
  );
}