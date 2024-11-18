import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListnings from '../components/JobListnings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (<>
     <Hero title="This is the Hero section" subtitle="Check this out"/>
     <HomeCards/>
     <JobListnings isHome={true}/>
     <ViewAllJobs/>
  
  
  
  </>
 
  )
}

export default HomePage