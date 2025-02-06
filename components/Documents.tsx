'use client';

const documents = [
  {
    title: 'White Paper EN',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
  {
    title: 'White Paper DE',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
  {
    title: 'Pitchdeck EN',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
  {
    title: 'Pitchdeck DE',
    description: 'In the Blackrose Club ecosystem, the virtual and physical worlds come together.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80',
  },
];

export default function Documents() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">Documents: Whitepaper & Pitch Deck</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Blackrose Club Targets The Most Active And Technology Savvy Target Group In The DACH Region And Will Later
            Expand To Serve The Global Market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-400 text-sm">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}