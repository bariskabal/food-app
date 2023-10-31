import Title from "../ui/Title";
import CustomerItem from "./customerItem";
import { customerItems } from "@/mock";
import Slider from "react-slick";
import {GrNext,GrPrevious} from "react-icons/gr"

export default function Customers() {


    const NextBtn = ({onClick}) => {
        return(
            <button className="absolute -bottom-12 left-1/2 bg-primary p-2 flex !text-white items-center justify-center w-10 h-10 rounded-full" onClick={onClick}><GrNext /></button>
        )
    } 

    const PrevBtn = ({onClick}) => {
        return(
            <button className="mr-2 absolute -bottom-12 right-1/2 bg-primary p-2 flex text-white items-center justify-center w-10 h-10 rounded-full" onClick={onClick}><GrPrevious /></button>
        )
    } 

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };


    return(
        <div className="container mx-auto py-20">
            <Title className="text-4xl text-center">What Says Our Customers</Title>  
                <Slider {...settings}>
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                </Slider>
        </div>
    )
}