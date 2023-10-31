import About from "@/components/AboutUs"
import Campaigns from "@/components/campaigns"
import Carousel from "@/components/Carousel"
import Customers from "@/components/customers"
import MenuWrapper from "@/components/product/MenuWrapper"
import Reservation from "@/components/reservation"
import React from "react"

export default function Home(){
    return (
        <>
            <Carousel />
            <div className="bg-gray-200">
                <Campaigns />   
                <MenuWrapper />
            </div>
            <About />
            <div className="bg-gray-200">
                <Reservation />
            </div>
            <div className="bg-gray-200">
                <Customers />
            </div>
        </>
    )
}