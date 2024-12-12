import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"


const MobileSidebar = () => {
    return (
        <Sheet >
            <SheetTrigger className=" absolute -left-5 top-0 bg-white p-4 rounded-full border md:hidden">
                <Image
                    src={'/sidebaricon.svg'}
                    width={30}
                    height={30}
                    alt="sidebar icon"
                />
            </SheetTrigger>

            <SheetContent side={'left'} className="md:hidden">
                <SheetTitle className="text-black">Menu</SheetTitle>
                        <div className="flex flex-col gap-4 py-4">
                            {sidebarLinks.map((link) => (
                                <SheetClose asChild key={link.route}>
                                    <Link
                                        href={link.route}
                                        key={link.route}
                                        className="px-10 py-4 font-semibold border-b ">
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar
