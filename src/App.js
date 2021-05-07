import{BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Users from './components/Users'
import Orders from './components/Orders'
import Contact from './pages/Contact'
import CreateUser from './pages/CreateUser'
import CreateOrder from './pages/CreateOrder'
import Layout from './components/Layout'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/create/user' component={CreateUser} />
            <Route exact path='/create/order' component={CreateOrder} />
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
