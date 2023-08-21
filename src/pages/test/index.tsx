import React,{useEffect} from 'react'


function index() {

    useEffect(()=>{
        console.log("I am from use effect");
    },[])

    console.log("tori is here");
  return (
    <div>index</div>
  )
}

export default index