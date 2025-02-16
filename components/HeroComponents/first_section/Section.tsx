import Image from "next/image";
import BgImage from "./image";
import LeftText from "./Left-text";
import AddButton from "./addButton";

export default function Section() {
  return (
    <div className="flex w-full hide-scrollbar ">
      <div className="w-full flex flex-col justify-around">
        <div className="flex w-full pt-8 justify-around">
         <div className="pt-12 lg:pl-20">
         <LeftText />
         </div>
          <BgImage />
        </div>

        <div className="h-32 gap-8 flex sm:mt-6 lg:pl-20 lg:mt-0 items-center">
          <div className="group w-28 relative h-32 lg:ml-12 ml-4 bg-yellow-100 pt-2 rounded-[80%_70%_70%_80%_/90%_90%_60%_80%]">
            <div className="absolute inset-0 bg-white rounded-[80%_70%_70%_80%_/90%_90%_60%_80%] group-hover:animate-[spin_3s_linear_infinite]"></div>
            <div className="relative" >
              <Image src="/Burger.png" width={164} height={150} alt="burger" />
            </div>
            <div className="absolute -right-2 -bottom-0">
              <AddButton />
            </div>
          </div>

          <div className="group w-28 relative h-32 lg:ml-12 ml-4 bg-white rounded-[90%_70%_70%_80%_/90%_90%_90%_50%]">
            <div className="absolute inset-0 bg-white rounded-[90%_70%_70%_80%_/90%_90%_90%_50%] group-hover:animate-[spin_3s_linear_infinite]"></div>
            <div className="relative">
              <Image src="/cupcake.png" width={164} height={150} alt="cupcake" />
            </div>
            <div className="absolute -right-1 bottom-0">
              <AddButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
