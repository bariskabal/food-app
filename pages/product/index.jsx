import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import  {addProduct} from "../../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
    {
        id: 1,
        name: "Extra 1",
        price: 1
    },
    {
        id: 2,
        name: "Extra 2",
        price: 2
    },
    {
        id: 3,
        name: "Extra 3",
        price: 3
    }
]

const foodItems = [
    {
        id: 1,
        name: "Pizza 1",
        price: 10,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio error laudantium. Aperiam enim blanditiis quae atque. Et, excepturi? Corporis pariatur in fuga accusantium porro?",
        extraOptions: [
            {
                id: 1,
                name: "extra 1",
                price: 1
            }
        ]
    }
]

export default function Product() {

    const [prices, setPrices] = useState([10,20,30])
    const [price, setPrice] = useState(prices[0])
    const [size, setSize] = useState(0)
    const [extraItems, setExtraItems] = useState(itemsExtra)
    const [extras, setExtras] = useState([])
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    console.log(dispatch)

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size]
        setSize(sizeIndex)
        changePrice(difference)
    }

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked

        if(checked) {
            changePrice(item.price)
            setExtras([...extras, item])
        } else {
            changePrice(-item.price)
            setExtras(extras.filter((extra) => extra.id !== item.id))
        }
    }

    const handleClick = () => {
        dispatch(addProduct({...foodItems[0], extras, price, quantity:1}))
    }

    console.log(cart)
    return(
        <div className="bg-gray-200 py-20 md:py-0 flex md:flex-row flex-col items-center md:h-[calc(100vh_-_88px)] gap-20 px-14">
            <div className="relative md:flex-1 md:w-[60%] md:h-[60%] w-36 h-36">
                <Image src="/assets/images/f6.png" alt="" layout="fill" objectFit="contain" objectPosition="center"/>
            </div>
            <div className="flex-1 flex gap-y-4 flex-col md:text-start text-center">
                <Title className="text-6xl font-chelsea">Good Pizza</Title>
                <span className="text-secondary text-2xl font-bold underline underline-offset-1 inline-block">{price}$</span>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio error laudantium. Aperiam enim blanditiis quae atque. Et, excepturi? Corporis pariatur in fuga accusantium porro?</p>
                <div className="">
                    <h4 className="font-bold text-xl font-scriber">Choose the size</h4>
                    <div className="flex items-start md:justify-start justify-center gap-x-20 mt-4">
                        <div className="relative w-8 h-8 cursor-pointer" onClick={() => handleSize(0)}>
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-6 text-xs bg-primary rounded-full px-1">Small</span>
                        </div>
                        <div className="relative w-12 h-12 cursor-pointer" onClick={() => handleSize(1)}>
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-8 text-xs bg-primary rounded-full px-1">Medium</span>
                        </div>
                        <div className="relative w-16 h-16 cursor-pointer" onClick={() => handleSize(2)}>
                            <Image src="/assets/images/size.png" alt="" layout="fill" />
                            <span className="absolute -top-1 -right-3 text-xs bg-primary rounded-full px-1">Large</span>
                        </div>
                    </div>
                </div>
                <div className="flex md:justify-start justify-center gap-x-6">
                {extraItems.map((item) => (
                    <label key={item.id} className="!flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" onChange={(e) => handleChange(e, item)} />
                        <span className="text-sm font-semibold mb-1">{item.name}</span>
                    </label>
                ))}
                </div>
                <div>
                    <button onClick={handleClick} className="btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}