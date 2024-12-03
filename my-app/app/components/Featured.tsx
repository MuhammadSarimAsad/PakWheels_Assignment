import Image from "next/image"
import Link from "next/link"

export default function Featured() {
    return (
        <div className="bg-gray-100 h-[15cm] ml-[2cm] mr-[2cm] " >
            {/* heading of fnewcar/view car  */}
            <div className="flex justify-between items-baseline ">
                <h1 className="text-gray-900 font-serif font-bold text-xl mt-[0.5cm] "> Featured New Cars </h1>
                <Link href="" className="text-blue-600 text-xs hover:text-purple-700 "> View All New Cars </Link>
            </div>

            {/* sub-heading of upcoming/popular  */}
            <div className="flex mt-[0.75cm] gap-10 ">
                <Link href="" className="text-gray-700 hover:text-gray-900 font-serif text-lg hover:underline hover:decoration-blue-600 decoration-2 leading-6 "> Popular </Link>
                <Link href="" className="text-gray-700 hover:text-gray-900 font-serif text-lg hover:underline hover:decoration-blue-600 decoration-2 leading-6 "> Upcoming </Link>
                <Link href="" className="text-gray-700 hover:text-gray-900 font-serif text-lg hover:underline hover:decoration-blue-600 decoration-2 leading-6 "> Newly Launched </Link>
            </div>

            {/* Border */}
            <div className="border-t-2 border-gray-300 my-4"></div>

            {/* 4 flash cards in a row */}

            <div className="flex mr-5 ml-5">

                {/* Flashcard no 1 */}

                <div className=" items-center  mt-5 w-1/4 h-[8cm] border border-gray-300 rounded-lg shadow-lg ">

                    <div className="flex justify-center mt-12">
                        <Image
                            src="/image/corolla.png" // Path relative to the public folder
                            alt="corolla.png"
                            width={300} // Set width of the logo
                            height={200} // Set height of the logo
                        />
                    </div>

                    <Link href="/corolla" className="flex justify-center text-blue-700 hover:text-blue-900 mt-[1.5cm] font-bold ">Toyota Corolla</Link>
                    <h1 className="flex justify-center text-green-600"> PKR 59.7 - 75.6 lacs</h1>

                    <div className="flex justify-center items-baseline">
                        <h1 className="text-yellow-600">★★★☆☆</h1>
                        <h1 className="text-gray-600 font-light m-3"> 621 Reviews</h1>
                    </div>

                </div>
                {/* Flashcard no 2 */}
                <div className=" items-center ml-5 mt-5 w-1/4 h-[8cm] border border-gray-300 rounded-lg shadow-lg ">

                    <div className="flex justify-center mt-5">
                        <Image
                            src="/image/civic.png" // Path relative to the public folder
                            alt="civic.png"
                            width={200} // Set width of the logo
                            height={200} // Set height of the logo
                        />
                    </div>

                    <Link href="/civic" className="flex justify-center text-blue-700 hover:text-blue-900 font-bold mt-[1cm] ">Honda Civic</Link>
                    <h1 className="flex justify-center text-green-600"> PKR 86.6 - 99.0 lacs</h1>

                    <div className="flex justify-center items-baseline">
                        <h1 className="text-yellow-600">★★★☆☆</h1>
                        <h1 className="text-gray-600 font-light m-3"> 780 Reviews</h1>
                    </div>
                </div>
                {/* Flashcard no 3 */}
                <div className=" items-center ml-5 mt-5 w-1/4 h-[8cm] border border-gray-300 rounded-lg shadow-lg ">

                    <div className="flex justify-center mt-5">
                        <Image
                            src="/image/alto.png" // Path relative to the public folder
                            alt="alto.png"
                            width={250} // Set width
                            height={150} // Set height 
                        />
                    </div>

                    <Link href="/alto" className="flex justify-center text-blue-700 hover:text-blue-900 font-bold ">Suzuki Alto</Link>
                    <h1 className="flex justify-center text-green-600"> PKR 22.7 - 35.4 lacs</h1>

                    <div className="flex justify-center items-baseline">
                        <h1 className="text-yellow-600">★★★☆☆</h1>
                        <h1 className="text-gray-600 font-light m-3"> 551 Reviews</h1>
                    </div>
                </div>
                {/* Flashcard no 4 */}
                <div className=" items-center ml-5 mt-5 w-1/4 h-[8cm] border border-gray-300 rounded-lg shadow-lg ">

                    <div className="flex justify-center mt-7">
                        <Image
                            src="/image/revo.png" // Path relative to the public folder
                            alt="revo.png"
                            width={250} // Set width of the logo
                            height={150} // Set height of the logo
                        />
                    </div>

                    <Link href="/revo" className="flex justify-center text-blue-700 hover:text-blue-900 mt-[1.4cm] font-bold ">Toyota Revo</Link>
                    <h1 className="flex justify-center text-green-600"> PKR 107 - 125 lacs</h1>

                    <div className="flex justify-center items-baseline">
                        <h1 className="text-yellow-600">★★★☆☆</h1>
                        <h1 className="text-gray-600 font-light m-3"> 1900 Reviews</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}