// import { useEffect } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
// import { fetchUser } from './services/user'

function App() {
  // inital value should match the data type of end value
  // const [user, setUser] = useState({})

  return (
    // <Layout user={user}>
    <Layout>
      {/* <Home user={user} /> */}
      <Home />
    </Layout>
  )
}

export default App
