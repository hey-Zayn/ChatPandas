import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen relative pt-10'>
        <div className="w-full h-screen flex flex-col justify-between relative z-10 py-20">
          <div className="w-full  px-20  py-4 max-sm:py-2 max-sm:px-6 flex justify-end max-sm:justify-start  gap-0">
            <div className=" flex flex-col ">
              <div className="overflow-hidden">
                <h3 className="text-white text-left uppercase text-3xl max-sm:text-[22px]  leading-none">
                  Redefining CX
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white  uppercase text-3xl  max-sm:text-[22px]  leading-none">
                  standards through our
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white uppercase font-extrabold text-3xl  max-sm:text-[22px]  leading-none">
                  Top-Tier BPO compANY
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full  px-40 max-sm:px-10 py-4 flex justify-start  gap-0 max-sm:mt-50">
            <div className="flex flex-col ">
              <div className="overflow-hidden">
                <h3 className="text-white  uppercase text-6xl max-md:text-4xl max-sm:text-3xl  font-bold leading-none text-right  ml-20  max-sm:ml-10 ">
                  Building
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white  uppercase text-6xl max-md:text-4xl  max-sm:text-3xl  font-bold leading-none">
                  Meaningful
                </h3>
              </div>
              <div className="overflow-hidden">
                <h3 className="text-white uppercase font-bold  max-md:text-4xl max-sm:text-3xl  text-6xl  leading-none text-right ml-20 max-sm:ml-10">
                  Connections
                </h3>
              </div>
            </div>
          </div>
        </div>

      <video
        src="/videos/my.mp4"
        className="absolute top-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  )
}

export default Hero