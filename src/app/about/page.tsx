import Image from "next/image";

const team = [
  { name: "Joris van Velthooven", photo: "/image-Joris.png" },
  { name: "Bram van Andel",       photo: "/image-Bram.png"  },
  { name: "Thijs Wieman",         photo: "/image-Thijs.png" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-32 pb-16">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">About Vibana</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Vibana is an Afrobeats music events concept born out of a love for
          African music and culture. Based in the Netherlands, we create spaces
          where people come together to celebrate the richness of Afrobeats,
          Amapiano, Afro House, and everything in between.
        </p>

        <p>
          Our events are more than just parties. They are cultural experiences.
          Every Vibana night is carefully curated to bring you authentic music,
          a welcoming atmosphere, and memories that last long after the music stops.
        </p>

        <p>
          Whether you&apos;re part of the African diaspora looking for a taste
          of home, or simply someone who has fallen in love with the rhythms of
          the continent, Vibana is your home.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { stat: "2025", label: "Founded" },
          { stat: "2+",   label: "Events hosted" },
          { stat: "600+", label: "Visitors reached" },
        ].map(({ stat, label }) => (
          <div key={label} className="bg-gray-50 rounded-2xl py-8 px-4">
            <p className="text-3xl font-bold mb-2">{stat}</p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map(({ name, photo }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src={photo}
                  alt={name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold">{name}</p>
              {/* TODO: Add role */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
