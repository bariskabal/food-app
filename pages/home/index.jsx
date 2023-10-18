import About from "@/components/About"
import Campaigns from "@/components/campaigns"
import Carousel from "@/components/Carousel"
import MenuWrapper from "@/components/product/MenuWrapper"

export default function Home(){
    return (
        <div className="">
            <Carousel />
            <div className="bg-gray-200">
                <Campaigns />   
                <MenuWrapper />
            </div>
            <About />
        </div>
    )
}