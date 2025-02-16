import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

export default function WhyBread() {
  const features = [
    {
      icon: <FaBagShopping size={28} />,
      title: "Easy to Order",
      description: "Our mission is to bring the art of bread making to its roots and to share our passion for bread with others.",
      borderRadius: "rounded-[75%_65%_80%_85%_/80%_70%_75%_85%]"
    },
    {
      icon: <MdDeliveryDining size={28} />,
      title: "Fast Delivery",
      description: "Fresh bread delivered straight to your doorstep, maintaining quality and freshness throughout the journey.",
      borderRadius: "rounded-[80%_60%_70%_90%_/85%_75%_70%_80%]"
    },
    {
      icon: <FaMedal size={28} />,
      title: "Premium Quality",
      description: "Using only the finest ingredients and traditional techniques to create authentic, artisanal bread products.",
      borderRadius: "rounded-[85%_75%_80%_70%_/75%_85%_65%_80%]"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-serif text-teal-800 text-center mb-12">
        Why Bread?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center sm:w-96 text-center lg:w-80 p-6 bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative ${feature.borderRadius}`}
            style={{
              boxShadow: "-20px 0px 40px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-center text-teal-800 justify-center w-16 h-16 mb-6 bg-[#ebf6fa] rounded-[80%_70%_70%_80%_/90%_90%_60%_80%]">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold font-poppins text-amber-800 mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 mb-6 font-poppins text-sm leading-relaxed">
              {feature.description}
            </p>

            <button className="relative text-teal-800 hover:text-orange-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-orange-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-orange-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              Read more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
