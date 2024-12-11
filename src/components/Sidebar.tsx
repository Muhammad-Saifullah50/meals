import { sidebarLinks } from "@/constants"
import Link from "next/link"

const Sidebar = () => {
    return (
        <section className='w-80  fixed left-0 top-18'>
            <div className="flex flex-col gap-4">
                {sidebarLinks.map((link) => (
                    <Link
                        href={link.route}
                        key={link.route}
                        className="">
                        {link.label}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Sidebar