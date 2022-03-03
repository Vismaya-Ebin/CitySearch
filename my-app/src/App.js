import "./App.css";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import View from "./components/View";
function App() {
  return (
    <div>
      {/** based on url we have to render component
       * if path is "/view" we will show view page
       *  if path is "/form" we will show form page
       */}
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/form" element={<Form />} />
        <Route path="/edit" element={<EditForm />} />
      </Routes>

      {/* <footer>Copyright</footer> */}
    </div>
  );
}

export default App;
