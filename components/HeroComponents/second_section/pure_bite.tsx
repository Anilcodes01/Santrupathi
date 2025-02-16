import Image from "next/image";

export default function PureBite() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="h-48 w-1/2 rounded-full flex items-center justify-center relative">
   
        <div
          className="bg-[#d65129] rounded-[80%_70%_70%_80%_/90%_90%_60%_80%] p-4 relative"
          style={{
            boxShadow: "-20px 0px 40px rgba(0, 0, 0, 0.3)", 
          }}
        >
          <Image
            src="/Healthybow.png"
            width={1000}
            height={1000}
            alt="healthysnack"
            className="h-64 w-64"
          />
        </div>
      </div>

      <div className="flex flex-col w-1/2 gap-4">
        <h1 className="sm:text-4xl lg:text-5xl font-bold text-teal-800 font-serif">
          Enjoy the pure bite
        </h1>
        <p className="text-teal-700 lg:w-2/3">
          We offer a variety of breads, including classic favourites like
          baguettes and dinner rolls, as well as more unique flavors like garlic
          and herb or sun-dried tomate.
        </p>
        <button className="border border-teal-800 px-4 py-1 text-teal-800 w-32 rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
}
