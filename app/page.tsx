import Image from "next/image";
import blackhole from '@/public/images/blackhole.svg'
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="p-5 flex flex-col lg:flex-row lg:justify-center lg:items-center min-h-screen gap-[60px]">
      <div >
        <Image
            src={blackhole}
            alt="black-hole"
            className="border-[12px] mx-auto lg:mx-0 border-[#444444] rounded-full"
        />
      </div>
      <div className="flex flex-col gap-11">
        <h3 className="text-[24px] leading-[35px] text-[#FFFFFF80] ">Full Stack Developer</h3>
        <h2 className="text-white font-bold text-[70px] leading-[35px]">DevRos</h2>
        <p className="text-[20px] leading-[35px] text-[#FFFFFF80] lg:w-[560px] xl:w-[803px]">Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !</p>
        
        <div className="flex flex-wrap  gap-4">
          <Button link="/portfolio" btnText="Portfolio" btnStyle="border-[#007CED]"/>
          <Button link="/contact" btnText="Kontakt" btnStyle="border-[#D5D5D5]"/>
        </div>
      </div>
    </main>
  );
}
