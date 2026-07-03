export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-gray-600 max-w-xl">
          All Vibana events in one place. Grab your tickets early, our events
          sell out fast.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-5xl mb-6">🎶</p>
        <h2 className="text-2xl font-bold mb-3">Coming Soon</h2>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          We&apos;re working on something special. New events will be announced
          here shortly. Stay tuned.
        </p>
      </div>
    </div>
  );
}
