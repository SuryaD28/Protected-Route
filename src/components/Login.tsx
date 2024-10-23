import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const login=() => {
        localStorage.setItem('user','test')
        navigate('/dashboard')
    }

   return <div className="login">
    <h1>Welome to login page...!</h1>
    <p>please login to continue...</p>
    <button onClick={login}>Login</button>
   </div>
}

export default Login;