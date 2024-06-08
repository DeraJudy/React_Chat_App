import React from 'react'
import "./login.css"
import { useState } from 'react'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore";
import upload from '../../lib/upload';


const Login = () => {

    const [avatar,setAvatar] = useState({
        file: null,
        url: ""
    })

    const [loading, setLoading] = useState(false); 

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleRegister = async (e) =>{
      e.preventDefault();
      setLoading(true)
      const formData = new FormData(e.target);

      const { username, email, password } = Object.fromEntries(formData);

      try{
        const res = await createUserWithEmailAndPassword(auth,email,password);

        const imgUrl = await upload(avatar.file)

        // Add a new document in collection "users registration"
        await setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          avatar:imgUrl,
          id:res.user.uid,
          blocked: [],
        });

        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });

        toast.success("Account created! You can login now!")

      }catch(err){
        console.log(err);
        console.log(email)
        toast.error(err.message);
      } finally{
        setLoading(false);
      }

    }

    const handleLogin = async (e) =>{
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);

      const { email, password } = Object.fromEntries(formData);

      try{

        await signInWithEmailAndPassword(auth,email,password)

      }catch(err){
        console.log(err);
        toast.error(err.message);
      }
      finally{
        setLoading(false);
      }
    }

  return (
    <div className='login'>

      <div className="item">
        <h2>Welcome Back,</h2>
        <form action="" onSubmit={handleLogin}>
            <input type="text" placeholder='Email' name='email'/>
            <input type="password" placeholder='Password' name='password'/>
            <button disabled={loading} >{loading ? "Loading" :"Sign Up"}</button>
        </form>
      </div>

      <div className="seperator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form action="" onSubmit={handleRegister}>
            <label htmlFor="file">
                <img src={avatar.url || "./avatar.png"} alt="" />
                Upload an Image
            </label>
            <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
            <input type="text" placeholder='Username' name='username'/>
            <input type="text" placeholder='Email' name='email'/>
            <input type="password" placeholder='Password' name='password'/>
            <button type='submit' disabled={loading}>{loading ? "Loading" :"Sign Up"}</button>
        </form>
      </div>

    </div>
  )
}

export default Login