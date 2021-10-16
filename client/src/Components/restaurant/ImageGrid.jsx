import React from 'react'
import { AiOutlineCamera } from "react-icons/ai"

const ImageGrid = (props) => {
    return (
        <>
            <div className="container mx-auto px-4 lg:px-20">
                <div className="w-full h-60 md:hidden pt-2">
                    <img 
                    src={props.image[0]}
                    alt="food"
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                {/**for medium and large device */}
                <div className="hidden flex gap-1 w-full md:flex items-center">
                  <div className="w-7/12 h-80 overflow-hidden">
                    <img 
                    src={props.image[0]}
                    alt="food"
                    className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="w-1/6 h-80 flex flex-col gap- overflow-hidden">
                    <img 
                    src={props.image[1]}
                    alt="food"
                    className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500"
                    />
                    <img 
                    src={props.image[2]}
                    alt="food"
                    className="w-full h-full object-cover rounded-lg transform hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="w-1/6 h-80 flex flex-col gap-2 overflow-hidden">
                    <div className="w-full h-full relative">
                    <img 
                      src={props.image[3]}
                      alt="food"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg " />
                    <h4 className="absolute inset-y-2/4 z-20 w-full h-full text-center text-white font-semibold">View gallery</h4>
                    </div>

                    <div className="w-full h-full relative">
                    <img 
                      src={props.image[4]}
                      alt="food"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg " />
                    <div className="flex flex-col items-center absolute inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold">
                      <div className="bg-black p-3 rounded-full bg-opacity-50">
                        <AiOutlineCamera />
                      </div>
                      <h4>View gallery</h4>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid
