import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';

const factions = [
  {
    name: 'Rohan',
    description: 'Royal Guard (foot & mounted), Helm Hammerhand, Hera, Lief, Olwyn. A heroic faction focused on swift cavalry strikes and high-detail warriors.',
    image: '/images/factions/rohan.jpg',
    price: 'From €7.00',
  },
  {
    name: 'Iron Hills',
    description: 'Iron Hills Warriors with spears and mattocks, Goat Riders, Ballista. Meticulously sculpted dwarves, ideal for Erebor Reclaimed lists.',
    image: '/images/factions/iron_hills.jpg',
    price: 'From €7.00',
  },
  {
    name: 'Gondor',
    description: 'Warriors of Minas Tirith, Citadel Guard, Heroes of the White City. Sturdy defenders of the West, printed in crisp grey resin.',
    image: '/images/factions/gondor.jpg',
    price: 'From €7.00',
  },
];

export default function MiniaturesConceptHome() {
  return (
    <main className="p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">MiniaturesConcept</h1>
        <p className="text-lg max-w-xl mx-auto">
          Premium 3D printed miniatures for the Middle-earth Strategy Battle Game, printed in ultra-detailed resin, ready for battle.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow">Browse Catalogue</Button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Factions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factions.map((faction, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all">
              <img src={faction.image} alt={faction.name} className="rounded-t-2xl w-full h-48 object-cover" />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{faction.name}</h3>
                <p className="text-sm text-gray-600">{faction.description}</p>
                <p className="text-sm font-semibold">{faction.price}</p>
                <Button variant="secondary">View Miniatures</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold">Want a Custom Bundle?</h2>
        <p className="mt-2 text-gray-700">Send us an email and we’ll create a personalized order tailored to your needs. Free scenic bases for orders over €25!</p>
        <Button className="mt-4 text-lg px-6 py-3 rounded-2xl shadow" onClick={() => window.location.href = 'mailto:miniaturesconcept@gmail.com'}>
          Contact via Email
        </Button>
      </section>
    </main>
  );
}
