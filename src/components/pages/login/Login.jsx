import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="text" placeholder='Enter your email' />
            <label>Password</label>
            <input className='loginInput' type="password" />
            <button className='loginBtn'>Login</button>
        </form>
        <button className='registerBtn'>Register</button>
    </div>
  )
}
