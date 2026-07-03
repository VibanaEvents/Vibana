"use client";

export default function SubscribeForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        required
        className="flex-1 px-5 py-4 rounded-full bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF924C] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#FF924C] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#e8803d] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
