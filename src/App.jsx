// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Courses from './pages/courses';
import Admssions from './pages/admissions';
import Testimonialsp from './pages/testimonialsp';
import Resources from './pages/resources';
import Aboutus from './pages/aboutus'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="/home" element = {<Home/>} />
        <Route path="/courses" element = {<Courses/>} />
        <Route path="/aboutus" element = {<Aboutus/>} />
        <Route path="/resources" element = {<Resources/>} />

        <Route path="/admissions" element = {<Admssions/>} />
        <Route path="/testimonials" element = {<Testimonialsp/>} />

          </Routes></BrowserRouter>
    </div>
  )
}