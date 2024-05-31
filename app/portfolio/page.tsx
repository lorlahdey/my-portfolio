"use client"

import { useState } from 'react';
import Image from "next/image";
import ProgressBar from "@/components/progressBar";
import blackhole from '@/public/images/blackhole.svg'
import img1 from '@/public/images/galleryImg1.svg'

const images = [
  { id: 1, src: img1, category: 'Web' },
  { id: 2, src: blackhole, category: 'Komponenty' },
  { id: 3, src: blackhole, category: 'Animace' },
  { id: 4, src: img1, category: 'Mockups' },
  // Add more images as needed
];

const categories = ['All', 'Web', 'Komponenty', 'Animace', 'Mockups'];
export default function Portfolio() {
  // const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleTabClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(image => image.category === activeCategory);
  
  return (
    <main className="flex flex-col px-4 lg:px-16 py-[49px]">
      <div>
        <h3 className="text-white font-bold text-[28px] leading-[35px]">Klienti</h3>
        <ProgressBar styled={false} progress={31.49}  barStyle="w-[127px] h-[2px] mt-[5px]" progressStyle=" w-[40px] h-[2px]"/>
        <div className="mx-auto mb-[51px] mt-[31px] w-full lg:w-[720px] xl:w-[1106px] flex flex-row flex-wrap justify-between gap-[30px]">
          <p className="text-[20px] leading-[35px] font-bold text-[#FFFFFF80]">Dev <span className="font-normal">Ros</span></p>
          <p className="text-[20px] leading-[35px] font-bold text-[#FFFFFF80]">Cukrárna  <span className="font-normal">Merkur</span></p>
          <p className="text-[20px] leading-[35px] font-bold text-[#FFFFFF80]">Pekárna <span className="font-normal">Merkur</span></p>
          <p className="text-[20px] leading-[35px] font-bold text-[#FFFFFF80]"><span className="font-normal">Místo pro tvoji firmu</span></p>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold text-[28px] leading-[35px]">Galerie</h3>
        <ProgressBar styled={false} progress={31.49}  barStyle="w-[127px] h-[2px] mt-[5px]" progressStyle=" w-[40px] h-[2px]"/>

        <div className="p-6  text-white">
          <div className="flex gap-6 mb-6 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 px-4 whitespace-nowrap  ${activeCategory === category ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
          <div className="flex overflow-x-auto gap-4 pb-4">
            {filteredImages.map(image => (
              // <div key={image.id} className="relative h-64">
              <div key={image.id} className="flex-shrink-0 w-64 h-64 relative">
                <Image src={image.src} alt={image.category} layout="fill" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
