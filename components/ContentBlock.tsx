import Image from 'next/image';

interface ContentBlockProps {
  src: any; // You may need to adjust the type based on your image imports
  alt: string;
  title: string;
  description: string;
}


const ContentBlock: React.FC<ContentBlockProps> = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row  items-start gap-4 lg:gap-[27px]">
        <Image src={src} alt={alt} />
        <div>
        <h4 className="text-white font-bold text-[18px] leading-[35px]">{title}</h4>
        <p className="text-[#FFFFFFB2] text-[16px] leading-[30px] lg:max-w-[720px]">{description}</p>
        </div>
    </div>
  );
}

export default ContentBlock;