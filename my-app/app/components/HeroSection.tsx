import Link from "next/link"
export default function HeroSection() {
      return (


            // parental class that applies to all 3 parts(sec1 / OR / sec2) 
            <div className="space-y-10 px-20 h-[8.5cm] py-6 mt-48 mb-20">
                  {/* change mt-52 for navbar and hero section spacing */}

                  {/* top heading of the hero section */}
                  <h1 className="flex justify-center items-center text-gray-700 font-serif font-bold text-xl">
                        Sell Your Car on PakWheels and Get the Best Price
                  </h1>

                  <div className="flex justify-between px-8">
                        {/* end of top heading of the hero section */}


                        {/* first part of the two sections */}

                        <div>

                              <h1 className=" text-blue-950 font-serif font-bold text-xl">
                                    Post your Ad on PakWheels
                              </h1>
                              <div>
                                    <div className="flex items-baseline space-y-5 ">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3">Post your Ad for Free in 3 Easy Steps</h1>
                                    </div>
                                    <div className="flex items-baseline">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3">Get Genuine offers from Verified Buyers</h1>
                                    </div>
                                    <div className="flex items-baseline">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3">Sell your car Fast at the Best Price</h1>
                                    </div>
                                    <Link href="/form">
                                          <button className="bg-red-600 text-white py-2 px-7 text-sm rounded hover:bg-red-700 ">Post an Ad
                                          </button>
                                    </Link>
                              </div>

                        </div>

                        {/* end of first part of the two sections */}

                        {/* separator OR between the two sections */}

                        <div className="flex flex-col items-center">
                              {/* Top part of the vertical line */}
                              <div className="h-16 border-l-2 border-gray-300"></div>

                              {/* "OR" Text */}
                              <h1 className="text-gray-500 font-serif font-bold px-2">OR</h1>

                              {/* Bottom part of the vertical line */}
                              <div className="h-16 border-l-2 border-gray-300"></div>
                        </div>

                        {/*  end of separator OR between the two sections */}


                        {/* second part of the two sections */}

                        <div>

                              <h1 className=" text-blue-950 font-serif font-bold text-xl">
                                    Try PakWheels Sell It For Me
                              </h1>
                              <div>
                                    <div className="flex items-baseline space-y-5">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3">Dedicated Sales Expert to Sell your Car</h1>
                                    </div>
                                    <div className="flex items-baseline">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3">We Bargain for you and share the Best Offer</h1>
                                    </div>
                                    <div className="flex items-baseline">
                                          <h1 className="text-green-600">✔</h1>
                                          <h1 className="text-gray-600 font-light m-3"> We ensure Safe and Secure Transactions</h1>
                                    </div>
                                    <Link href="/form">
                                          <button className="bg-blue-700 text-white py-2 px-2 text-sm rounded hover:bg-blue-800 ">Register Your Car
                                          </button>
                                    </Link>
                              </div>

                        </div>

                  </div>
                  {/* end of second part of the two sections */}

                  {/* closing div tag on parental class that applies to all 3 parts(sec1 / OR / sec2) */}
            </div>

      )
}