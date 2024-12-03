import Image from "next/image"
import Link from "next/link"

export default function Thankyou() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
            <div className="text-center p-10 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl font-bold font-serif text-blue-700 mb-4">
                    Thank You for Choosing Us!
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    We truly appreciate your trust in us and look forward to serving you again.
                </p>

            </div>
        </div>


    )
}