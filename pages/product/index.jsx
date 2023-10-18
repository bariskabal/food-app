import Title from "@/components/ui/Title";
import Image from "next/image";

export default function Product() {
    return(
        <div className="bg-gray-200 flex md:flex-row flex-col items-center h-screen gap-20 px-14">
            <div className="relative flex-1 w-[60%] h-[60%]">
                <Image src="/assets/images/f6.png" alt="" layout="fill" objectFit="contain" objectPosition="center"/>
            </div>
            <div className="flex-1 flex gap-y-4 flex-col md:text-start text-center">
                <Title className="text-6xl font-chelsea">Good Pizza</Title>
                <span className="text-secondary text-2xl font-bold underline underline-offset-1 inline-block">$10</span>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio error laudantium. Aperiam enim blanditiis quae atque. Et, excepturi? Corporis pariatur in fuga accusantium porro?</p>
                <div className="">
                    <h4 className="font-bold text-xl font-scriber">Choose the size</h4>
                    <div className="flex items-start md:justify-start justify-center gap-x-20 mt-4">
                        <div className="relative w-8 h-8">
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-6 text-xs bg-primary rounded-full px-1">Small</span>
                        </div>
                        <div className="relative w-12 h-12">
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-8 text-xs bg-primary rounded-full px-1">Medium</span>
                        </div>
                        <div className="relative w-16 h-16">
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-3 text-xs bg-primary rounded-full px-1">Large</span>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-start justify-center gap-x-6">
                    <label className="!flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold mb-1">Ketçap</span>
                    </label>
                    <label className="!flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold mb-1">Mayonez</span>
                    </label>
                    <label className="!flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold mb-1">Zeyin</span>
                    </label>
                </div>
                <div>
                    <button className="btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}