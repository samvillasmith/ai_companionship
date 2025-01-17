import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children
} : {
        children: React.ReactNode;
    }) => {
    return ( 
        <div className="h-full dark:bg-zinc-900">
            <Navbar />
            <div className="hidden md:flex mt-[64px] w-20 flex-col fixed inset-y-0">
                <Sidebar />
            </div>
            <main className="md:pl-20 pt-[64px] h-full">
                {children}
            </main>
        </div>
     );
}
 
export default RootLayout;