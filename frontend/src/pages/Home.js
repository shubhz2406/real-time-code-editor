import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [roomId,setRoomId] = useState('');
    const [username,setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        console.log(id);
        
        toast.success('Created a new room');


    };

    const joinRoom = () => {

        if(!roomId || !username)
        {
            toast.error('Fill the details');
            return;
        }
        //redirect
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            },
        });


    };

    const handleInputEnter = (e) =>{
        if(e.code == 'Enter')
        {
            joinRoom();
        }
    }

    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img className="homePageLogo" src='/code-sync.png' alt='code-sync-logo'/>
                <h4 className='mainLabel'> Paste Invitation Room ID </h4>
                <div className='inputGroup'>
                        <input type='text' className='inputBox' placeholder='Room ID' onChange={(e)=>setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}/>
                        <input type='text' className='inputBox' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter}/>
                </div>
                <button className='btn joinBtn' onClick={joinRoom}> Join</button>
                <span className='createInfo'>
                    <a onClick={createNewRoom} href='' className='createNewBtn'>Create Room</a>
                </span>
            </div>
           
        </div>
    )
};

export default Home;