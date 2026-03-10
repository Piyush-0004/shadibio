import { useState } from "react";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        {/* Title */}

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        {/* FORM */}

        <form className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>

        </form>

        {/* TOGGLE */}

        <p className="text-center mt-6 text-sm">

          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-500 ml-1 cursor-pointer font-semibold"
          >
            {isLogin ? "Register here" : "Sign in"}
          </span>

        </p>

      </div>

    </div>
  );
}

export default Auth;