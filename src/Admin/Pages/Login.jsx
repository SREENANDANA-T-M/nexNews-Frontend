import { FaNewspaper } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../Services/allAPI";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const result = await loginAPI(loginData);

      if (result.status === 200) {
        localStorage.setItem(
          "token",
          result.data.token
        );

        localStorage.setItem(
          "admin",
          JSON.stringify(result.data.user)
        );

        alert("Login Successful");

        navigate("/admin");
      } else {
        alert(
          result.response?.data?.message ||
            "Login Failed"
        );
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Section */}

          <div className="w-full lg:w-[40%] flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-5">
              <FaNewspaper className="text-red-600 text-4xl sm:text-5xl lg:text-6xl" />

              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light">
                NexNews
              </h1>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
              Admin Content Management System
            </p>
          </div>

          {/* Divider */}

          <div className="hidden lg:flex items-center justify-center">
            <div className="h-96 w-px bg-zinc-700"></div>
          </div>

          {/* Right Section */}

          <div className="w-full max-w-md lg:max-w-none lg:w-[35%]">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-3 text-center lg:text-left">
              Welcome
            </h2>

            <p className="text-gray-400 uppercase tracking-[2px] sm:tracking-[3px] text-xs mb-8 sm:mb-10 text-center lg:text-left">
              Please Login To Admin Dashboard
            </p>

            <form
              className="space-y-5"
              onSubmit={handleLogin}
            >
              {/* Email */}

              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-zinc-900
                  border
                  border-zinc-700
                  text-white
                  px-4
                  py-3 sm:py-4
                  rounded-md
                  outline-none
                  focus:border-red-600
                  transition
                "
              />

              {/* Password */}

              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-zinc-900
                  border
                  border-zinc-700
                  text-white
                  px-4
                  py-3 sm:py-4
                  rounded-md
                  outline-none
                  focus:border-red-600
                  transition
                "
              />

              {/* Remember Me */}

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400">
                  <input
                    type="checkbox"
                    className="accent-red-600"
                  />

                  Remember Me
                </label>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  py-3 sm:py-4
                  rounded-md
                  text-white
                  uppercase
                  tracking-widest
                  font-medium
                  transition
                "
              >
                Login
              </button>

              {/* Forgot Password */}

              <div className="text-center">
                <button
                  type="button"
                  className="
                    text-xs
                    text-gray-500
                    uppercase
                    tracking-wider
                    hover:text-red-500
                    transition
                  "
                >
                  Forgotten Your Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;