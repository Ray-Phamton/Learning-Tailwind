import { Notification } from './components/Notification'

function App () {
  return (
    <section className='flex flex-col h-screen dark:bg-gray-700 justify-center items-center bg-blue-200 gap-20'>
      <Notification />
      <button className='bg-gradient-to-r from-gray-950 to-purple-800 px-4 py-1 rounded-2xl shadow-md text-white border-2 hover:border-black transition-colors duration-800 hover:bg-gradient-to-r hover:from-purple-800 hover:to-gray-950  active:translate-y-0.5 '>
        Touch me
      </button>
    </section>
  )
}

export default App
