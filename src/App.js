import { ToastContainer } from "react-toastify";
import Router from "./Router";
import classes from "./app.module.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={classes.container}>
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;
