import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} 
  from 'react-router-dom'
import React from "react";
import "./index.css";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>

  </Route>
)
  );


const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
