import Image from "next/image";
import Link from "next/link";
import {BsFillCartFill} from "react-icons/bs"

export default function MenuItem({ item }) {
    return(
        <div className="rounded-2xl border hover:scale-105 transition-all duration-200">
            <div className="w-full bg-white h-52 grid place-content-center rounded-t-2xl">
                <Link href="/product">
                    <div className="relative w-36 h-36">
                        <Image src={item.imageUrl} layout="fill" alt="" />
                    </div>
                </Link>
            </div>
            <div className="text-white p-6 flex flex-col gap-y-5 bg-secondary rounded-b-2xl">
                <div className="flex flex-col gap-y-2">
                    <h4 className="font-chelsea text-2xl">{item.title}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="flex justify-between ">
                    <span>{item.fee} $</span>
                    <button className="btn-primary w-auto !px-2 rounded-full"><BsFillCartFill size={20} /></button>
                </div>
            </div>
        </div>  

    )
}