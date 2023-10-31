import Image from "next/image";

export default function Order(){
    return(
        <div className=" overflow-x-auto">
            <div className="min-h-[calc(100vh_-_430px)]  min-w-[1000px] flex justify-center items-center flex-col p-10">
                <div className="max-h-28 flex items-center flex-1 w-full">
                    <table className="w-full text-sm text-center text-gray-500">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6">Order Id</th>
                                <th scope="col" className="py-3 px-6">Customer</th>
                                <th scope="col" className="py-3 px-6">Address</th>
                                <th scope="col" className="py-3 px-6">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="transition-all duration-300 bg-secondary border-gray-700 hover:bg-primary ">
                                <td  className="py-4 px-6 font-medium flex items-center justify-center gap-x-2 whitespace-nowrap ">
                                    <span>123123124214</span>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap ">
                                    <span>Barış Kabal</span>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap ">
                                    <span>ÇKALE</span>
                                </td>
                                <td className="py-4 px-6 font-medium whitespace-nowrap ">
                                    <span>$20</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex w-full justify-between mt-10 p-10 bg-primary">
                    <div className="relative flex flex-col items-center">
                        <Image src="/assets/images/paid.png" objectFit="cover" width={40} height={40} alt="" />
                        <span>Payment</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <Image src="/assets/images/bake.png" objectFit="cover" width={40} height={40} alt="" />
                        <span>Preparing</span>
                    </div>
                    <div className="relative flex flex-col items-center animate-pulse">
                        <Image src="/assets/images/bike.png" objectFit="cover" width={40} height={40} alt="" />
                        <span>On the way</span>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <Image src="/assets/images/delivered.png" objectFit="cover" width={40} height={40} alt="" />
                        <span>Delivered</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 