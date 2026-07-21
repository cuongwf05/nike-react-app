import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full min-h-screen bg-white px-4 lg:px-7 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex-1 flex flex-col items-center text-center">
                    <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none">
                        JUST DO IT!
                    </h1>

                    <p className="mt-5 text-gray-500 text-xl leading-9">
                        bring inspiration and innovation to every athlete in the world
                    </p>

                    <button className=" mt-10 px-12 py-4 border border-gray-300 rounded-full text-3xl font-bold hover:bg-[#E31837] hover:text-white transition-all duration-300">
                        shop
                    </button>
                </div>

                <div className="flex-1">
                    <Image
                        src="/images/nike-banner.jpg"
                        alt="Nike Banner"
                        width={650}
                        height={820}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}