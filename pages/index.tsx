import type { NextPage } from 'next';
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Head from '../components/head';
import Form from '../components/store-form';
import Table from '../components/report-table';
import Login from '../components/login-form';
import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource'

const Home: NextPage = () => {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  // const [stores, setStoreInfo] = useState([
  //   {
  //     location: 'Home',
  //     max: 0,
  //     min: 0,
  //     ave: 0,
  //   }
  // ])
  // function handleLogin(event){

  // }
  function storeSubmit(event){
    event.preventDefault();
    
    const store ={
      location: event.target.location.value,
      max: parseInt(event.target.max.value),
      min: parseInt(event.target.min.value),
      ave: parseFloat(event.target.ave.value),
      owner: user.id,
    }
    createResource(store);
  }

  return (
    <div className ="bg-emerald-50">
      <Head />
      <Header user={user}logout={logout}/>
      {user ?(
      <main >
        <Form storeSubmit={storeSubmit} createResource={createResource} user={user}/>
        <Table  resources={resources || []} loading={loading} onDelete={deleteResource}/>
      </main>

      )
      :(
        <Login login = {login}/>

      )
      
      }
      {user ?(
      <Footer resources={resources} />):
      (<p></p>)
      }
    </div>
  )
}

export default Home

