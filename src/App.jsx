import React from "react";
import logo from "./assets/hat.png";
import dcu from "./assets/DCuU.png";
import build1 from "./assets/build1.png";
import build2 from "./assets/build2.jpg";
import build3 from "./assets/build3.jpg";
import library from "./assets/library.jpg"
import football from "./assets/football.png";
import cafe from "./assets/cafe.jpg";
import testimonial1 from "./assets/testimonial1.jpg";
import testimonial2 from "./assets/testimonial2.jpg";
import contact from "./assets/contact.png";
import contactUs from "./assets/ContactUS.png"
import "./App.css";

function App(){
return (
    <>
    
<div className="bg">
  <img src={dcu} />
<nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0t">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse relative -left-20">
        <img src={logo} className="h-7" alt="Flowbite Logo" />
        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-white">EduFord</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary relative -right-20 text-white">
        <li>
          <a href="#" className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 home" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Courses</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Blog</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

<section className="text-gray-600 body-font relative top-20">
  <center>
    <h1 className="font-bold text-4xl leading-[93px]">Courses We Offer</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
    </center>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="px-8 py-9 lg:w-1/3">
        <div className="h-full bg-red-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Intermediate</h1>
          <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="px-8 py-9 lg:w-1/3">
        <div className="h-full bg-red-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Degree</h1>
          <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="px-8 py-9 lg:w-1/3">
        <div className="h-full bg-red-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Post Graduation</h1>
          <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative top-10 campus">
 <center className="mb-10">
    <h1 className="font-bold text-4xl leading-[93px]">Our Global Campus</h1>
    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
    </center>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img className="h-[650px] max-w-full building" src={build1} alt="" />
    </div>
    <div>
        <img className="h-[650px] max-w-full building" src={build2} alt="" />
    </div>
    <div>
        <img className="h-[650px] max-w-full building" src={build3} alt="" />
    </div> 
</div>
</section>

<section className="relative top-10 text-gray-600 body-font">
  <center className="relative top-10 mb-5">
    <h1 className="font-bold text-4xl leading-[93px]">Our Facilities</h1>
    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
    </center>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="rounded-lg overflow-hidden">
          <img className="lg:h-89 md:h-76 w-full object-cover object-center" src={library} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">World className Library</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="rounded-lg overflow-hidden">
          <img className="lg:h-89 md:h-76 w-full object-cover object-center" src={football} alt="blog" />
          <div className="p-6">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Largest Play Ground</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="rounded-lg overflow-hidden">
          <img className="lg:h-89 md:h-76 w-full object-cover object-center" src={cafe} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Tasty and Healthy Food</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <center className="relative top-10 mb-5">
    <h1 className="font-bold text-4xl leading-[93px]">What Our Student Says</h1>
    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
    </center>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
       <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex rounded-lg p-8 sm:flex-row flex-col bg-red-100">
          <img src={testimonial1} className="rounded-full h-15 w-15 test" />
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine. Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <h2 className="text-gray-900 text-lg title-font font-bold mt-3">Christine Berkley</h2>
            <div className="text-yellow-700 text-xl tracking-[2px]">
        ★★★★
      </div>
          </div>
        </div>
      </div>
       <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex rounded-lg p-8 sm:flex-row flex-col bg-red-100">
          <img src={testimonial2} className="rounded-full h-15 w-15 test" /> <br />
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine. Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <h2 className="text-gray-900 text-lg title-font font-bold mt-3">David Byer</h2>
            <div className="text-yellow-700 text-xl tracking-[2px]">
        ★★★★★
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<div className="contact">
  <img src={contact} className="w-375 h-130 relative left-2" />
</div>


 <div className="contactUs">
    <img src={contactUs} className="w-375 h-130 relative left-2 top-30" />
  </div>
<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3619.7648149699794!2d67.03240357515234!3d24.871880877921903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snumaish!5e0!3m2!1sen!2s!4v1790769231535!5m2!1sen!2s" width="1200" height="550" className="relative top-50" style={{border:'2px solid black' , position:'relative' , left:'200px'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
<div className="setting">
<div className="relative top-60 left-3 bg-red-100 rounded-lg w-200 text-center">
  <h1 className="font-bold text-4xl leading-[70px]">Contact US</h1>
   <p className="leading-relaxed leading-[70px] text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine. <br /> Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
  </div>  

 

 <div className="container px-5 py-24 mx-auto flex">
<div className="relative top-60 -left-2 card">
  <a className="social-link1">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#e8a2a2" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
  </a>
  <a className="social-link2">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#e8a2a2"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>          </a>
  <a className="social-link3">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#e8a2a2"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path></svg>
  </a>
  <a className="social-link4">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#e8a2a2"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
  </a>
</div>  

 <div className="lg:w-1/3 md:w-1/2 bg-red-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
 <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
   </div>
   </div>
    </>
)
}

export default App;