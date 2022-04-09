import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Head from '../components/head';
import Form from '../components/store-form';
import Table from '../components/report-table';

const Home: NextPage = () => {
  const [stores, setStoreInfo] = useState([
    {
      location: 'Home',
      max: 0,
      min: 0,
      ave: 0,
    }
  ])

  function storeSubmit(event){
    event.preventDefault();
    
    const store ={
      location: event.target.location.value,
      max: event.target.max.value,
      min: event.target.min.value,
      ave: event.target.ave.value,
    }
    setStoreInfo([...stores,store]);
  }

  return (
    <div className ="bg-emerald-50">
      <Head />
      <Header/>
      <main >
        <Form storeSubmit={storeSubmit}/>
        {stores.length > 1 ? <Table storeInfo={stores}/>:<h2 className='text-center py-px'>No Cookie Stands Available</h2>}
      </main>
      <Footer />
    </div>
  )
}

export default Home

