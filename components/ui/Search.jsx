import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import {AiFillCloseCircle} from "react-icons/ai"

export default function Search({ ...props }) {
    return(
        <div className="fixed w-screen h-screen z-100 after:content-[''] grid place-content-center after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-50">
            <OutsideClickHandler onOutsideClick={() => props.setIsSearchModal(false)}>
                <div className="w-full h-full grid place-content-center">
                    <div className="md:w-[37.5rem] w-[370px] h-auto relative z-50 bg-white border-2 rounded-3xl p-10">
                        <Title className=" text-[2.5rem] text-center">Search</Title>
                        <input type="text" className="border w-full my-10" placeholder="Search" />
                        <ul>
                            <li className="flex items-center border-b border-primary justify-between p-1 hover:bg-primary hover:transition-all">
                                <div className="relative w-12 h-12 flex">
                                    <Image src="/assets/images/pizza.jpg" className="rounded-full" layout="fill" alt=""/>
                                </div>
                                <span className="font-bold">Vegi Pizza</span>
                                <span className="font-bold">10$</span>
                            </li>
                            <li className="flex items-center border-b border-primary justify-between p-1 hover:bg-primary hover:transition-all">
                                <div className="relative w-12 h-12 flex">
                                    <Image src="/assets/images/pizza.jpg" className="rounded-full" layout="fill" alt=""/>
                                </div>
                                <span className="font-bold">Vegi Pizza</span>
                                <span className="font-bold">10$</span>
                            </li>
                            <li className="flex items-center border-primary justify-between p-1 hover:bg-primary hover:transition-all">
                                <div className="relative w-12 h-12 flex">
                                    <Image src="/assets/images/pizza.jpg" className="rounded-full" layout="fill" alt=""/>
                                </div>
                                <span className="font-bold">Vegi Pizza</span>
                                <span className="font-bold">10$</span>
                            </li>
                        </ul>
                        <button onClick={() => props.setIsSearchModal(false)} className="absolute top-4 right-4">
                            <AiFillCloseCircle size={30} className="hover:text-secondary hover:transition-all" />
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    )
}