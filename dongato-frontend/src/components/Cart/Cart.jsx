import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'

function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>
            {cartList.length === 0
            ? 
                <div className="container mt-5 cart-container">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-3"><strong>No hay productos en tu carrito</strong></h3>
                        <h4 className="my-4">¿Qué te parece si agregas algunos?</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/" style={{marginTop: '10px'}}>
                            Ir a comprar
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart
