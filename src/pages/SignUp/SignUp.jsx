import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "../../contexts/AuthContext"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { hero2 } from "../../assets/images"


const signUpSchema = z.object({
 name: z
    .string()
    .min(4, "Name must be at least 4 characters")
    .refine((val) => /^[A-Za-z\s]+$/.test(val), {
      message: "Name must contain only letters and spaces",
    })
    .refine((val) => val.trim().split(" ").length >= 2, {
      message: "Name must contain at least two words",
    }),

  email: z.
  string()
  .min(6, "Email is too short")
  .max(50, "Email is too long")
  .email("Please enter a valid email address")
  .refine((email) => email.endsWith("@gmail.com"), {
  message: "Only Gmail accounts are allowed",
}),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine((val) => /[a-zA-Z]/.test(val) && /\d/.test(val), {
      message: "Password must contain both letters and numbers",
    }),
})

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [signUpError, setSignUpError] = useState("")
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const { register: registerUser, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products")
    }
  }, [isAuthenticated, navigate])

  const onSubmit = async (data) => {
    setSignUpError("")
    setSignUpSuccess(false)

    const result = await registerUser(data.name, data.email, data.password)

    if (result.success) {
      setSignUpSuccess(true)
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } else {
      setSignUpError(result.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="animate-slideInUp flex flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="w-1/2 p-8 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Join us and start shopping</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {signUpError && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">{signUpError}</div>
            )}

            {signUpSuccess && (
              <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                Account created successfully!
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register("name")}
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-600 hover:text-cyan-800 font-semibold">
                Sign in here
              </Link>
            </p>
          </div>
        </div>


        <div className="w-1/2 flex items-center justify-center bg-white">
          <img
            src={hero2}
            alt="Login Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>

  );
}

export default SignUp
