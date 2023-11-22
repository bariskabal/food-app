import Image from "next/image";
import {MdAccountBox,MdSportsMotorsports} from "react-icons/md"
import {BsKeyFill} from "react-icons/bs"
import {BiSolidExit,BiSolidFoodMenu,BiSolidCategory,BiBookAlt} from "react-icons/bi"
import { useState } from "react";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import classNames from "classnames";
import Orders from "@/components/profile/Orders";
import Product from "@/components/admin/Products";
import Categories from "@/components/admin/Categories";
import Order from "@/components/admin/Order";
import Footer from "@/components/admin/Footer";

export default function Profile(){


    const [tabs, setTabs] = useState(0)

    return(
        <div className="flex container xl:gap-x-20 gap-x-10 md:flex-row flex-col items-center gap-y-10 py-10 mx-auto min-h-[calc(100vh_-_430px)]">
            <div className="h-auto w-72 flex-shrink-0  text-white rounded-xl">
                <div className="relative border rounded-t-xl bg-white text-black px-10 py-5 flex gap-y-2 flex-col items-center">
                    <Image src="/assets/images/admin.png" width={100} height={100} className="rounded-full border-4 border-primary" alt="" />
                    <span className="text-2xl">
                        Admin
                    </span>
                </div>
                <ul className="text-center bg-secondary rounded-xl">
                    <li onClick={() => setTabs(0)} className={classNames("border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-x-2",{
                        "bg-primary text-black" : tabs == 0
                    })}>
                        <BiSolidFoodMenu size={20} />
                        <button className="font-semibold">
                            Products
                        </button>
                    </li>
                    <li onClick={() => setTabs(1)} className={classNames("border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-x-2",{
                        "bg-primary text-black" : tabs == 1
                    })}>
                        <MdSportsMotorsports size={20} />
                        <button className="font-semibold">
                            Orders
                        </button>
                    </li>
                    <li onClick={() => setTabs(2)} className={classNames("border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-x-2",{
                        "bg-primary text-black" : tabs == 2
                    })}>
                        <BiSolidCategory size={20} />
                        <button className="font-semibold">
                            Categories
                        </button>
                    </li>
                    <li onClick={() => setTabs(3)} className={classNames("border border-t-0 px-9 w-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-x-2",{
                        "bg-primary text-black" : tabs == 3
                    })}>
                        <BiBookAlt size={20} />
                        <button className="font-semibold">
                            Footer
                        </button>
                    </li>
                    <li onClick={() => setTabs(4)} className={classNames("border rounded-b-xl px-9 w-full p-3 cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-x-2",{
                        "bg-primary text-black" : tabs == 4
                    })}>
                        <BiSolidExit size={20} />
                        <button className="font-semibold">
                            Exit
                        </button>
                    </li>
                </ul>
            </div>
            {tabs === 0 && (<Product />)}
            {tabs === 1 && (<Order />)}
            {tabs === 2 && (<Categories />)}
            {tabs === 3 && (<Footer />)}
        </div>
    )
}