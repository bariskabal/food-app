import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

export default function Carousel(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:  false,
        autoplay: true,
        autoplaySpeed: 3500,
        appenDots: (dots) => (
            <div>
                <ul>{dots}</ul>
            </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
        )
    };

    return(
        <div className="h-screen w-full container mx-auto -mt-[5.5rem]">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative h-full w-full">
                    <Image src="/assets/images/bg3.jpg" alt="" layout="fill" objectFit="cover" />
                </div>
            </div>
            <Slider {...settings}>
                <div className="relative">
                    <div className="text-white mt-48 flex flex-col items-start gap-y-10">
                        <Title className="text-6xl font-bold font-chelsea">Fast Food Restaurant</Title>
                        <p className="text-sm sm:w-2/5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis temporibus quos laborum, quaerat saepe!</p>
                        <button className="btn-primary font-chelsea">Order Now</button>
                    </div>
                </div>
                <div>
                    <div className="text-white mt-48 flex flex-col items-start gap-y-10">
                        <Title className="text-6xl font-bold font-chelsea">Fast Food Restaurant</Title>
                        <p className="text-sm sm:w-2/5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis temporibus quos laborum, quaerat saepe!</p>
                        <button className="btn-primary font-chelsea">Order Now</button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}