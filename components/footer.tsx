import { Heebo } from 'next/font/google';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const heebo = Heebo({subsets:["latin"]});

const Footer = () => {

    return(
        <div className="bg-footerColor h-[243px] flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
                <Link href={''}>
            <FaSquareFacebook className="w-[30px] h-[30px]"/>
            </Link>

            <Link href={''}>
            <FaInstagram className="w-[30px] h-[30px]"/>
            </Link>

            <Link href={''}>
            <FaTwitter className="w-[30px] h-[30px]"/>
            </Link>

            <Link href={''}>
            <FaLinkedin className="w-[30px] h-[30px]"/>
            </Link>

            </div>

            <p className={`${heebo.className} text-center font-medium md:text-[22px] text-[16px]`}>
            Copyright ©2020 All rights reserved
            </p>
            </div>
    )
}

export default Footer;