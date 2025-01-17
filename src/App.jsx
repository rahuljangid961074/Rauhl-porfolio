import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-slate-950 w-full h-20 flex justify-between items-center text-slate-400 text-xl px-10 ">
        <span className="font-bold text-slate-400 text-2xl">Portfolio <i className="fa-solid fa-user-secret"></i></span>
        <div className={`md:flex hidden space-x-20 `}>
          {["home", "skills", "about", "contact",].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className="hover:text-slate-900 hover:bg-slate-400 rounded-xl p-2 transition-all duration-700 ease-linear capitalize"
            >
              {section.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <i className="fa-solid fa-bars md:hidden cursor-pointer text-2xl " onClick={() => setMenuOpen(!menuOpen)}></i>
      </div>

      {/* Mobile Navigation */}
      <div className={`bg-black text-slate-400 flex flex-col items-center space-y-4 p-5 md:hidden  transition-all duration-700 ${menuOpen ? 'block' : 'hidden'}`}>
        {["home", "skills", "about", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            className="p-2 hover:bg-text-slate-400 w-full text-center capitalize"
          >
            {section.replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-white text-center ">
        {activeSection === "home"}

        {activeSection === "skills" && (
          <div className=' w-full h-full md:w-full md:h-full bg-slate-900'>
            <h1 className="text-3xl mb-4 text-slate-400 font-extrabold "> Skills</h1>
            <div className="flex flex-wrap justify-center gap-5 mt-6  bg-slate-900 w-full h-screen ">



              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl bg-white justify-center items-center p-2 font-bold'>
                <img src="src\download (5).png" alt="" className='h-40 w-40' />
                <p className='bg-slate-800 p-1 rounded-lg w-full'>The standard language for structuring web pages</p>
              </div>

              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl bg-white  justify-center items-center p-2 font-bold'>
                <img src="src\download (1).png" alt="" className='h-40 ' />
                <p className='bg-slate-800 p-1 rounded-lg w-full'>Used to style and design web pages beautifully</p>
              </div>

              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl bg-white  justify-center items-center p-2 font-bold'>
                <img src="src\download (2).png" alt="" className='h-40 ' />
                <p className='bg-slate-800 p-1 rounded-lg w-full'>The scripting language that powers dynamic web pages</p>
              </div>

              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl md:bg-white bg-slate-900  justify-center items-center p-2 font-bold'>
                <img src="src\download (3).png" alt="" className='h-40 ' /><br />
                <p className='bg-slate-800 p-1 rounded-lg w-full'>A JavaScript library for building modern UI components</p>
              </div>

              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl md:bg-white bg-slate-900  justify-center items-center p-2 font-bold '>
                <img src="src\download (4).png" alt="" className='h-40 ' /><br />
                <p className='bg-slate-800 p-1 rounded-lg w-full'> An CSS library which is  Used to style and design web pages beautifully</p>
              </div>


              <div className='flex flex-wrap h-fit w-fit flex-col  text-slate-200 rounded-xl md:bg-white bg-slate-900  justify-center items-center p-2 font-bold '>
                <img src="src\download (6).png" alt="" className='h-40 ' /><br />
                <p className='bg-slate-800 p-1 rounded-lg w-full'>Tools to express your creativity in 3D,3D opens a new door for creativity</p>
              </div>


            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div className='bg-slate-900 w-full h-screen'>
            <h1 className="text-3xl mb-4 text-slate-400 font-extrabold ">About Me</h1>

            <figure className="md:flex bg-slate-900 rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img className="w-80 h-80 md:w-96 md:h-auto md:rounded-none rounded-full mx-auto md:rounded-tr-full md:rounded-br-full"
                src="src\459419964_879620440276900_339593325241548509_n_18017631893610623.jpg" alt="" width="384" height="512" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    “I`m a passionate Frontend Developer & Designer, crafting visually stunning and highly interactive web experiences. With a keen eye for design and a strong foundation in modern web technologies, I bring ideas to life through clean code and intuitive user interfaces. I specialize in React, Tailwind CSS, and creative design tools, ensuring seamless and engaging digital experiences. Let`s build something amazing together!”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400 font-extrabold text-3xl">
                    Rahul Jangid
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Front-end Engineer & designer, Bangalore
                  </div>
                </figcaption>
              </div>
            </figure>


          </div>
        )}

        {activeSection === "contact" && (
          <div className='bg-black w-full h-screen '>
            <h1 className="text-3xl mb-4 text-slate-400 font-extrabold hidden md:block ">Contact Me</h1>


            <div  style={{ marginLeft: "32%" }} className='md:flex md:flex-row md:justify-center md:gap-20 md:items-center md:text-4xl md:mt-12   md:fixed   text-3xl flex flex-col justify-center items-center  space-y-5 '>

              <a href="https://www.instagram.com/rahulljangidd?igsh=a3M0YWM4eGdwMTQ1">
                <i className="fa-brands fa-instagram text-red-700 md:mt-6"></i>
                <p className='text-sm'>Instagram</p>
              </a>

              <a href="https://mail.google.com/mail/u/0/#inbox">
              <i className="fa-solid fa-envelope text-yellow-800"></i>
              <p className='text-sm'>Gmail</p>

              </a>

              <a href="https://github.com/dashboard">
              <i className="fa-brands fa-github "></i>
              <p className='text-sm'>GitHub</p>

              </a>

              <a href="https://www.linkedin.com/in/rahul-jangid-0261052a7">
              <i className="fa-brands fa-linkedin text-blue-700"></i>
              <p className='text-sm'>Linkedin</p>

              </a>



            </div>

            <Spline
        scene="https://prod.spline.design/E0RWzjA-Ilg0RbcK/scene.splinecode" className='bg-slate-900 ' 
      />
           

            
          </div>
        )}


      </div>

      {/* Spline 3D Scene - Only visible in "home" section */}
      {activeSection === "home" && (
        <div className="bg-black w-full h-screen flex items-center justify-center md:fixed fixed">
          <Spline scene="https://prod.spline.design/zE9hmvYrTyiCImUP/scene.splinecode" className='md:fixed fixed' />
          <Spline
        scene="https://prod.spline.design/E0RWzjA-Ilg0RbcK/scene.splinecode" className='bg-slate-900 ' 
      />
        </div>
      )}
    </>
  );
}

export default App;
