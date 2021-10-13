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
                <Route exact path ="/" component={Home} />
                <Route exact path ="/about" component={About} />
                <Route exact path ="/available" component={Available} />
                <Route exact path ="/store" component={Store} />
                <Route exact path ="/signup" component={Signup} />
            </Switch>
        </>
    )
}

export default ConnectLinks
