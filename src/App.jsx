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
    fetch(`http://localhost:5000/user/${username}`)
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
    <div>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <button onClick={checkStatus}>Check Status</button>
    {loading && <div>Loading...</div>}
    {status === 'fake' && <div>Fake Account</div>}
    {status === 'real' && <div>Real Account</div>}
    {status === 'error' && <div>Server Error</div>}
  </div>
  )
}

export default App
