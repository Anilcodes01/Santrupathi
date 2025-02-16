import Image from "next/image";

export default function BgImage() {
  return (
    <div className=" h-[40vh] lg:h-[60vh] w-1/2 items-end flex justify-end  ">
      <Image
          width={200}
          height={200}
          alt="bgimage"
          className=" h-full w-[40vh] lg:w-[60vh]  "
          src="/pngegg.png"
        />
    
    </div>
  );
}