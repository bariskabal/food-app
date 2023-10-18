import Title from "../ui/Title";
import { menuWrapperCategories } from "@/utils/consts";
import MenuItem from "./MenuItem";
import { menuItems } from "@/mock";

export default function MenuWrapper() {
    return(
        <div className="container mx-auto">
            <div className="flex items-center flex-col py-8 gap-y-10">
                <Title className="text-5xl font-bold font-chelsea text-primary">Our Menu</Title>
                <div className="flex gap-x-5">
                    {menuWrapperCategories.map((item,index) => (
                        <button key={index} className="px-7 py-2 min-w-[6rem] rounded-3xl text-white bg-secondary">{item.title}</button>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
                    {menuItems.map((item,index) => (
                        <MenuItem item={item} key={index} />
                    ))}
                </div>
                <button className="btn-primary">View More</button>
            </div>
        </div>
    )
}