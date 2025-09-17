"use client";

import React, { useState } from "react";
import { FaTruck, FaMoneyBillWave, FaMedal, FaHeadset } from "react-icons/fa";
import Container from "./Container";

// Типизация иконки как React.ReactNode
type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    id: 1,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: <FaTruck className="text-4xl text-orange-500" />,
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: <FaMedal className="text-4xl text-blue-500" />,
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: <FaHeadset className="text-4xl text-gray-600" />,
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number>(1);

  return (
    <section className="py-10 px-4 bg-white">
      <Container>
        <h2 className="text-2xl font-bold text-[#151875] text-center mb-8">
          What Shopex Offer!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`cursor-pointer bg-white rounded-lg shadow-md p-6 text-center transition-all duration-200 border-b-4 
              ${
                activeFeature === feature.id
                  ? "border-orange-400"
                  : "border-transparent"
              } hover:shadow-lg`}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
