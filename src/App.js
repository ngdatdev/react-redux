import logo from "./logo.svg";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
import Home from "./component/Home";
import ChatBox from "./component/ChatBox";
import React, { useEffect, useState } from "react";
import Notification from "./component/Notification";

function App(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  const handleDecrease = () => {
    dispatch(decreaseCounter());
  };

  const [currentUser, setCurrentUser] = useState("User1");
  const [receiver, setReceiver] = useState("User2");
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MTYxIiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE2MSIsImV4cCI6MTcyODg5MjM3OCwiaWF0IjoxNzI4ODA1OTc4LCJqdGkiOiI0NjRhNWU1My04YmFhLTQxOWItYmQyMy1lNzlmNjU4MGIxNTMiLCJzdWIiOiIxYTZjM2U3Ny00MDk3LTQwZTItYjQ0Ny1mMDBkMWY4MmNmNzMiLCJyb2xlIjoidXNlciIsIm5iZiI6MTcyODgwNTk3OH0.HOFnb9lgsDTiK73Mq27OAFjNwMW6zqh1Dbzd4JwRNVY"
  ); // JWT token state
  return (
    <>
      {/* <Home /> */}

      <div>
        <h1>Chat Application</h1>
        <input
          value={currentUser}
          onChange={(e) => {
            setCurrentUser(e.target.value);
          }}
        />
        <input
          value={receiver}
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
        />
        <input
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
        />
        <ChatBox currentUser={currentUser} receiver={receiver} token={token} />
      </div>
    </>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
