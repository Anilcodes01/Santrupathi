import Image from "next/image";
import PureBite from "./pure_bite";
import WhyBread from "./why_bread";


export default function SecSection() {

    return <div className="hide-scrollbar">
       <div>
       <PureBite />
       </div>

        <div className=" flex items-end justify-end">
            <Image src="/pngwing.com (2).png" width={500} height={500} alt=" wheat.png" className="w-64 h-64"/>
        </div>

        <div>
            <WhyBread />
        </div>
    </div>
}