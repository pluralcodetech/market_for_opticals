import React from "react";
import LoginForm from "../../components/auth/login/loginForm";
import Layout from "../../components/layout";
import Navbar2 from "../../components/market/navbar/navbar2";

function Auth() {
  return (
    <Layout>
      <Navbar2 />
      <div className="grid grid-cols-2 gap-3 mt-16 md:w-10/12 mx-4 md:mx-auto">
        <div className=" w-full bg-white shadow px-3 py-8 rounded">
          <div className="ml-2 mb-6">
            <h2 className="text-lg font-bold text-slate-900">Welcome Back,</h2>
            <p>kindly enter your details</p>
          </div>
          <LoginForm />
        </div>
        <div className=" w-full bg-white shadow rounded"></div>
      </div>
    </Layout>
  );
}

export default Auth;
