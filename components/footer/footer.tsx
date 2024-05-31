import Link from "next/link"

const Footer = () => {
    return (
        <footer className="p-4 lg:px-[60px] pt-[15px] pb-[23px] border-t-2 border-t-[#333] py-4 flex flex-col sm:flex-row sm:justify-between lg:items-center gap-5">
            <ul className="flex lg:flex-row lg:justify-between lg:items-center">
                <ul className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-6  gap-y-6 sm:gap-y-0 justify-self-end">
                    <li className="text-[#FFFFFF80] text-base leading-[35px]"><Link  href='#our-story'>Facebook</Link></li>
                    <li className="text-[#FFFFFF80] text-base leading-[35px]"><Link href='#our-works'>Instagram</Link></li>
                    <li className="text-[#FFFFFF80] text-base leading-[35px]"><Link href='#service'>Youtube</Link></li>
                </ul>
            </ul>
            <p className="text-[#FFFFFF80] text-base leading-[35px]">© 2022 Všechna práva vyhrazena.</p>
        </footer>
    )
}

export default Footer