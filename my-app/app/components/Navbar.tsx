import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-black h-[3.2cm] text-white font-serif p-4 ">


            <div className="flex justify-between items-baseline w-full">
                {/* provides equal spacing so one at left , one at right */}


                {/* Left-aligned content */}
                <div className="flex items-start text-xs">
                    <Image
                        src="/image/mobile.png" // Path relative to the public folder
                        alt="Mobile Image"
                        width={15} // Set width of the image
                        height={20} // Set height of the image
                    />
                    <h3 className="ml-2">Download App via SMS</h3>
                    {/* ml to give margin at left */}
                </div>

                {/* Right-aligned content */}
                <div className="flex items-baseline text-xs">
                    <h1 className="text-red-600"> اردو </h1>
                    <div className="bg-gray-700 shadow-md w-px h-4 m-3"></div>
                    <h1 className="m-2"> Sign Up </h1>
                    <div className="bg-gray-700 shadow-md w-px h-4 m-3"></div>
                    <h1 className="m-2"> Sign In </h1>
                </div>
            </div>



            <div className="border-t border-gray-700 shadow-md  "></div>
            <div className="border-t border-black shadow-md mt-1"></div> {/* Adjusted margin-top */}



            <div className="flex items-baseline  justify-between">

                {/* Logo Image */}


                <div className="mr-4">
                    <Link href="/">
                        <Image
                            src="/image/logo.png" // Path relative to the public folder
                            alt="Logo"
                            width={150} // Set width of the logo
                            height={50} // Set height of the logo
                        />
                    </Link>
                </div>

                <Link href="/route" > Used Cars▾</Link>
                <Link href="/route" > New Cars▾</Link>
                <Link href="/route" > Bikes▾</Link>
                <Link href="/route" > Auto Store▾</Link>
                <Link href="/route" > Videos</Link>
                <Link href="/route" > Forums</Link>
                <Link href="/route" > Blog</Link>

                <div className="relative">
                    {/* New label positioned at the top-right above the 'More' link */}
                    <h1 className="bg-blue-700 text-xs rounded-md px-1 absolute top-[-10px] right-0">New</h1>

                    {/* More▾ link */}
                    <Link href="/route">More▾</Link>
                </div>

                <Link href="/form">
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ">
                    Post an Ad
                </button>
                </Link>

            </div>

        </nav>
    )
}