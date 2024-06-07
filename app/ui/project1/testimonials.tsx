export default function Testimonials() {
    return (
        <>
            <div className="flex flex-col md:h-full h-1/3 md:w-1/3 space-y-3 p-6">
                <div className="h-1/3 bg-orange-100 shadow-md rounded-md p-2">
                    <figure className="flex flex-row md:flex-col h-full justify-center items-center">
                        <blockquote className="w-full md:w-3/4">
                            <p className="md:text-xl">&ldquo; The scenery is to die for. &rdquo;</p>
                            <figcaption className="italic float-right">&mdash; D. Burnwood </figcaption>
                        </blockquote>
                    </figure>

                </div>
                <div className="h-1/3 bg-orange-100 shadow-md rounded-md p-2">
                    <figure className="flex flex-row md:flex-col h-full justify-center items-center">
                        <blockquote className="w-full md:w-3/4">
                            <p className="md:text-xl">&ldquo; Providence sends their regards. &rdquo;</p>
                            <figcaption className="italic float-right">&mdash; D. Yates </figcaption>
                        </blockquote>
                    </figure>

                </div>
                <div className="h-1/3 bg-orange-100 shadow-md rounded-md p-2">
                    <figure className="flex flex-row md:flex-col h-full justify-center items-center">
                        <blockquote className="w-full md:w-3/4">
                            <p className="md:text-xl">&ldquo; Plenty of useful vantage points. &rdquo;</p>
                            <figcaption className="italic float-right">&mdash; A. 47 </figcaption>
                        </blockquote>
                    </figure>

                </div>
            </div>
        </>
    );
}