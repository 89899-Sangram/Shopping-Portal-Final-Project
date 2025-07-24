// import React, { useState } from 'react'
// import { toast } from 'react-toastify'
// import { registerUser } from '../../services/user'
// import { Link, useNavigate } from 'react-router-dom'

// function Register() {
//   // create state members
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   // get the navigate function reference
//   const navigate = useNavigate()

//   const onBack = () => {
//     // use back stack (which is implemented by browser)
//     // -1: previous screen
//     navigate(-1)
//   }

//   // click event handler
//   const onRegister = async () => {
//     if (firstName.length == 0) {
//       toast.warn('please enter first name')
//     } else if (lastName.length == 0) {
//       toast.warn('please enter last name')
//     } else if (email.length == 0) {
//       toast.warn('please enter email')
//     } else if (phone.length == 0) {
//       toast.warn('please enter phone number')
//     } else if (password.length == 0) {
//       toast.warn('please enter password')
//     } else if (confirmPassword.length == 0) {
//       toast.warn('please confirm password')
//     } else if (password != confirmPassword) {
//       toast.warn('password does not match')
//     } else {
//       const result = await registerUser(
//         firstName,
//         lastName,
//         email,
//         phone,
//         password
//       )
//       if (!result) {
//         toast.error('Error while registering the user')
//       } else {
//         // check if result is "success" or "error"
//         if (result['status'] == 'success') {
//           toast.success('successfully registered a user')

//           // go back
//           navigate(-1)
//         } else {
//           toast.error('Error while registering the user')
//         }
//       }
//     }
//   }

//   return (
//     <div className='container'>
//       <h2 className='page-header'>Register</h2>
//       <div className='form'>
//         <div className='mb-3'>
//           <label htmlFor=''>First Name</label>
//           <input
//             onChange={(e) => setFirstName(e.target.value)}
//             type='text'
//             className='form-control'
//             value={firstName}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Last Name</label>
//           <input
//             onChange={(e) => setLastName(e.target.value)}
//             type='text'
//             className='form-control'
//             value={lastName}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type='email'
//             className='form-control'
//             value={email}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Phone Number</label>
//           <input
//             onChange={(e) => setPhone(e.target.value)}
//             type='tel'
//             className='form-control'
//             value={phone}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type='password'
//             className='form-control'
//             value={password}
//           />
//         </div>
//         <div className='mb-3'>
//           <label htmlFor=''>Confirm Password</label>
//           <input
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             type='password'
//             className='form-control'
//             value={confirmPassword}
//           />
//         </div>

//         <div className='mb-3'>
//           <div className='mb-3'>
//             Already have an account?{' '}
//             <button
//               onClick={onBack}
//               className='btn btn-link'
//             >
//               Login here
//             </button>
//           </div>
          
//           <button
//             onClick={onRegister}
//             className='btn btn-success'
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { registerUser } from '../../services/user'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const onRegister = async () => {
    if (firstName === '' || lastName === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
      toast.warn('Please fill all fields')
    } else if (password !== confirmPassword) {
      toast.warn('Passwords do not match')
    } else {
      const result = await registerUser(firstName, lastName, email, phone, password)
      if (result?.status === 'success') {
        toast.success('Registration successful!')
        navigate('/login')
      } else {
        toast.error('Error while registering')
      }
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create a new account</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={onRegister}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
            Login here
          </button>
        </p>
      </div>
    </div>
  )
}

export default Register
