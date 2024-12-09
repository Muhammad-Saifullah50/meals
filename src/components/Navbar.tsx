import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-8 border">
            <div className="font-bold text-2xl">
                <Link href="/"> Meals</Link></div>
                <Link href="/cook">
            <Button variant={'secondary'}>Cook Mode</Button>
            </Link>
        </nav >
    )
}

export default Navbar