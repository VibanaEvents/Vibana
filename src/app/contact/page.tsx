export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-32 pb-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-12">
        Questions, bookings, press enquiries: we&apos;d love to hear from you.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Kwame"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-2"
            >
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Asante"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
          >
            <option value="">Select a topic</option>
            <option value="booking">DJ / Artist Booking</option>
            <option value="press">Press & Media</option>
            <option value="partnership">Partnership</option>
            <option value="general">General Enquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us more..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-semibold py-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-16 border-t border-gray-100 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-semibold mb-1">Email</p>
          <p className="text-gray-500">vibanawrld@outlook.com</p>
        </div>
        <div>
          <p className="font-semibold mb-1">Based in</p>
          <p className="text-gray-500">Utrecht, Netherlands</p>
        </div>
      </div>
    </div>
  );
}
