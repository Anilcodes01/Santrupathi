

export default function LeftText() {

    return <div>
        <div className=" flex flex-col  h-[40vh] inset-0 pl-4 lg:pt-16  justify-center ">
        <p className="text-teal-800  lg:text-8xl  text-7xl font-serif text-start font-bold">Taste the</p>
        <p className="text-teal-800  lg:text-8xl text-7xl font-serif font-bold">Difference</p>
        <p className="text-start  text-teal-800 mt-4  w-full">Our artisanal approach to food</p>

        <div className="flex gap-6 mt-8  w-full">
        <button className=" bg-teal-800 p-2 hover:bg-teal-900 transition-colors duration-500 font-bold text-sm font-serif rounded-sm px-4">Order now</button>
        <button className="border border-teal-800 text-teal-800 font-bold font-serif text-sm py-2 px-4 rounded-sm">Menu</button>
        </div>

      
      </div>
    </div>
}