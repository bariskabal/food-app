import Link from "next/link";
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";
import {FaUserAlt,FaShoppingCart,FaSearch} from "react-icons/fa"

export default function Header() {
    return (
        <div className="h-[5.5rem] bg-secondary">
            <div className="container flex mx-auto justify-between text-white items-center h-full">
                <Logo logo="Fooder" />
                <Menu />
                <div className="flex gap-x-4 items-center">
                    <Link className="hover:text-primary hover:transition-all" href="/">
                        <FaUserAlt />
                    </Link>
                    <Link className="hover:text-primary hover:transition-all" href="/">
                        <FaShoppingCart />
                    </Link>
                    <Link className="hover:text-primary hover:transition-all" href="/">
                        <FaSearch />
                    </Link>
                    <Link className="hover:text-primary hover:transition-all" href="/">
                        <button className="btn-primary">Order Online</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}