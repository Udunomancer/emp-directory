import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Directory from "./pages/Directory/Directory";

function App() {
  return (
    <Router>
        <Route path="/*" component={Directory} />
    </Router>
  );
}

export default App;
