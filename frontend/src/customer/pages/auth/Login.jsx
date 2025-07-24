// import React, { useContext, useState } from 'react'
// import { toast } from 'react-toastify'
// import { loginUser } from '../../services/user'
// import { Link, useNavigate } from 'react-router-dom'
// // import { AuthContext } from '../../contexts/auth.context'

// function Login() {
//   // get the setUser from AuthContext
// //   const { setUser } = useContext(AuthContext)

//   // create state to get input from user
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   // get navigate() function reference
//   const navigate = useNavigate()

//   // button click event handler
//   const onLogin = async () => {
//     if (email.length == 0) {
//       toast.warn('please enter email')
//     } else if (password.length == 0) {
//       toast.warn('please enter password')
//     } else {
//       // call the Login API
//       const result = await loginUser(email, password)
//       if (!result) {
//         toast.error('Error while login')
//       } else {
//         if (result['status'] == 'success') {
//           // persist the login information like token, username etc
//           const { firstName, lastName, token } = result['data']

//           // persist the information in session storage
//           sessionStorage.setItem('firstName', firstName)
//           sessionStorage.setItem('lastName', lastName)
//           sessionStorage.setItem('token', token)

//           // set the user details in the AuthContext
//           setUser({
//             firstName,
//             lastName,
//           })

//           console.log('result: ', result)
//           toast.success('Welcome to application')

//           // navigate to home screen
//         //   navigate('/home/properties')
//         navigate('/home')
//         } else {
//           toast.error('Invalid email or password')
//         }
//       }
//     }
//   }

//   return (
//     <div className='container'>
//       <h2 className='page-header'>Login</h2>

//       <div className='form'>
//         <div className='mb-3'>
//           <label htmlFor=''>Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type='email'
//             className='form-control'
//             placeholder='username@test.com'
//           />
//         </div>

//         <div className='mb-3'>
//           <label htmlFor=''>Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type='password'
//             className='form-control'
//             placeholder='#######'
//           />
//         </div>
//         <div className='mb-3'>
//           <div className='mb-3'>
//             Don't have an account yet? <Link to='/register'>Register here</Link>
//           </div>
//           <button
//             onClick={onLogin}
//             className='btn btn-success'
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/user'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onLogin = async () => {
    if (email === '') {
      toast.warn('Please enter email')
    } else if (password === '') {
      toast.warn('Please enter password')
    } else {
      const result = await loginUser(email, password)
      if (result?.status === 'success') {
        const { firstName, lastName, token } = result.data
        sessionStorage.setItem('firstName', firstName)
        sessionStorage.setItem('lastName', lastName)
        sessionStorage.setItem('token', token)

        toast.success('Welcome back!')
        navigate('/home')
      } else {
        toast.error('Invalid email or password')
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your account</h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            placeholder="example@test.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={onLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

