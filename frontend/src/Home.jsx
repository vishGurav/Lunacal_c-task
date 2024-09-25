import React, { useState ,useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AboutMe from "./Aboutme";
import Experience from "./Experience";
import Recommended from "./Recommended";
import "./style.css"


const Home =()=>{
  const carouselRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [images, setImages] = useState([
      // Add URLs of five static images here
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",

    ]);
    const buttons = [
        { label: 'About Me', component: <AboutMe /> },
        { label: 'Experience', component: <Experience /> },
        { label: 'Recommended', component: <Recommended /> }
      ];
      const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
      };
      const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
      };

      const handleImageUpload = (event) => {
        const files = event.target.files;
        const newImages = [];
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            newImages.push(e.target.result);
            // Set the new images after all are read
            if (i === files.length - 1) {
              setImages((prevImages) => [...prevImages, ...newImages]);
            }
          };
          reader.readAsDataURL(files[i]);
        }
      };
    
    return(
        <>
        
        <div style={{  background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)', }} class="flex pt-4 px-6 lg:px-20 border- h-auto border-red-500  items-center justify-center">
            <div className="flex-1 border- border-blue-500 "></div>
            <div className="w-[720px] h-auto border- border-blue-500 flex items-center flex-col space-y-8 flex-wrap pb-20">
                <div className="w-full h-[330px] border- border-red-500 flex p-2 bg-[#363C43] rounded-3xl shadow-lg shadow-black">
                <div className="h-[200px] w-[35px] border- border-black flex flex-col justify-between pt-4 ">
                        <div className="w-full h-[30px] border-red-500  ">
                        <svg class="w-full h-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                             <path fill="url(#iconGradient)" d="M13.385 18a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0ZM12 5.538c-2.545 0-4.615 1.864-4.615 4.154v.462a.923.923 0 1 0 1.846 0v-.462c0-1.269 1.242-2.307 2.769-2.307 1.527 0 2.77 1.038 2.77 2.307C14.77 10.962 13.526 12 12 12a.923.923 0 0 0-.923.923v.923a.923.923 0 0 0 1.846 0v-.083c2.105-.386 3.692-2.065 3.692-4.07 0-2.291-2.07-4.155-4.615-4.155ZM24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12Zm-1.846 0A10.154 10.154 0 1 0 12 22.154 10.165 10.165 0 0 0 22.154 12Z"></path>
                             <defs>
                               <linearGradient id="iconGradient" x1="19.5" x2="3.5" y1="27.5" y2="2" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#4A4E54"></stop>
                                 <stop offset="1" stop-color="#A3ADBA"></stop>
                               </linearGradient>
                             </defs>
                        </svg>
                        </div>
                        <div className="w-full h-[50px] flex justify-center items-center border-red-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="#4A4E54" viewBox="0 0 20 31">
                              <rect width="9.312" height="9.312" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" y="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" y="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" y="21.376" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" y="21.376" rx="1.164"></rect>
                            </svg>


                        </div>
                    </div>
                    <div className="h-full flex-1 border- border-black flex flex-col gap-6 pl-6 pr-4 py-2 ">
                        <div className="flex justify-center  relative gap-3 w-full border- border-red-500 bg-[#171717] h-[63px] rounded-3xl px-2 font-poppins text-[18px] font-medium leading-[16.12px] text-center">
                        {buttons.map((button, index) => (
                              <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`relative transition-colors duration-300 z-10 h-[55px] top-1 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold ${
                                  selectedIndex === index
                                    ? 'bg-neutral-800 shadow-2xl shadow-black text-neutral-200'
                                    : 'text-neutral-400'
                                }`}
                              >
                                {button.label}
                              </button>
                            ))}
                            <span
                              className="absolute top-0 h-full bg-[#1c1c1c] rounded-3xl z-0 transition-all duration-500 ease-in-out"
                              style={{
                                width: '0px',
                                opacity: 0,
                                left: `${selectedIndex * (90 + 10)}px`,
                              }}
                            ></span>
                        </div>

                        <div className="w-full flex-1 overflow-y-auto custom-scrollbar p-4 border- border-red-500  text-[#969696] font-plus-jakarta-sans text-[20px] font-normal leading-[25.2px] text-left">
                             
                             {buttons[selectedIndex].component}
                             
                        </div>
                    </div>
                </div>
                    
                <div className="w-4/5 h-1 bg-[#363C43] rounded-3xl shadow-2xl shadow-black "></div>
                      
                <div className="w-full h-[330px] border- border-red-500 flex p-2 bg-[#363C43] rounded-3xl shadow-lg shadow-black">
                <div className="h-[200px] w-[35px] border- border-black flex flex-col justify-between pt-4 ">
                        <div className="w-full h-[30px] border-red-500  ">
                        <svg class="w-full h-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                             <path fill="url(#iconGradient)" d="M13.385 18a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0ZM12 5.538c-2.545 0-4.615 1.864-4.615 4.154v.462a.923.923 0 1 0 1.846 0v-.462c0-1.269 1.242-2.307 2.769-2.307 1.527 0 2.77 1.038 2.77 2.307C14.77 10.962 13.526 12 12 12a.923.923 0 0 0-.923.923v.923a.923.923 0 0 0 1.846 0v-.083c2.105-.386 3.692-2.065 3.692-4.07 0-2.291-2.07-4.155-4.615-4.155ZM24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12Zm-1.846 0A10.154 10.154 0 1 0 12 22.154 10.165 10.165 0 0 0 22.154 12Z"></path>
                             <defs>
                               <linearGradient id="iconGradient" x1="19.5" x2="3.5" y1="27.5" y2="2" gradientUnits="userSpaceOnUse">
                                 <stop stop-color="#4A4E54"></stop>
                                 <stop offset="1" stop-color="#A3ADBA"></stop>
                               </linearGradient>
                             </defs>
                        </svg>
                        </div>
                        <div className="w-full h-[50px] flex justify-center items-center border-red-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="#4A4E54" viewBox="0 0 20 31">
                              <rect width="9.312" height="9.312" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" y="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" y="10.688" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" y="21.376" rx="1.164"></rect>
                              <rect width="9.312" height="9.312" x="10.688" y="21.376" rx="1.164"></rect>
                            </svg>


                        </div>
                    </div>
                    <div className="h-full w-[680px] border- border-black flex flex-col gap-6 pl-6 pr-4 py-2 ">
                        <div className="border- border-red-500 w-[600px] h-[63px] flex px-2 items-center justify-between  text-white">
                          <div className="">
                            <div className="h-[55px] w-[150px] rounded-2xl flex justify-center items-center font-bold bg-[#171717] ">Gallery</div>
                          </div>
                            <div className=" flex gap-5">
                          <button onClick={() => document.getElementById('fileInput').click()} class="inline-flex items-center justify-center bg-[#ffffff08] rounded-full shadow-[inset_0_0_49px_0_#ffffff0d,inset_0_3.25px_3.25px_0_#ffffff26,-0.5px_-0.5px_7px_0_#ffffff40,9px_10px_7px_0_#0006] text-[.75rem] font-bold uppercase gap-[.375rem] h-[2.875rem] px-[1.875rem] leading-[1rem]">+ Add Images</button>
                          <input type="file"  id="fileInput" multiple accept="image/*"  style={{ display: 'none' }} onChange={handleImageUpload}  />
                          <button   onClick={scrollLeft} class=" text-[#6f787c] flex items-center justify-center h-[45px] w-[45px] rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-5px_30px_-10px_#96bee7] bg-gradient-to-br from-[#303439] to-[#161718] transition-[background-image] duration-200 ease-out hover:bg-gradient-to-br hover:from-[#575c62] hover:to-[#2b2d2f]">
                              <FontAwesomeIcon  icon={faArrowLeft} />
                          </button>

                          <button onClick={scrollRight} class=" text-[#6f787c] flex items-center justify-center h-[45px] w-[45px] rounded-full shadow-[4px_5px_30px_5px_#101213,-5px_-5px_30px_-10px_#96bee7] bg-gradient-to-br from-[#303439] to-[#161718] transition-[background-image] duration-200 ease-out hover:bg-gradient-to-br hover:from-[#575c62] hover:to-[#2b2d2f]">
                              <FontAwesomeIcon icon={faArrowRight} />
                          </button>

                            </div>  
                         </div>
                         <div ref={carouselRef} className="border- border-red-500 w-full flex-1 text-[#969696] inline-flex gap-4 px-2 py-8 whitespace-nowrap overflow-x-scroll overflow-y-hidden hide-scrollbar">
                           
                              {images.length > 0 ? (
                                  images.map((imageSrc, index) => (
                                    <img
                                      key={index}
                                      className="w-[150px] h-[150px] border- border-red-500 rounded-2xl hover:rotate-3 hover:shadow hover:shadow-gray-200"
                                      src={imageSrc}
                                      alt={`Uploaded ${index}`}
                                    />
                                  ))
                                ) : (
                                  <p>No images uploaded yet</p>
                                )}
                          </div>
                    </div>
                </div>

                <div className="w-4/5 h-1 bg-[#363C43] rounded-3xl shadow-2xl shadow-black "></div>

                
            </div>

        </div>     
        </>
    )
 }
 export default Home