import Title from "@/components/ui/Title";
import Image from "next/image";
import {BsFillCartFill} from "react-icons/bs"

export default function Campaign({...props}) {
    return(
        <div className="bg-secondary rounded-2xl flex-1 flex flex-row py-5 px-4 gap-x-5">
            <div className="relative w-40 h-40  border-4 rounded-full border-primary overflow-hidden">
                <Image src={props.item.imageUrl} layout="fill" alt="" objectFit="cover"  className="rounded-full hover:scale-105 transition-all duration-500" />
            </div>
            <div className="flex flex-col gap-y-2">
                <Title className="text-3xl text-white font-bold font-chelsea">{props.item.title}</Title>
                <div className="text-white text-4xl font-scriber">
                    {props.item.campaignAmount}
                </div>
                <div>
                    <button className="btn-primary font-chelsea flex items-center whitespace-nowrap gap-x-2">Order Now
                    <BsFillCartFill size={20} />
                    </button>
                </div> 
            </div>
        </div>
    )
}