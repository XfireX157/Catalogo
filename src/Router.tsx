import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'

export default function RouterDOM (props: any) {

    return (
        <Router basename={props.basename}>
            <Routes >
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}