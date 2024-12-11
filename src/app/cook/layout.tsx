import Sidebar from "@/components/Sidebar"

const CookLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex">
            <div className="flex ">
                <Sidebar />
            </div>
            <div className="flex ml-80">
                 {children}
            </div>

        </main>
    )
}

export default CookLayout