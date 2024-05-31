import Link from "next/link";

interface ButtonProps {
  btnText: string;
  btnStyle?: string;
  link: string;
}
const Button: React.FC<ButtonProps> = ({ btnText, link, btnStyle }) => {
  return (
    <Link href={link} className={`${btnStyle} pt-[13px] pb-[19px] px-12 bg-[#333] text-white text-[20px] leading-[35px] rounded-full border-[3px]`}>
        {/* <span className=""></span> */}
        {btnText}
    </Link>
  )
}

export default Button