
interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="px-4 lg:px-[60px] border-y-2 flex flex-col justify-center border-[#333] bg-[#252525] h-[231px]">
      <p className="text-white text-[55px] leading-[35px]">{title}</p>
    </div>
  );
}

export default PageTitle