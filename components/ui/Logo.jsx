import Link from "next/link";

export default function Logo({ logo }) {
    return (
        <div className="text-[2rem] font-caviar font-bold hover:text-primary hover:transition-all cursor-pointer">
            <Link href="/">{logo}</Link>
        </div>
    )
}