import ProgressBar from "@/components/progressBar";

import pen from '@/public/images/pen.svg'
import monitor from '@/public/images/monitor.svg'
import home from '@/public/images/home.svg'
import ContentBlock from "@/components/ContentBlock";


const contentList = [
  {
    src: pen,
    alt: 'pen',
    title: 'UI / UX Design',
    description: 'Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou'
  },
  {
    src: monitor,
    alt: 'monitor',
    title: 'UI / UX Design',
    description: 'Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou'
  },
  {
    src: home,
    alt: 'home',
    title: 'UI / UX Design',
    description: 'Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou'
  }
];

export default function FE() {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-16 py-[60px] gap-[40px]">
      <div className="lg:w-2/5">
        <div>
          <h3 className="text-white font-bold text-[28px] leading-[35px]">Co dělám ?</h3>
          <ProgressBar styled={false}  progress={31.49}  barStyle="w-[127px] h-[2px] mt-[5px]" progressStyle=" w-[40px] h-[2px]"/>
        </div>

        <div className="mt-[27px] flex flex-col gap-y-[43px]">
          {contentList.map((item, index) => (
            <ContentBlock
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="lg:w-2/5">
        <div>
          <h3 className="text-white font-bold text-[28px] leading-[35px]">Coding Skills</h3>
          <ProgressBar styled={false} progress={31.49}  barStyle="w-[81.05px] h-[2px] mt-[5px]" progressStyle=" w-[25.53px] h-[2px]"/>
        </div>

        <div className="mt-[27px]">
          <ProgressBar  styled={true} label="HTML" progress={100}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
          <ProgressBar  styled={true} label="CSS" progress={80}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
          <ProgressBar  styled={true} label="JavaScript" progress={60}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
          <ProgressBar  styled={true} label="React" progress={35}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
          <ProgressBar  styled={true} label="Sass" progress={30}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
          <ProgressBar  styled={true} label="GreenShock" progress={20}  barStyle="mb-[31px]" progressStyle=" w-[25.53px] h-[2px]"/>
        </div>
      </div>
    </main>
  );
}
