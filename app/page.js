import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <form className='flex flex-col'>
          <label>Enter Mobile Number</label>
          <input type="text" />
          <label>Enter Password</label>
          <input type="password" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
      </div>
    </main>
  )
}
