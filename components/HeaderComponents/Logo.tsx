import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center bg-white ">
      <a href="https://logowik.com/bread-slice-icon-40544.html">
        <Image
          width={60}
          height={60}
          alt="logo"
          src="https://logowik.com/content/uploads/images/bread-slice6563.logowik.com.webp"
        />
      </a>
      <h1 className="text-teal-800 font-serif text-2xl font-bold">Bread</h1>
    </div>
  );
}
