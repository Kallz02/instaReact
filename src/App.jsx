import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const checkStatus = () => {
    setLoading(true);
    fetch(`https://instapi.akshayk.dev/user/${username}`)
      .then(response => response.json())
      .then(data => {
        setStatus(data.prediction ? 'fake' : 'real');
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setStatus('error');
        setLoading(false);
      });
  }
  
  
  return (
    <div className='min'>
    <div className='container'>
      
<h3 className="usr">Username</h3>
    <input className='usrname' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <button className='btn' onClick={checkStatus}>Check Status</button>
    {loading && <div className='status' >Loading...</div>}
    {status === 'fake' && <div className='status'>Fake Account</div>}
    {status === 'real' && <div className='status'>Real Account</div>}
    {status === 'error' && <div className='status'>Server Error</div>}
  </div>
  </div>

  )
}

export default App
