import Button from "@/app/ui/button";
import InfoCards from "@/app/ui/project1/info-cards";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Page() {
    return (
        <>
            <div className="h-0">

                <div className="fixed flex items-center h-10 w-full">
                    <div className="w-4/5 md:w-full pl-6 pt-6 flex">
                        <div className="hidden md:flex flex-row w-full space-x-3">
                            <Button buttonText="Welcome" linkUrl="#hero" />
                            <Button buttonText="Tours" linkUrl="#tours" />
                            <Button buttonText="Info" linkUrl="#info" />
                        </div>

                    </div>
                    <Bars3Icon className="h-10 md:hidden" />
                </div>
            </div>

            <main>
                <div className="bg-gradient-to-b from-fuchsia-200 to-orange-200 md:space-y-2" id="hero">
                    <div className="h-svh">
                        <div className="h-full p-6 pl-0 bg-hero-wine shadow-xl bg-cover bg-top space-y-2 rounded-br-full ">
                            <div className="h-1/2 flex flex-col justify-center items-center">
                                <div className="p-6">
                                    <h1 className="text-4xl md:text-8xl italic antialiased text-slate-900 text-left md:text-center">VISIT VILLA MENDOZA TODAY</h1>
                                </div>
                                <div className="w-full italic flex items-center justify-center p-6">
                                    <p className="text-2xl text-slate-900">Where Argentina&apos;s famous Malbec Grapes are grown and harvested into wine.</p>
                                </div>


                            </div>
                            <div className="h-1/2 p-6">
                                <div className="flex flex-col md:flex-row justify-start md:justify-center md:space-x-3 space-y-3 md:space-y-0 ">
                                    <Button buttonText="See What We Offer" linkUrl="#info" />

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="h-svh" id="tours">
                        <div className="h-full p-6 bg-hero-villa bg-cover bg-top space-y-2 rounded-tl-full ">
                            <div className="h-1/2 flex justify-center items-center">
                                <div>
                                    <h1 className="text-4xl italic antialiased text-gray-900 text-right md:text-center">NOW OFFERING EXCLUSIVE TOURS</h1>
                                </div>
                            </div>
                            <div className="h-1/2 p-6">
                                <div className="flex flex-col md:flex-row justify-start md:justify-center md:space-x-3 space-y-3 md:space-y-0 ">
                                <Button buttonText="Upcoming Vineyard Tours" linkUrl="#info" />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="h-svh bg-orange-200 p-6">
                    <div className="h-full flex flex-col" id="info">
                        <InfoCards />
                    </div>
                </div>
                <div className="h-96 md:h-12 bg-orange-200"></div>
            </main>
        </>



    );
}