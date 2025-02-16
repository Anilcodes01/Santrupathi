import Image from "next/image";

interface GoodCardProps {
    image: string;
    title: string;
    description: string;
    isMiddle?: boolean;
    reverseLayout?: boolean;
    arrowImage: string;
}

const GoodCard = ({ 
  image, 
  title, 
  description, 
  arrowImage, 
  isMiddle = false,
  reverseLayout = false 
}: GoodCardProps) => {
  return (
    <div className={`bg-red- w-64 items-center justify-center flex flex-col ${
      isMiddle ? '-mt-24' : '-mt-36'
    }`}>
      {reverseLayout ? (
        <>
          <div className="flex pl-28 mr-40 -mt-1 text-center flex-col">
            <h1 className="text-teal-800 font-bold text-md">{title}</h1>
            <p className="text-sm w-48 text-teal-700 mt-2">{description}</p>
          </div>
          <div className={`-mt-2 ${isMiddle ? 'mr-32 -rotate-12' : 'mr-24'}`}>
            <Image 
              src={arrowImage} 
              width={500} 
              height={500} 
              alt="arrow" 
              className="h-24 rotate-6 w-8" 
            />
          </div>
        </>
      ) : null}
      
      <div className={`rounded-[70%_90%_90%_80%_/90%_80%_60%_80%] ${reverseLayout ? '-mt-4' : ''} p-1 border border-orange-400`}>
        <div className="bg-yellow-100 p-4 rounded-[80%_70%_70%_80%_/90%_90%_60%_80%]">
          <Image 
            src={image} 
            width={500} 
            height={500} 
            alt="bakery item" 
            className="h-48 w-48" 
          />
        </div>
      </div>
      
      {!reverseLayout ? (
        <>
          <div className={`-mt-6 ${isMiddle ? 'mr-32' : 'mr-36'}`}>
            <Image 
              src={arrowImage} 
              width={500} 
              height={500} 
              alt="arrow" 
              className="h-24 rotate-6 w-8" 
            />
          </div>
          <div className="flex pl-28 mr-40 text-center -mt-1 flex-col">
            <h1 className="text-teal-800 font-bold text-md">{title}</h1>
            <p className="text-sm w-48 text-teal-700 mt-2">{description}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

interface Product {
  image: string;
  title: string;
  description: string;
  isMiddle?: boolean;
  reverseLayout?: boolean;
  arrowImage: string;
}

export default function Goods({products}: { products: Product[] }) {
 

  return (
    <div className="flex h-full mt-36 lg:w-2/3 w-[88%] items-center justify-center gap-8">
      {products.map((product, index) => (
        <GoodCard
          key={index}
          {...product}
        />
      ))}
    </div>
  );
}