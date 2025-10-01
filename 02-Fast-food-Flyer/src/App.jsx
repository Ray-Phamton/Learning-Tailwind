function App () {
  return (
    <section className="flex items-center justify-center h-screen w-full bg-cover bg-center bg-[url('https://i.pinimg.com/736x/92/de/a8/92dea8402f8b8d99a8cfb25f394dc1ec.jpg')]">
      <div className='bg-pink-50 grid grid-cols-4 grid-rows-[50px_100px_140px_70px_1fr] h-3/4 w-3/4 border-pink-600 border-2 rounded-2xl '>

        <div className="bg-[url('../public/fast-food-removebg-preview.png')] bg-cover col-start-0 col-span-2 row-span-2 min-w-52 max-w-36 min-h-52 max-h-12 text-7xl -mt-16 z-10" />
        <h2 className='col-span-2 mt-2 text-center'><strong>Your Presents</strong></h2>
        <div className='h-20 w-6 rounded-4xl col-start-4 bg-black'>
          <h1 className='text-white [writing-mode:vertical-lr]  '><strong>DISC.20%</strong></h1>
        </div>
        <h2 className='bg-black text-white ml-2 h-5 w-22 rounded-2xl text text-center col-start-1 col-span-2 row-start-3'>
          <strong>AT 9 AM</strong>
        </h2>
        <h2 className='col-start-1 row-start-3 ml-4 mt-4'> <strong>FOOD/</strong></h2>
        <h2 className='col-start-1 row-start-3 ml-4 mt-8'> <strong>DRINKS/</strong></h2>
        <h2 className='col-start-1 row-start-3 ml-4 mt-12'> <strong>MUSIC</strong></h2>
        <div className="bg-[url('../public/donas-.png')] bg-cover col-start-2 col-span-3 row-start-3 row-span-1 min-w-60  max-w-64 min-h-52 max-h-12 text-7xl -mt-16 z-10" />
        <div className=' flex justify-center items-center flex-col col-start-1 row-start-4 col-span-2 bg-pink-300 w-23 h-16 ml-8 border-1 rounded-4xl'>
          <h1 className='text-3xl'><strong>25$</strong></h1>
          <p><strong>PRICE</strong></p>
        </div>
        <h1 className='col-start-1 row-start-5 col-span-2 ml-8'><strong>DIRECTION</strong></h1>
        <p className='col-start-1 row-start-5 col-span-2 mt-4 ml-8'> 123 street name</p>
        <p className='col-start-1 row-start-5 col-span-2 mt-8 ml-8 '>city name</p>
        <div className='flex justify-center items-center mt-14 ml-8 border-1 h-10 w-24 rounded-[50%]  bg-pink-300 col-start-3 row-start-4'><em><strong>25 July</strong></em></div>

      </div>
    </section>
  )
}

export default App
