import { useEffect } from "react";
import Chat from "./component/chat/Chat"
import Detail from "./component/detail/Detail"
import List from "./component/list/List"
import Login from "./component/login/Login";
import Notification from "./component/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user)=> {
        fetchUserInfo(user?.uid);
    })

    return () => {
        unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
          <List />
          <Chat />
          <Detail />
          </>
        ) : (
          <Login />
      )}
      <Notification />
    </div>
  )
}

export default App