import Image from "next/image";

export default function CustomerItem() {
    return (
        <div className="mt-4 mx-3">
            <div className="p-6 bg-secondary text-white rounded-md mt-20">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odit aperiam quam error sed voluptate qui unde magni deleniti harum?</p>
                <div className="flex flex-col mt-4">
                    <span className="text-lg font-semibold">deneme</span>
                    <span className="text-sm">deneme2</span>
                </div>
            </div>
            <div className="relative w-28 mt-8 h-28 border-4 rounded-full border-primary before:content-[''] before:absolute before:top-5 flex justify-center before:bg-primary before:w-5 before:h-5 before:-translate-y-8 before:rotate-45">
                <Image src="/assets/images/client1.jpg" alt="" layout="fill" className="rounded-full" />
            </div>
        </div>
    )
}