import React , { useState } from 'react'
// import ChatsPage from './ChatsPage';
import MssgLogin from './MssgLogin';
import ChatsPage from './ChatsPage';

const Mssg = () => {
    const [user, setUser] = useState();
    if (!user) {
        return <MssgLogin onAuth={(user) => setUser(user)} />;
      } else {
        return <ChatsPage user={user} />;
      }
}

export default Mssg
