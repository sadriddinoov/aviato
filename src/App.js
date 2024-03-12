import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Interface from './pages/interface/interface';
import Orders from './pages/orders/orders';
import Address from './pages/address/address';
import Profile from './pages/profile/profile';
import Checkout from './pages/checkout/chekout';
import Cart from './pages/cart/cart';
import Pricing from './pages/pricing/pricing';
import Details from './pages/details/details';
import Sidebar from './pages/sidebar/sidebar';
import Contact from './pages/contact/contact';
import About from './pages/about/about'
import Error from './pages/404/error';
import Soon from './pages/soon/soon';
import Faq from './pages/faq/faq';
import Login from './pages/login/login';
import Signin from './pages/signin/signin';
import Forget from './pages/forget/forget';
import Left from './pages/left/left';
import Right from './pages/right/right';
import Full from './pages/full/full';
import Columns from './pages/columns/columns';
import Single from './pages/single/single';
import Typograpy from './pages/typography/typography';
import Buttons from './pages/buttons/buttons';
import Alerts from './pages/alerts/allerts';
import Confirmation from './pages/confirmation/confirmation';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/404' element={<Error/>}/>
        <Route path='/soon' element={<Soon/>}/>
        <Route path='/faq' element={<Faq/>}/>

        <Route path='/interface' element={<Interface/>}>
          <Route path='dashboard' element={<Dashboard/>}/>  
          <Route path='orders' element={<Orders/>}/>
          <Route path='address' element={<Address/>} />
          <Route path='profile' element={<Profile/>}/>
        </Route>

        <Route path='/confirmation' element={<Confirmation/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/left' element={<Left/>}/>
        <Route path='/right' element={<Right/>}/>
        <Route path='/full' element={<Full/>}/>
        <Route path='/columns' element={<Columns/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/typography' element={<Typograpy/>}/>
        <Route path='/buttons' element={<Buttons/>}/>
        <Route path='/alerts' element={<Alerts/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
