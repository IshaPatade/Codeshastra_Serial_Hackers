import { useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
// import Timer from "./Timer";

const ChatsPage = (props) => {

  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-7">
          <div style={{ height: "80vh" }}>
            <PrettyChatWindow
              projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
              username={props.user.username} // adam
              secret={props.user.secret} // pass1234
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="col-span-3">
          <div className="row">
            {/* Timer */}
          </div>
          <div className="row">
            <p className="text-2xl text-center">Wanna get Icebreakers?</p>
          </div>
          <div className="row my-4">
            <button onClick={handleView} className="text-center ml-56 p-2 border-2 bg-red-200">
              View
            </button>
          </div>

          <div className="row mx-4">
            {myData.map((post) => {
              const { _id,q} = post;
              return (
                <div key={_id}>
                  <div
                    className="bg-red-100 my-4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">{q}</strong>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-red-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                      </svg>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatsPage;
