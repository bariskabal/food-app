import Title from "@/components/ui/Title";
import Image from "next/image";

export default function Cart() {
    return(
        <div className="min-h-[calc(100vh_-_430px)]">
            <div className="flex justify-between items-center md:flex-row flex-col">
                <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
                <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6">Product</th>
                                <th scope="col" className="py-3 px-6">Extras</th>
                                <th scope="col" className="py-3 px-6">Price</th>
                                <th scope="col" className="py-3 px-6">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="transition-all duration-300 bg-secondary border-gray-700 hover:bg-primary ">
                                <td  className="py-4 px-6 font-medium flex items-center justify-center gap-x-2 whitespace-nowrap hover:text-white">
                                    <div>
                                        <Image src="/assets/images/f1.png" width={45} height={45} alt="" />
                                        <span>Good Pizza</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                    <span>Mayonez, Ketçap, Acı sos</span>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                    <span>$20</span>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                    <span>1</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bg-secondary md:w-auto w-full md:text-start text-center min-h-[calc(100vh_-_430px)] flex justify-center flex-col p-12 text-white" >
                    <Title className="text-4xl ">Cart Total</Title>
                    <div className="mt-8">
                        <b>Subtotal:</b> $20 <br />
                        <b className="inline-block my-1">Discount:</b>  $20 <br />
                        <b>Total:</b>  $20 <br />
                    </div>
                    <div className="flex justify-center">
                        <button className=" btn-primary md:w-auto w-52 mt-4">Checkout Now</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}