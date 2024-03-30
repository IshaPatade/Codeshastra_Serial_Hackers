import React, { useState } from "react";
import login from ".././assets/login_bg.png";
import axios from "../axios";

const MssgLogin = (props) => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/chat/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };
  return (
    <>
    <div className="">
      <form onSubmit={SubmitHandler}>
        <div
          style={{ backgroundImage: `url(${login})`, backgroundSize: "cover" }}
          className="font-libre h-[90vh] text-gray-900 flex justify-center"
        >
          <div className=" sm:m-10 pb-10 rounded-3xl">
            <div className=" ">
              <div className="mt-14 flex flex-col items-center">
                <div className="text-2xl text-white">
                  For Chat Security - Enter Your Password
                </div>
                <div className="w-full flex-1 mt-5">
                  <div className="mx-auto mt-2 max-w-xs">
                    <input
                      className="w-full px-8 mt-3 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      className="w-full px-8 mt-5 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="secret"
                      name="secret"
                      placeholder="secret"
                      onChange={(e) => setSecret(e.target.value)}
                    />
                    <button className="mt-5 tracking-wide font-semibold bg-[#5f3e82] text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      <span className="ml-3">Message</span>
                    </button>
                  </div>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default MssgLogin;
