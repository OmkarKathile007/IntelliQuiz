import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SpinnerLoad from './SpinnerLoad'

const GenAI = () => {
    const [question, setQuestion] = useState("")

    const[answer,setAnswer]=useState("");

    const[loader,setLoader]=useState(true);
    

   
   
  
  
   async function generateAns(){
    // console.log("Loading")
    setAnswer("loading");
    // <SpinnerLoad/>
      const response= await axios({
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDzDsA_rg1EzgFasXjH7kudY7g9ti9mEIo",
        method:"post",
        data:{
          contents:[
            {parts:[{text:`Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context.`}]},
          ]
        }
      })
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
    }
  
    return (
      <>
      {loader && <div className='w-full bg-black h-full flex flex-col  items-center  gap-8 '>
        <h1 className='text-white tracking-wider  text-5xl font-sans font-bold '>PASTE YOUR PARAGRAPH</h1>
        <textarea className=' w-full bg-transparent p-6 border-2 border-white  text-white'  value={question} onChange={(e)=>{setQuestion(e.target.value)}} cols="30" rows="10" ></textarea>
        <button className='rounded-md w-1/3  my-0 mx-auto  p-4 bg-blue-700 text-white' onClick={generateAns}>Generate Quiz</button>
        
        <pre className='rounded-lg text-lg text-lime-400 my-10'>{answer}</pre>
      </div>}
      </>)
}

export default GenAI