'use client'

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import tel from '@/public/images/tel.svg'
import location from '@/public/images/location.svg'
import mail from '@/public/images/mail.svg'
import map from '@/public/images/map.svg'
import ContentBlock from "@/components/ContentBlock";
import ProgressBar from "@/components/progressBar";


const contentList = [
  {
    src: tel,
    alt: 'tel',
    title: '720 244 551 -2',
    description: 'Fahradit klasický smysluplný text vhodnou bezvýznamovo'
  },
  {
    src: location,
    alt: 'location',
    title: 'Česká Republika',
    description: 'Fahradit klasický smysluplný text vhodnou bezvýznamovo'
  },
  {
    src: mail,
    alt: 'mail',
    title: 'fiktivni@gmail.com',
    description: 'Fahradit klasický smysluplný text vhodnou bezvýznamovo'
  }
];
const ContactForm = () =>  {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="flex flex-col px-4 lg:px-16 py-[30px]">
      <div className="mb-8">
        <Image
            src={map}
            alt="map"
            height={146}
            // className="mb-8 "
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[40px] ">
        <div className="md:min-w-[511px] flex flex-col gap-y-4 lg:gap-y-[43px]">
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
        <div className="w-full">
          <div className="mb-9">
            <h3 className="text-white font-bold text-[28px] leading-[35px]">Kontaktuj mě !</h3>
            <ProgressBar styled={false}  progress={31.49}  barStyle="w-[127px] h-[2px] mt-[5px]" progressStyle=" w-[40px] h-[2px]"/>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="w-full flex flex-col xl:flex-row gap-[34px] rounded-lg">
              <div className="flex flex-col xl:w-1/2 gap-7">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jméno a příjmení"
                  className="px-5 py-4  placeholder-[#FFFFFF80] border-2 border-[#555555] bg-transparent rounded-[5px] text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="px-5 py-4  placeholder-[#FFFFFF80] border-2 border-[#555555] bg-transparent rounded-[5px] text-white"
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-5 py-4 placeholder-[#FFFFFF80] border-2 border-[#555555] bg-transparent rounded-[5px] text-[#FFFFFF80]"
                >
                  <option value="" disabled>Spolupráce</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="flex flex-col xl:w-1/2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Zpráva..."
                  className="px-5 py-4 h-full placeholder-[#FFFFFF80] bg-transparent border-2 border-[#555555] rounded-lg text-white resize-none"
                />
              </div>
            </div>
            <div className="lg:w-full flex mt-7">
              <button
                type="submit"
                className="px-[40px] py-[13px] border-[3px] text-white text-[20px] leading-[35px] border-[#007CED] bg-[#333] text-blue-500 rounded-full"
              >
                Odeslat
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactForm;