import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Nike Shox TL Triple Black",
    price: "5.000.000 VND",
    image: "/images/collections/black-shoes.jpg",
    alt: "Nike Shox TL Triple Black",
  },
  {
    id: 2,
    name: "Nike Shox Half-Zip Anorak Jacket",
    price: "3.500.000 VND",
    image: "/images/collections/Nike Sportswear M NSW WVN HZ JKT SHOX - Veste légère - black_anthracite.jpg",
    alt: "Nike Shox Half-Zip Anorak Jacket",
  },
  {
    id: 3,
    name: "Nike Sportswear Club Fleece Alumni Shorts",
    price: "3.000.000 VND",
    image: "/images/collections/NIKE-XS-Shorts neri in French Terry-Negro-Hombre.jpg",
    alt: "Nike Sportswear Club Fleece Alumni Shorts",
  },
];

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-gray-200 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-7xl font-black tracking-tighter mb-4">NIKE</h1>
          <p className="text-4xl font-semibold">Power In Every Details</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-3xl overflow-hidden aspect-square relative mb-6 shadow-sm hover:shadow-xl transition-shadow border">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover p-8 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                <p className="text-2xl font-bold text-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-8 text-center text-sm">
        © 2026 Nike Store - All Rights Reserved
      </footer>
    </div>
  );
}