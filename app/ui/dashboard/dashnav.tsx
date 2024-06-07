import NavLinks from "@/app/ui/navlinks";
import HomeIcon from "@/app/ui/dashboard/home-icon";

export default function DashNav() {
    return (
        <div className="flex h-full flex-row md:flex-col">
            <HomeIcon />
            <div className="flex flex-row items-center md:items-stretch md:flex-col mx-auto w-full h-full p-2 space-x-2 md:space-x-0 md:space-y-2 ">

                <NavLinks />

            </div>
        </div>

    );
}