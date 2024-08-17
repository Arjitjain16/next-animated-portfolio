import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col md:h-full lg:flex-row  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-7">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative md:w-full md:h-full">
        <Image src="/hero.png" alt="error" fill className="object-contain" />
      </div>
      <div className="h-1/2 md:w-full md:h-full lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tommorow.</h1>
        <p className="md:text-xl ">Welcome to my deigital canvas, where innovation and creative coverage.With a keen eye for asthetic and mastery a code.
          my portfolio showchases adiverse collections of projectsthat reflect my commitment to excellence.
        </p>
        <div className="w-full flex gap-4 lg:gap-7">
          <button className="p-2 sm:p-4 rounded ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-2 sm:p-4 rounded ring-1 ring-black">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;