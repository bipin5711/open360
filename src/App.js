import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Login from "./pages/login";
import '../src/css/style.css'
import Employees from "./pages/employees";
import Challenges from "./pages/challenges";
import Conversation from "./pages/conversation";
import Signup from "./pages/signup";

function App() {
  return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Navigate to="/login" replace={true} />}
					/>
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/employees" element={<Employees />} />
					<Route exact path="/challenges" element={<Challenges />} />
					<Route
						exact
						path="/conversation"
						element={<Conversation />}
					/>
				</Routes>
			</Router>
		</div>
  );
}

export default App;
