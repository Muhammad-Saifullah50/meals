import { sidebarLinks } from "@/constants"
import Link from "next/link"
import MobileSidebar from "./MobileSidebar"

const Sidebar = () => {
    return (
        <>
            <MobileSidebar />
            <section className='max-md:hidden w-80 fixed left-0 top-[4.5rem] border-r h-screen'>
                <div className="flex flex-col gap-4 py-4">
                    {sidebarLinks.map((link) => (
                        <Link
                            href={link.route}
                            key={link.route}
                            className="px-10 py-4 font-semibold border-b ">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </section>
        </>)
}

export default Sidebar