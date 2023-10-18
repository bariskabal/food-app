import Image from "next/image";
import {BsFillCartFill} from "react-icons/bs"

export default function MenuItem({ item, key }) {
    return(
        <div className="rounded-3xl hover:scale-105 transition-all duration-200">
            <div className="w-full bg-white h-52 grid place-content-center rounded-t-2xl">
                <div className="relative w-36 h-36">
                    <Image src={item.imageUrl} layout="fill" alt="" />
                </div>
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