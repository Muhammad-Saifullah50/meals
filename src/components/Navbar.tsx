import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 border sticky top-0 left-0 z-50 bg-white bg-opacity-95">
            <div className="font-bold text-2xl">
                <Link href="/"> Meals</Link></div>
            <Link href="/cook">
                <Button variant={'secondary'}>Cook Mode</Button>
            </Link>
        </nav >
    )
}

export default Navbar