import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-8 border">
            <div className="font-bold text-2xl">
                <Link href="/"> Meals</Link></div>
            <div>Cook Mode</div>
        </nav >
    )
}

export default Navbar