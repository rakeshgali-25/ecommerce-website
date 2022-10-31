import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      console.log(cartList)

      const total = cartList.map(each => each.price * each.quantity)
      const sumTotal = total.reduce((a, b) => a + b, 0)
      console.log(sumTotal)

      return (
        <div className="summary-container">
          <div className="rate-container">
            <h1 className="rate-heading">Order Total: </h1>
            <h1 className="rate"> Rs{sumTotal}/</h1>
          </div>
          <p className="items-para">{items} Items in cart</p>
          <div>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
