// this form has "place your order"

import Image from "next/image"
import Link from "next/link"

export default function Form2() {
    return (

        <div className=" m-[3cm]  ">
            <h1 className="text-5xl font-semibold text-center uppercase ">
                enter your details
            </h1>

            <div>
                <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                    <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                        placeholder="Enter your Email" />

                    <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800"
                        placeholder="Enter your Password" />

                    <Link href="/thankyou">
                        <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 hover:bg-blue-800 text-white">Place Your Order</button>
                    </Link>
                </form>
            </div>

        </div>


    )
}