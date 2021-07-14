import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '../Context/AuthProvider';

function SignUp() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);

    const {signUp}=useContext(AuthContext);
    console.log("signup",signUp);

    const handleSignUp = async (e)=>{
            e.preventDefault();
            setLoading(true);
            let res=await signUp(email,password);
            let uid=res.user.uid;
            console.log(uid);
            setLoading(false);

    }
    return (
        <div>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor=''>UserName:</label>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </div>

                <div>
                    <label htmlFor=''>Email:</label>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>

                <div>
                    <label htmlFor=''>Password:</label>
                    <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>

                <button type='submit' >Register</button>
            </form>
            
        </div>
    )
}

export default SignUp
