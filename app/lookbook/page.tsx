import Image from "next/image";
import FooterCuong from "@/components/FooterCuong";

const images = [
  "/images/lookbook/img1.jpg",
  "/images/lookbook/img2.jpg",
  "/images/lookbook/img3.jpg",
  "/images/lookbook/img4.jpg",
  "/images/lookbook/img5.jpg",
  "/images/lookbook/img6.jpg",
];

export default function LookbookPage() {
  return (
    <>
      <div className="w-full flex-1">
        <div className="relative h-[650px] w-full overflow-hidden">
          <Image
            src="/images/lookbook/hero.jpg"
            alt="Lookbook"
            fill
            className="object-cover"
          />
        </div>

        <section className="mx-auto mt-8 max-w-5xl mb-6 px-4">
          <h1 className="text-4xl font-bold">
            Women's Spring Lookbook
          </h1>

          <p className="mt-3 text-gray-700">
            Inspired by the blurred edges between sport and life as we
            strive together towards a new and better normal, our season
            fuses technical fabrics with elevated silhouettes.
          </p>
        </section>

        <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 px-4">
          {images.map((image) => (
            <div
              key={image}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </section>
      </div>
      <FooterCuong />
    </>
  );
}