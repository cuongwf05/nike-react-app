import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  image: string;
  category: string;
  title: string;
};

export const products: Product[] = [
  {
    id: 1,
    image: "/images/trending/skylon.jpg",
    category: "New In",
    title: "Nike Skylon",
  },
  {
    id: 2,
    image: "/images/trending/sabrina4.jpg",
    category: "Nike Sabrina 4",
    title: "Play Fast & Free",
  },
  {
    id: 3,
    image: "/images/trending/ava.jpg",
    category: "Nike Ava",
    title: "Engineered For The City",
  },
];

export default function Trending() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-10">
      <h2 className="text-xl font-semibold mb-4">Trending</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((p) => {
          const urlParams = `?name=${encodeURIComponent(p.title)}&image=${encodeURIComponent(p.image)}&price=4,500,000%C4%91`;
          
          return (
          <Link
            href={`/product${urlParams}`}
            key={p.id}
            className="relative h-[440px] overflow-hidden group cursor-pointer block"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute left-10 bottom-10 text-white">
              <p className="text-md mb-1"> {p.category} </p>

              <h3 className="text-xl font-medium leading-tight max-w-sm">
                {p.title}
              </h3>

              <button
                className="
                  mt-6
                  bg-white
                  text-black
                  px-6
                  py-2
                  rounded-full
                  text-xl
                  font-semibold
                  hover:bg-[#E31837]
                  hover:text-white
                  transition
                "
              >
                Shop
              </button>
            </div>
          </Link>
        )})}
      </div>
    </section>
  );
}