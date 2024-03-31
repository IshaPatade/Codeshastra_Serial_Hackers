import { useCallback } from "react";
import Talk from "talkjs";
import { Session, Chatbox } from "@talkjs/react";

function ChatComponent() {
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: "vedant",
        name: "Vedant",
        email: "vedant@example.com",
        photoUrl: "https://talkjs.com/new-web/avatar-6.jpg",
        welcomeMessage: "Hi!",
        role: "default",
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation("welcome");

    const other = new Talk.User({
      id: "frank",
      name: "Frank",
      email: "frank@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Interesting",
      role: "default",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    const other2 = new Talk.User({
      id: "John...",
      name: "John...",
      email: "john@example.com",
      photoUrl: "https://talkjs.com/new-web/avatar-8.jpg",
      welcomeMessage: "Yeah that is interesting?",
      role: "default",
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other2);

    return conversation;
  }, []);

  return (
    <Session appId="tjZHZkCS" syncUser={syncUser} >
      <Chatbox
        syncConversation={syncConversation}
        style={{ width: "100%", height: "600px" }}
      ></Chatbox>
    </Session>
  );
}

export default ChatComponent;