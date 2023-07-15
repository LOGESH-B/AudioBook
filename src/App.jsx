import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'

function App() {
  function changeHandler({target}) {
    // Make sure we have files to use
    

    if (!target.files.length) return;

    jsmediatags.read(target.files[0],{
      onSuccess: function(tag){
        console.log(tag)
      },
      onError:function(err){
        console.log(err);
      }

    })
  
    // Create a blob that we can use as an src for our audio element
    const urlObj = URL.createObjectURL(target.files[0]);
    
    console.log(urlObj);
  
    // Create an audio element
    const audio = document.createElement("audio");
  
    // Clean up the URL Object after we are done with it
    audio.addEventListener("load", () => {
      URL.revokeObjectURL(urlObj);
    });
  
    // Append the audio element
    document.body.appendChild(audio);
  
    // Allow us to control the audio
    audio.controls = "true";
  
    // Set the src and start loading the audio from the file
    audio.src = urlObj;
  }
  
  useEffect(()=>{
    document
  .getElementById("audio-upload")
  .addEventListener("change", changeHandler);
  })

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(e.target[0].files[0]);
    const res=await Axios( {method: "POST",
    url: "http://localhost:8090/newaudio",
    data: {audio:e.target[0].files[0]},
    headers: {
      "Content-Type": "multipart/form-data"
    }});
    console.log(res)
  }
  return (
    <>
      <label htmlFor="audio-upload">Upload an audio file:</label><br />
      <input id="audio-upload" type="file"/>
      <audio controls>
  <source src="https://docs.google.com/uc?export=download&id=1c504AESxoguTvlfPj8FW8mj-ktWDpx4Q" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>
<form onSubmit={(e)=>handleSubmit(e)}>
<label htmlFor="audio-upload">Upload an audio file:</label><br />
      <input id="audio" name="audio" type="file"/>
      <button type="submit">Submit</button>
</form>

    </>
  )
}

export default App
