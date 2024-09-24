import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SpinnerLoad from './SpinnerLoad'

const GenAI = () => {
    const [question, setQuestion] = useState("")

    const[answer,setAnswer]=useState("");

    const[loader,setLoader]=useState(false);
    // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const[displayQuiz,setDisplayquiz]=useState(false);

    const[hide,setHidden]=useState("");


   
   
  async function generateAns(){
    // console.log("Loading")
    setLoader(true);
    setAnswer("loading");
    // <SpinnerLoad/>
      const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDzDsA_rg1EzgFasXjH7kudY7g9ti9mEIo",
        //  url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        method:"post",
        data:{
          contents:[
            {parts:[{text:`Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context and dont give answer at last`}]},
          ]
        }
      })
      // function ToggleQuiz(){
      setTimeout(()=>{
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
        setLoader(false)
        setDisplayquiz(true);
        setHidden("hidden")
      },3000)

      
    // }
     
    }
  
    return (
      <>


      <div className='w-full bg-black h-screen'>
      {/* { <div  className='w-full bg-black h-full flex flex-col  items-center  gap-8 '>
        <h1 className='text-white tracking-wider  text-5xl font-sans font-bold mt-56'>PASTE YOUR PARAGRAPH</h1>
        <textarea className=' w-4/5 bg-transparent p-6 border-2 border-white  text-white'  value={question} onChange={(e)=>{setQuestion(e.target.value)}} cols="30" rows="10" ></textarea>
        <button className='rounded-md w-1/3  my-0 mx-auto  p-4 bg-blue-700 text-white' onClick={generateAns}>Generate Quiz</button>
        
        <pre className='rounded-lg text-lg text-lime-400 my-10'>{answer}</pre>
      </div>} */}

      
      {loader? <div> <SpinnerLoad/></div> : <div className={`w-full bg-black min-h-fit flex flex-col  items-center gap-8 ${hide}`}>
        <h1 className='text-white tracking-wider  text-5xl font-sans font-bold mt-56'>PASTE YOUR PARAGRAPH</h1>
        <textarea className=' w-4/5 bg-transparent p-6 border-2 border-white  text-white'  value={question} onChange={(e)=>{setQuestion(e.target.value)}} cols="30" rows="10" ></textarea>
        <button className='rounded-md w-1/3  my-0 mx-auto  p-4 bg-blue-700 text-white' onClick={generateAns}>Generate Quiz</button>
        
        
      </div>}

         <div className='mt-0'>


        { displayQuiz &&  <pre className='mt-0 rounded-lg text-lg text-lime-400  ml-80 '>{answer}</pre>}
        </div>
      </div>
      </>)
}

export default GenAI



// import React, { useState } from 'react';
// import axios from 'axios';
// import SpinnerLoad from './SpinnerLoad';

// const GenAI = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [loader, setLoader] = useState(false);
    
//     // Access environment variable using import.meta.env
//     const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//     console.log(apiKey)

//     async function generateAns() {
//         setLoader(true);
//         setAnswer("loading");

//         try {
//             const response = await axios({
//                 url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
//                 method: "post",
//                 data: {
//                     contents: [
//                         { parts: [{ text: `Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context.` }] }
//                     ]
//                 }
//             });
//             setAnswer(response.data.candidates[0].content.parts[0].text);
//         } catch (error) {
//             setAnswer("Error generating quiz");
//         } finally {
//             setLoader(false);
//         }
//     }

//     return (
//         <>
//             {loader ? (
//                 <SpinnerLoad />
//             ) : (
//                 <div className='w-full bg-black h-full flex flex-col items-center gap-8'>
//                     <h1 className='text-white tracking-wider text-5xl font-sans font-bold mt-56'>
//                         PASTE YOUR PARAGRAPH
//                     </h1>
//                     <textarea
//                         className='w-4/5 bg-transparent p-6 border-2 border-white text-white'
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         cols='30'
//                         rows='10'
//                     ></textarea>
//                     <button
//                         className='rounded-md w-1/3 my-0 mx-auto p-4 bg-blue-700 text-white'
//                         onClick={generateAns}
//                     >
//                         Generate Quiz
//                     </button>
//                     <pre className='rounded-lg text-lg text-lime-400 my-10'>{answer}</pre>
//                 </div>
//             )}
//         </>
//     );
// };

// export default GenAI;

