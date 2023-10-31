import Image from "next/image";
import Title from "./ui/Title";

export default function About() {
    return(
        <div className="bg-secondary flex h-screen">
            <div className="container mx-auto my-auto flex md:flex-row flex-col items-center gap-10">
                <div>
                    <div className="relative md:w-[27.813rem] w-[20rem] md:h-[37.5rem] h-[30.5rem]">
                        <Image src="/assets/images/about-img.png" layout="fill" alt="" />
                    </div>
                </div>
                <div className="flex flex-col text-white gap-7">
                    <Title className="text-5xl font-chelsea flex lg:flex-row md:flex-col sm:flex-row flex-col  gap-5 whitespace-nowrap">We are <p className="underline underline-offset-4 ml-11 scale-150 font-chelsea transition-all text-primary">Fooder</p></Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deleniti ad. Alias sit, perferendis beatae possimus deleniti provident, aspernatur molestias quasi quia est a magni vero quaerat illum ex odit vitae odio? Sint id alias cum atque ratione illo fugit.</p>
                    <div>
                        <button className="btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}