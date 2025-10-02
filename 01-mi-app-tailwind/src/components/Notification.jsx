export function Notification () {
  return (

    <div className='grid grid-cols-[90px] items-center bg-white p-3 rounded-lg shadow-xl'>
      <img className='row-span-2 h-14' src='../public/chat.png' />
      <h4>New message!</h4>
      <p className='col-start-2 text-gray-600 '>Ana: hi! how are you?</p>
    </div>
  )
}
