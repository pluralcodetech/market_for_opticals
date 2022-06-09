import { useState } from "react";
import LoginForm from "../../components/auth/login/loginForm";
import SignupForm from "../../components/auth/signup/signupForm";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";

function Auth() {
  const [showSignupForm, setshowSignupForm] = useState(false);

  return (
    <Layout>
      <Navbar2 />
      {showSignupForm ? (
        <div className="mt-16 md:w-8/12 mx-4 md:mx-auto shadow bg-white border">
          <SignupForm />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-16 md:w-10/12 mx-4 md:mx-auto shadow bg-white border">
          <div className=" w-full px-3 py-8 rounded border-r-2 border-[#E16A16]]">
            <div className="ml-2 mb-6">
              <h2 className="text-lg font-bold text-slate-900">
                Welcome Back,
              </h2>
              <p>kindly enter your details</p>
            </div>
            <LoginForm setshowSignupForm={setshowSignupForm} />
          </div>
          <div className=" w-full px-3 py-8 rounded hidden md:block">
            <div className="ml-2 mb-6 flex flex-col justify-between items-between	h-full ">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Welcome Back,
                </h2>
                <p>
                  Create your Optical customer account in just a few clicks! You
                  can register either using your e-mail address or through your
                  Google account.
                </p>
              </div>

              <div>
                <button
                  className="w-full mb-4 bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => setshowSignupForm(true)}
                >
                  Sign up via E-mail
                </button>
                <button className="w-full bg-white border-2 border-[#ffce1a] hover:bg-amber-400 text-slate-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Auth;
