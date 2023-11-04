import React, { useEffect, useRef, useState } from "react"; 
import MainBanner from "../MainComp/MBanner";
import '../Main/main.css';
import RevealFromSide from "../../Pages/MainComp/ReveakFromSide";
import firstMasImage from "../../Resource/MainImage/masc_Dollar.jpg";
import secondMasImage from "../../Resource/MainImage/masc_Money.jpg";


const RevealOnScroll = ({ children }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 
  
    useEffect(() => { 
        const onWindScroll = () => { 
            const element = ref.current; 
            if (element) { 
                const { top } = element.getBoundingClientRect(); 
                const isVisible = top < window.innerHeight; 
                setIsVisible(isVisible); 
            } 
        }; 
  
        window.addEventListener("scroll", onWindScroll); 
        return () => { 
            window.removeEventListener("scroll", onWindScroll); 
        }; // listen from scroll and return the function
    }, []); 
  
    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`; 
  
    return ( 
        <div ref={ref} className={classes}> 
            {children} 
        </div> 
    ); 
}; 

function Main(){
    return(
        <div className=" container mx-auto text-center">

            <MainBanner/>

            <h2 className="text-4xl mt-10"> 
                Welcome to the Westpac Analysis Portal!
                adapteda
                adapteda
                adapteda
                adapteda
                adapteda
                adapteda
                adapteda
            </h2> 
            
          

            <RevealOnScroll> 
                <div className="text-3xl  mt-[9em]">
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="text-3xl  mt-[10em]"> 
                            Welcome to the Westpac Analysis Portal!
                            </p> 
                        </div>
                        <div className="w-1/2">
                            <RevealFromSide direction="right">
                                <div className="text-3xl  mt-[10em]">
                                <img class="object-contain rounded-lg" src={firstMasImage} alt="first mascot iamge"></img>
                                </div>
                            </RevealFromSide>
                        </div>
                    </div>                
                </div>
            </RevealOnScroll> 

            <RevealOnScroll> 
                <div className="text-3xl  mt-[5em]">
                    <div className="flex">
                        <div className="w-1/2">
                            <RevealFromSide direction="left">
                                <div className="text-3xl  mt-[10em]">
                                <img class="object-contain rounded-lg" src={secondMasImage} alt="second mascot iamge"></img>
                                </div>
                            </RevealFromSide>
                        </div>
                        <div className="w-1/2">
                            <p className="text-3xl  mt-[10em]"> 
                            Welcome to the Westpac Analysis Portal22!
                            </p> 
                        </div>
                       
                    </div>                
                </div>
            </RevealOnScroll> 


            



            {/* <div className="retangle"></div>   */}

        </div>
    )
}

export default Main;

//https://www.react-spring.dev/docs/components/use-trail 
//trail for main -> Done

//https://codesandbox.io/s/k467x
//cool text transition -> adapted

//https://www.react-spring.dev/docs/utilities/use-scroll
//cool scroll down -> possible


//https://codesandbox.io/s/ycouuu
//cool scroll down 2 -> will be added -> ASAP


//https://codesandbox.io/s/h1rrv
//shift the page? -> very cool transition will be add for display statistic for which age is most spend on category? 
//-> will be added -> ASAP

//https://codesandbox.io/s/mvxd3
//waving text? -> possible loading screen? -> will be added -> ASAP

//https://codesandbox.io/s/3hsg6
//sticky scroll and drop down -> will be added with scroll down?
// do scroll down first and try this->

//https://codesandbox.io/s/dqxvqu
//widget? use with sticky scroll?? -> will be added

//https://codesandbox.io/s/v1i1t
//notification -> will be added


//scroll animation? css? -> cool scroll down will be added
 

//scrawling
/*
https://www.zenrows.com/blog/javascript-nodejs-web-scraping-libraries#playwright
use the playwright or puppeteer?
*/