import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/user'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onLogin = async () => {
    // === Validation Logic ===
    if (email === '') {
      toast.warn('Please enter email')
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.warn('Please enter a valid email')
      return
    }

    if (password === '') {
      toast.warn('Please enter password')
      return
    }

    // Password length validation
    if (password.length < 6) {
      toast.warn('Password must be at least 6 characters long')
      return
    }
    // === End of Validation Logic ===

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
            onBlur={() => {
              if (email.trim() === '') {
                toast.warn('Please enter email')
              } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(email)) {
                  toast.warn('Please enter a valid email')
                }
              }
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              if (password.trim() === '') {
                toast.warn('Please enter password')
              } else if (password.length < 6) {
                toast.warn('Password must be at least 6 characters')
              }
            }}
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
