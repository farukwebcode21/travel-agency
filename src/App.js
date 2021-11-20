import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Travelers from './Pages/Travelers/Travelers';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Booking from './Pages/Booking/Booking';
import Register from './Pages/Register/Register';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
         <Router>
        <Header/>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
          <PrivateRoute path="/book/:serviceId"><Booking/></PrivateRoute>
          <Route path="/travelers"><Travelers /></Route>
          <Route path="/contactus"><Contact /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register/></Route>
          <Route path="*"><NotFound/></Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
