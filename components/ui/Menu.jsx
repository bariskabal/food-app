import {mainMenu} from "../../utils/consts"
import Link from "next/link";

export default function Menu() {
    return(
        <nav>
            <ul className="flex gap-x-2">
                {mainMenu.map((menuItem,index) => (
                    <li className="px-[0.313rem] py-5 font-mono hover:text-primary hover:transition-all" key={index}>
                        {console.log(menuItem.path)}
                        <Link href={menuItem.path} className="">{menuItem.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}