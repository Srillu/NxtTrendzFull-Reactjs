// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartLength = cartList.length

      let totalPrice = 0

      cartList.forEach(eachItem => {
        totalPrice += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1>
              <span>Order Total:</span> Rs {totalPrice}
              /-
            </h1>
            <p>{cartLength} Items in cart</p>
            <button type="button" className="check-out-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
