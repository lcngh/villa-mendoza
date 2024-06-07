import Testimonials from "./testimonials";

export default function InfoCards() {
    return (
        <>
            <div className="flex flex-col h-full md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="md:h-full md:w-1/3 rounded-md">
                    <div className="p-6">
                        <table className="table-fixed w-full bg-orange-100 rounded-md shadow-md text-center">
                            <thead className="bg-orange-300">
                                <tr>
                                    <th>Facilities</th>
                                    <th>Description</th>
                                    <th>Hours</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-orange-300">
                                    <td>Villa Mendoza</td>
                                    <td>Historic Owner&apos;s Villa</td>
                                    <td>08:00-20:00</td>
                                </tr>
                                <tr className="border-b border-orange-300">
                                    <td>Vineyard</td>
                                    <td>Malbec Vineyard</td>
                                    <td>16:00-22:00</td>
                                </tr>
                                <tr className="border-b border-orange-300">
                                    <td>Event Floor</td>
                                    <td>Main Space</td>
                                    <td>Event Specific</td>
                                </tr>
                                <tr>
                                    <td>Top-Secret Conference Room</td>
                                    <td>Confidential</td>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Testimonials />
                <div className="md:h-full  md:w-1/3 ">
                    <div className="p-6">
                        <form className="flex flex-col items-center space-y-3 h-1/4 bg-orange-100 rounded-md shadow-md">
                            <div>
                                <p className="leading-7">Sign up for a tour.</p>
                            </div>
                            <div className="">
                                <label htmlFor="email" className="block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="jdoe@mail.com"
                                    className="focus:outline-none"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="name" className="block">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="J. Doe"
                                    className="focus:outline-none"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="date" className="block">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className=""
                                />
                            </div>
                            <div className="pb-3">
                                <button
                                    type="submit"
                                    className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>

        </>
    );
}