import Image from "next/image"
import Link from "next/link"

export default function Civic() {
    return (
        <div className="bg-white">
            <h1 className=" flex justify-center text-black underline text-xl font-bold "> Honda Civic 2024 Price in Pakistan,Images,Reviews & Specs</h1>
            <div className="flex justify-center items-center mt-[2cm]">
                <Image
                    src="/image/civic.png" // Path relative to the public folder
                    alt="civic.png"
                    width={350} // Set width
                    height={250} // Set height 
                />
            </div>
            {/* 4 buttons part */}
            <div className="flex justify-center mt-[1cm] mb-[1cm] ">

                <Link href="/form">
                    <button className="border text-gray-600 border-gray-600 py-3 px-2 text-xs rounded hover:bg-blue-800 hover:text-white mx-[0.5cm] ">Book a test drive
                    </button>
                </Link>
                <Link href="/form">
                    <button className="border text-gray-600 border-gray-600 py-3 px-2 text-xs rounded hover:bg-blue-800 hover:text-white mx-[0.5cm] ">Request Bank Finance
                    </button>
                </Link>
                <Link href="/form">
                    <button className="border text-gray-600 border-gray-600 py-3 px-2 text-xs rounded hover:bg-blue-800 hover:text-white mx-[0.5cm] ">Visit Place
                    </button>
                </Link>
                <Link href="/form">
                    <button className="border text-gray-600 border-gray-600 py-3 px-2 text-xs rounded hover:bg-blue-800 hover:text-white mx-[0.5cm] ">Car Inspection
                    </button>
                </Link>

            </div>
            {/* vehicle description starts */}
            <h1 className="flex justify-center font-serif text-black m[4cm] text-lg m-[0.4cm] "> Vehicle Description</h1>
            {/* first part of vehicle description */}
            <div className="flex justify-center mx-[0.4cm] ">

                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Number of Doors</h1>
                    <h1 className="text-xs ml-[0.1cm]"> 4</h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Engine</h1>
                    <h1 className="text-xs ml-[0.1cm]"> 1800 CC</h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Condition</h1>
                    <h1 className="text-xs ml-[0.1cm]">9.5 / 10 </h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Driven</h1>
                    <h1 className="text-xs ml-[0.1cm]"> 5500 Km</h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Suspension Type</h1>
                    <h1 className="text-xs ml-[0.1cm]"> Soft Suspension</h1>
                </div>
            </div>
            <div className="flex justify-center mt-[0.5cm] ">
                {/* second part of vehicle description */}

                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Avg</h1>
                    <h1 className="text-xs ml-[0.1cm]"> 13 Km per ltr</h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Transmission</h1>
                    <h1 className="text-xs ml-[0.1cm]"> Automatic</h1>
                </div>
                <div className="flex mx-[0.4cm]">
                    <h1 className="font-bold text-xs font-serif mx-1">Fuel Type</h1>
                    <h1 className="text-xs ml-[0.1cm]">High Octane </h1>
                </div>


            </div>
            <div className="flex justify-center mt-[.8cm] ">
                <Link href="/form2">
                    <button className="bg-blue-700 text-white py-2 px-2 text-sm rounded hover:bg-blue-800 ">Make Payment
                    </button>
                </Link>
            </div>
        </div>
    )
}