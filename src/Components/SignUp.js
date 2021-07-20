import React,{useState,useEffect,useContext} from 'react'
import { AuthContext } from '../Context/AuthProvider';
import { storage,database } from '../firebase';

function SignUp() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [file,setFile]=useState(null);
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(false);

    const {signUp}=useContext(AuthContext);
    console.log("signup",signUp);

    const handleSignUp = async (e)=>{
            e.preventDefault();
            try{
            setLoading(true);
            let res=await signUp(email,password);
            let uid=res.user.uid;
            console.log(uid);
            const uploadTaskListener=storage.ref(`/user/${uid}/profileImage`).put(file);
            
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
            uploadTaskListener.on('state_changed',fn1,fn2,fn3);

            function fn1(snapshot){
                // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }

            function fn2(err){
                setError(err);
                setTimeout(()=>{
                    setError('');
                },2000);

                setLoading(false);
            }

            async function fn3(){
                let downloadUrl=await uploadTaskListener.snapshot.ref.getDownloadURL();
                console.log(downloadUrl);

                //creating database 
                await database.users.doc(uid).set({
                    email:email,
                    userId:uid,
                    username:name,
                    createdAt:database.getCurrentTimeStamp(),
                    profileUrl:downloadUrl,
                    postIds:[]
                })


            }
            setLoading(false);
            setEmail('');
            setPassword('');
            setFile(null);
            setName('');
            console.log("user has signed up");
            }catch(err){
                setError(err);
                setTimeout(()=>{setError('')},2000);
            }

    }
    const handleFileSubmit=(e)=>{
        let file=e.target.files[0];
        if(file!=null){
            setFile(file);
        }
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
                <div>
                    <label htmlFor='profile'>profile photo</label>
                    <input type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>

                <button type='submit' >Register</button>
            </form>
            
        </div>
    )
}

export default SignUp
