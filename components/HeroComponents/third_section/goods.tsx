import Image from "next/image";

interface GoodCardProps {
  image: string;
  title: string;
  description: string;
  isMiddle?: boolean;
  reverseLayout?: boolean;
  arrowImage: string;
  price: number;
}

interface Product {
  image: string;
  title: string;
  description: string;
  isMiddle?: boolean;
  reverseLayout?: boolean;
  arrowImage: string;
  price: number;
}

const GoodCard = ({
  image,
  title,
  description,
  arrowImage,
  isMiddle = false,
  reverseLayout = false,
  price
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
      
      <div className={`rounded-[70%_90%_90%_80%_/90%_80%_60%_80%] relative ${reverseLayout ? '-mt-4' : ''} p-1 border border-orange-400`}>
        <div className="bg-white p-4 rounded-[80%_70%_70%_80%_/90%_90%_60%_80%]">
          <Image
            src={image}
            width={500}
            height={500}
            alt="bakery item"
            className="h-48 w-48"
          />
        </div>
        <div className="w-12 h-12 absolute -bottom-1 -right-2 flex items-center p-2 bg-white border justify-center border-orange-400 rounded-[70%_90%_90%_80%_/90%_80%_60%_80%]">
          <p className="font-bold text-black">${price}</p>
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

export default function Goods({products}: { products: Product[] }) {
  return (
    <div className="flex h-full mt-36 lg:w-[70%] items-center justify-center lg:justify-between gap-8">
      {products.map((product, index) => (
        <GoodCard
          key={index}
          {...product}
        />
      ))}
    </div>
  );
}