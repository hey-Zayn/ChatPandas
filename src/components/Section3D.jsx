import React from 'react'

const Section3D = () => {
  return (
    <>
        <div ref={mainRef} className="w-full h-full overflow-hidden">
      <section className="w-full h-screen">
        <div className="absolute top-40 w-full text-center">
          <h1 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            numquam.
          </h1>
        </div>
        <div ref={sceneRef} className="w-full h-full">
          <Canvas>
            <Scene progress={progress}/>
          </Canvas>
        </div>
        <div className="absolute bottom-20 w-full text-center">
          <h1 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
            numquam.
          </h1>
        </div>
      </section>
      <section className=" relative flex items-center justify-evenly h-screen">
        <p className="w-[50%] border-0 border-red-700"></p>

        <p className=" w-[50%] text-center px-4 text-4xl font-semibold">
          Effortlessly scroll, zoom, and navigate with the re-engineered Digital
          Crown, now more precise than ever.
        </p>
      </section>

      <section className=" relative flex items-center justify-evenly h-screen">
        <p className=" order-1 w-[50%] text-center px-4 text-4xl font-semibold">
          Built for adventure, the rugged straps are as tough as you are, ready
          for any challenge.
        </p>
        <p className="w-[50%] order-2"></p>
      </section>
      <section className=" relative flex items-center justify-evenly h-[100vh]">
        <p className="w-[50%] border-0 border-red-700"></p>

        <p className=" w-[50%] text-center px-4 text-4xl font-semibold">
          The brightest display ever on an Apple Watch, so you can see it
          clearly even under the harshest sun.
        </p>
      </section>
    </div>
    </>
  )
}

export default Section3D