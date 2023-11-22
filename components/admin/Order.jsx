import Title from "../ui/Title";

export default function Order() {
    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title className="text-5xl lg:text-start text-center font-righteous">Orders</Title>
            <div className="overflow-auto max-h-[400px] w-full mt-5">
                <table className="w-full text-sm text-center text-gray-500 xl:min-w-[800px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                    <th scope="col" className="py-3 px-6">
                        Product Id
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Customer
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Total
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Payment
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                        
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            63049e92...
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Barış Kabal
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            $ 10
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Cash
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Preparing
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <button className="btn-primary !bg-success">Next Stage</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
    )
}