import React from 'react';
import Header from '../components/Header';
import CourseSection from '../components/CourseSection';
// import FacilitiesSection from '../components/FacilitiesSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <CourseSection />
      {/* <FacilitiesSection /> */}
      {/* <TestimonialsSection /> */}
      <Footer />
    </>
  );
}

export default Home