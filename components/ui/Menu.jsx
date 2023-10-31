import {mainMenu} from "../../utils/consts"
import Link from "next/link";
import {AiFillCloseCircle} from "react-icons/ai"

export default function Menu({ ...props }) {
    return(
        <nav className={`sm:static absolute h-screen top-0 left-0 sm:w-auto sm:flex hidden sm:h-auto w-full sm:text-white text-black sm:bg-transparent bg-white ${props.isMenuModal === true && "!grid place-content-center" }`}>
            <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                {mainMenu.map((menuItem,index) => (
                    <li  key={index} className="px-[0.313rem] py-5 font-chelsea hover:text-primary hover:transition-all">
                        <Link href={menuItem.path} className="">{menuItem.title}</Link>
                    </li>
                ))}
            </ul>
            {props.isMenuModal && (
                <button onClick={() => props.setIsMenuModal(false)} className="absolute top-4 right-4">
                    <AiFillCloseCircle size={30} className="hover:text-secondary hover:transition-all" />
                </button>
            )}
        </nav>
    )
}