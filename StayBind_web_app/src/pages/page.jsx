// import React from 'react'
// import Navbar from '../components/Navbar'
// import Home from '../components/Home'
// import Features from '../components/Features'
// import About from '../components/About'
// import Download from '../components/Download'
// import Faq from "../components/Faq"
// import Footer from '../components/Footer'

// const page = () => {
//   return (
//     <div>
//      <Navbar/>
//      <Home/>
//      <Features/>
//      <About/>
//      <Download/>
//      <Faq/>
//      <Footer/>
//     </div>
//   )
// }

// export default page


import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Features from '../components/Features';
import About from '../components/About';
import Download from '../components/Download';
import Faq from "../components/Faq";
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="download">
        <Download />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
