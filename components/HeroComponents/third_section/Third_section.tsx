import Enjoy from "./Enjoy";
import Goods from "./goods";
import {firstSetProducts} from '../../../app/goodData'
import {secondSetProducts} from '../../../app/goodData'


export default function ThirdSection() {
    return (
      <div className="-mt-32 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <Enjoy />
        </div>
        <div className="w-full flex items-center lg:px-0 px-8  justify-center">
          <Goods products={firstSetProducts} />
        </div>
        <div className="w-full flex items-center  justify-center">
          <Goods products={secondSetProducts} />
        </div>
      </div>
    );
  }