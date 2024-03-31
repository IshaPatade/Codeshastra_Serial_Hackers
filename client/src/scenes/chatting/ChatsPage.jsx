import { useState } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
// import Timer from "./Timer";

const ChatsPage = (props) => {
  const icebreakers = [
    { "id": "1", "q": "Your Favorite Place on Earth?" },
    { "id": "2", "q": "Can you describe the company culture and what type of individuals tend to thrive here?" },
    { "id": "3", "q": "How would you describe the day-to-day responsibilities and challenges of this role?" },
    { "id": "4", "q": "What opportunities are there for growth and advancement within the company?" }
  ];
  const [myData, setMyData] = useState([]);
  const handleView = () => {
    setMyData(icebreakers);
  };
  return (
    <>
      <div className="flex">
        <div className="w-7/10">
          <div style={{ height: "90vh" }}>
            <PrettyChatWindow
              projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div className="w-3/10 bg-gray-200">
          <div className="flex flex-col h-full">
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold">Connect With Seniors</h2>
              <p className="text-lg text-center">Wanna get Icebreakers?</p>
            </div>
            <div className="flex justify-center items-center my-4">
              <button onClick={handleView} className="text-center p-2 border-2 bg-red-200">
                View
              </button>
            </div>
            <div className="px-4 pb-4 overflow-y-auto flex-grow">
              {myData.map((post) => (
                <div
                  key={post._id}
                  className="bg-red-100 my-4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">{post.q}</strong>
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
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ChatsPage;
