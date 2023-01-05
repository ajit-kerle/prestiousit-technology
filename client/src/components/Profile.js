import React, { useContext, useEffect } from 'react';
import { LoginContext } from './contextProvider/Context';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const {logindata,setLoginData}=useContext(LoginContext)
   const navigate=useNavigate();

  const ProfileValid=async()=>{
     let token=localStorage.getItem("usersdatatoken")  
    const res=await fetch("http://localhost:8000/validuser",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Autherization":token
        }
    })

    const data=await res.json()
    if(data.status===401 || !data){
        navigate("*")
    }else{
        setLoginData(data)
        navigate("/profile")
    }
  }

  useEffect(()=>{
     ProfileValid()
  },[])

  return (
    <>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
        {/* <header>
            <nav>
                <h1></h1>
            </nav>
        </header> */}
        
        <p>Welcome {logindata ? logindata.userData.username : ""} to prestious IT Solution.This is assignment from prestious it solution. Sign up and register page.with jwt implemented</p>
    </div>
    </>
  )
}

export default Profile