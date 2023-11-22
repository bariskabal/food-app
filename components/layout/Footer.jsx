import Title from "../ui/Title";
import {AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import {RiTwitterXFill} from "react-icons/ri"
 
export default function Footer() {
    return(
        <div className="bg-secondary">
            <div className="container mx-auto text-white pt-16 pb-6">
                <div className="flex justify-between md:flex-row gap-y-20 flex-col gap-x-20 px-20 pb-10">
                    <div className="">
                        <Title className="text-2xl text-center">Contact Us</Title>
                        <div className="flex gap-y-3 flex-col mt-6 items-center">
                            <a className="flex items-center gap-x-2">
                                <i className="fa fa-map-marker"></i>
                                <span>Location</span>
                            </a>
                            <a className="flex items-center gap-x-2">
                                <i className="fa fa-phone"></i>
                                <span>90924932493</span>
                            </a>
                            <a className="flex items-center gap-x-2">
                                <i className="fa fa-envelope"></i>
                                <span>demo@demo.com</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Title className="text-5xl text-center text-primary !font-chelsea">Fooder</Title>
                        <div className="flex gap-y-3 flex-col mt-6 items-center text-center">
                            <span className="flex items-center gap-x-2 max-w-xs">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quae repudiandae! Reprehenderit voluptatibus assumenda atque corporis laborum aliquam aliquid. Esse!</p>
                            </span>
                            <div className="flex items-center gap-x-2 mt-5">
                                <AiFillInstagram className="hover:text-primary duration-300 transition-all w-6 h-6 rounded-full" />
                                <RiTwitterXFill className="hover:text-primary duration-300 transition-all w-6 h-6 rounded-full"/>
                                <AiFillLinkedin className="hover:text-primary duration-300 transition-all w-6 h-6 rounded-full"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Title className="text-2xl text-center">Opening Hours</Title>
                        <div className="flex gap-y-3 flex-col mt-6 items-center text-center">
                            <span className="">
                                Everyday
                            </span>
                            <span className="">
                                9.00 Am - 6.00 Pm
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center">Copyright @2023 </p>
                </div>
            </div>
        </div>
    )
}