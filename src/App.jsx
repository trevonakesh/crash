import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'  
import JobListnings from './components/JobListnings'


const App = () => {


    return (
      <>

<Navbar/>
<Hero title="Test title" subtitle="Test subtitle" />
<HomeCards/>
<JobListnings/>
    



    
    

   

   
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
      
      </>
    
  );
}

export default App