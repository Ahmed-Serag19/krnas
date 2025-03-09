import { useForm } from "react-hook-form";
import { useState } from "react";
import DOMPurify from "dompurify";
import LoginBg from "../assets/images/login-bg.jpg";
import { motion } from "framer-motion";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    // Sanitize inputs
    const sanitizedEmail = DOMPurify.sanitize(data.email);

    try {
      // Here you would typically call your authentication API
      console.log("Login attempt with:", sanitizedEmail);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful login (redirect, set auth state, etc.)
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="flex overflow-hidden flex-col items-center justify-start w-full min-h-[calc(100vh-75px)]"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-full flex  flex-1 flex-col items-center justify-start relative w-full inset-0 bg-primary/70 backdrop-blur-sm">
        {/* Header */}
        <header className="text-center w-full py-4  relative bg-primary/80 backdrop-blur-sm">
          <div>
            <motion.h2
              initial={{ right: 1000 }}
              animate={{ right: 0 }}
              transition={{ duration: 1.5 }}
              className="text-2xl font-semibold text-white px-4 relative"
            >
              عيش أجواء البر بتجربة فاخرة ومجهزة بكل ما تحتاجه مع قرناس، عنوان
              الراحة والمغامرة!
            </motion.h2>
          </div>
        </header>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full form-container flex flex-col px-3 justify-center items-center text-white max-w-2xl  bg-linear-to-t from-white/35 via-gray-300/20 to-primary/30 backdrop-opacity-40 backdrop-blur-xs shadow-lg rounded-2xl p-8 mt-16 mx-4"
        >
          <h1 className="text-3xl font-bold text-center mb-6 ">تسجيل الدخول</h1>
          <div className="px-3 w-full min-h-92 max-w-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-5  "
              aria-label="Login Form"
            >
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <input
                    {...register("email", {
                      required: "البريد الإلكتروني مطلوب",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "البريد الإلكتروني غير صالح",
                      },
                    })}
                    type="email"
                    id="email"
                    className={`w-full ps-12 placeholder:text-white/80 pe-3 py-5 border  rounded-lg focus:ring-2 focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white focus:ring-white/60"
                    }`}
                    placeholder="أدخل بريدك الإلكتروني"
                    dir="rtl"
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <polyline points="3 7 12 13 21 7"></polyline>
                    </svg>
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm ">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="block">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "كلمة المرور مطلوبة",
                      minLength: {
                        value: 8,
                        message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                      },
                    })}
                    type="password"
                    id="password"
                    className={`w-full ps-12 pe-4 py-5 border placeholder:text-white/80 rounded-lg focus:ring-2 focus:outline-none ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white focus:ring-white/60"
                    }`}
                    placeholder="••••••••"
                    dir="rtl"
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                    {/* Lock Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="5"
                        y="11"
                        width="14"
                        height="10"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0110 0v4"></path>
                    </svg>
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm ">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mx-auto bg-white/80 text-primary py-3 rounded-full font-[500] text-xl hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300 mt-4 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "تسجيل الدخول"
                )}
              </button>

              {/* Register Link */}
              <div className="text-center mt-4">
                <p className="text-white/80">
                  ليس لديك حساب؟{" "}
                  <a
                    href="#"
                    className="text-white hover:underline font-medium"
                  >
                    سجل الآن
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginForm;
