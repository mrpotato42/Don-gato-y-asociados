import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Error404 from './Error404.jsx';
import CartContextProvider from './components/CartContext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import FormBuyer from './components/FormBuyer/FormBuyer';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {

	return (

		<CartContextProvider>
			<NavBar />
			<Routes>
				<Route
					exact
					path="/"
					element={<ItemListContainer greeting="¡Hola, Bienvenido a Don gato S.A.S!" />}
				/>
				<Route
					exact
					path="/categoria/:idCategory"
					element={<ItemListContainer greeting="Busqueda entre categorías" />}
				/>
				<Route
					exact
					path="/detalle/:idProduct"
					element={<ItemDetailContainer />}
				/>
				<Route
					exact
					path="/cart"
					element={<Cart />}
				/>
				<Route
					exact
					path="/checkout"
					element={<FormBuyer />}
				/>Error404 
				<Route
					path="*"
					element={<Error404 />}
				/>
				<Route
					path="/login"
					element={<Login/>}
				/>
				<Route
					path="/register"
					element={<Register/>}
				/>
			</Routes>
			<Footer />
		</CartContextProvider>
	);
}

export default App;