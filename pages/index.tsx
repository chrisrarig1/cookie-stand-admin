import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [store, setStoreInfo] = useState({})

  function storeSubmit(event){
    event.preventDefault();
    
    const store ={
      location: event.target.location.value,
      max: event.target.max.value,
      min: event.target.min.value,
      ave: event.target.ave.value,
    }
    setStoreInfo(store);
  }

  return (
    <div className ="bg-emerald-50">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex items-center justify-between p-4 bg-green-500 text-3xl font-medium font-sans'>
        <h1 >Cookie Stand Admin</h1>
      </header>
      <main >
        <form className ="bg-green-300 px-4 py-3  my-5 mx-48 rounded-md" onSubmit={storeSubmit}>
          <legend className="text-center font-semibold text-xl		">Create Cookie Stand</legend>
          <div className="md:flex md:items-center mb-6">
          <div className="">
            <label className="block md:text-right mb-1 md:mb-0 pr-2" >
              Location
            </label>
          </div>
            <div className="md:w-full py-4">
              <input className="w-full" type="text" name="location"></input>
            </div>
          </div>
          <div className="flex justify-evenly  mb-2">
            <div className=" md:w-1/3  mb-6 md:mb-0">
              <label className="block text-justify px-1  ">
                Minimum Customers per Hour
              </label>
              <input className="w-11/12" type="number" name="min" ></input>
            </div>
            <div className=" md:w-1/3  mb-6 md:mb-0">
              <label className="block text-base text-justify px-1">
                Maximum Customers per Hour
              </label>
              <input className="w-11/12" type="number" name="max"></input>
            </div>
            <div className=" md:w-1/3 px-1 mb-6 md:mb-0">
              <label className="block text-justify px-5 ">
                Average Cookies per Sale
              </label>
              <input className="w-11/12" type="number" name="ave"></input>
            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0 bg-green-500 text-center  ">
              <button className='m-4' >Create</button>
            </div>
          </div>
        </form>
        <table className='table-auto my-5 mx-auto border-collapse border-2 border-gray-500'>
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400  text-gray-800">Location</th>
              <th className="px-4 py-2 border border-gray-400  text-gray-800">MinCustomers</th>
              <th className="px-4 py-2 border border-gray-400  text-gray-800">MaxCustomers</th>
              <th className="px-4 py-2 border border-gray-400  text-gray-800">AvgCookies</th>
            </tr>
          </thead>
          <tbody>
    
            <tr>
              <td className="border border-gray-400 px-4 py-2">{store.location}</td>
              <td className="border border-gray-400 px-4 py-2">{store.min}</td>
              <td className="border border-gray-400 px-4 py-2">{store.max}</td>
              <td className="border border-gray-400 px-4 py-2">{store.ave}</td>
            </tr>
          </tbody>
          
        </table>
      </main>

      <footer className='bg-green-500 p-4'>
        <p>&#169;2021</p>
      </footer>
    </div>
  )
}

export default Home
