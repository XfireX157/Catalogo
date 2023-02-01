import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Login from "./Pages/Home/Login"

export default function RouterDOM (props: any) {

    return (
        <Router basename={props.basename}>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </Router>
    )
}