import Link from "next/link";

export default function Logo({ logo }) {
    return (
        <div className="text-[2rem] text-primary font-chelsea font-bold hover:text-white hover:transition-all cursor-pointer">
            <Link href="/">{logo}</Link>
        </div>
    )
}