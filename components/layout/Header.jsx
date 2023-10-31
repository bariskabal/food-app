import Link from "next/link";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import {FaUserAlt,FaShoppingCart,FaSearch} from "react-icons/fa"
import { useState } from "react";
import Search from "../ui/Search"
import {GiHamburgerMenu} from "react-icons/gi"
import { useRouter } from "next/router";
import classNames from 'classnames';

export default function Header() {

    const [isSearchModal,setIsSearchModal] = useState(false)
    const [isMenuModal,setIsMenuModal] = useState(false)

    const router = useRouter()

    return (
        <div className={classNames("h-[5.5rem] bg-secondary z-50 relative", {
            "bg-transparent" : router.asPath == "/"
        })}>
            <div className="container mx-auto text-white flex justify-between items-center h-full">
                <Logo logo="Fooder" />
                <Menu isMenuModal={isMenuModal} setIsMenuModal={setIsMenuModal}/>
                <div className="flex gap-x-4 items-center">
                    <Link className="hover:text-primary hover:transition-all" href="/auth/login">
                        <FaUserAlt />
                    </Link>
                    <Link className="hover:text-primary hover:transition-all" href="/cart">
                        <FaShoppingCart />
                    </Link>
                    <Link onClick={() => setIsSearchModal(true)} type="button" className="hover:text-primary hover:transition-all" href="/">
                        <FaSearch />
                    </Link>
                    <Link className="hover:text-primary font-chelsea hover:transition-all md:inline-block hidden" href="/">
                        <button className="btn-primary">Order Online</button>
                    </Link>
                    <Link onClick={() => setIsMenuModal(true)} className="hover:text-primary hover:transition-all inline-block md:hidden" href="/">
                        <GiHamburgerMenu size={25} />
                    </Link>
                </div>
            </div>
            {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
        </div>
    )
}