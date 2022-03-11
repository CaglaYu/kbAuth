

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "./Components/Logout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from './Components/Home';
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    
                    <Routes>

                        <Route path="/Home" element={<Home />} />
                        <Route path="/logout" exact element={<Logout />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                    
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
