import Sidebar from "@/components/Sidebar"

const CookLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="md:flex w-full">
            <div className="flex h-full overflow-y-auto">
                <Sidebar />
            </div>
            <div className="md:flex md:ml-80">
                 {children}
            </div>

        </main>
    )
}

export default CookLayout