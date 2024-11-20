import {Inter} from "next/font/google";
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

const Navbar = () => {

    let nav = [
        {name: "Work",
        link: "#"
        },
        {name: "Blog",
            link: "#"
            },
            {name: "Contact",
                link: "#"
                },

    ]

    return(
        <ul className={`${inter.className} flex justify-end items-center gap-6 h-[24px] text-[20px] font-medium m-[66px]`}>
          
         { nav.map((item, i) => (
            <li key={i}>
                <Link href={item.link}>
                {item.name}
                </Link>
                </li>
         ))}
        </ul>
    )
}

export default Navbar;