import { Switch , Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Available from './pages/Available'
import Store from './pages/Store'
import Signup from './pages/Signup'
function ConnectLinks() {
    return (
        <>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/home">
                    <About />
                </Route>
                <Route path="/home">
                    <Available />
                </Route>
                <Route path="/home">
                    <Store />
                </Route>
                <Route path="/home">
                    <Signup />
                </Route>
            </Switch>
        </>
    )
}

export default ConnectLinks
