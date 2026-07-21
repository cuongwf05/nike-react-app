import SpotlightCard from "./SpotlightCard";

export const spotlightProducts = [
    {
        id: 1,
        name: "Air Jordan 1 Low",
        image: "/images/spotlight/jordan1.png",
    },
    {
        id: 2,
        name: "Air Force 1",
        image: "/images/spotlight/airforce1.png",
    },
    {
        id: 3,
        name: "Cortez",
        image: "/images/spotlight/cortez.png",
    },
    {
        id: 4,
        name: "Dunk",
        image: "/images/spotlight/dunk.png",
    },
    {
        id: 5,
        name: "Pegasus 42",
        image: "/images/spotlight/pegasus42.png",
    },
];

export default function Spotlight() {
    return (
        <section className="max-w-6xl mx-auto py-8 px-6">
            <h1 className="text-center text-4xl font-black tracking-tight"> SPOTLIGHT </h1>

            <p className="text-center text-xl text-gray-700 mt-4">
                Classic silhouettes and cutting-edge innovation to build your game
                from the ground up.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                {spotlightProducts.map((p) =>
                    <SpotlightCard key={p.id} image={p.image} name={p.name} />
                )}
            </div>
        </section>
    );
}