import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total
      if (cartList.length === 1) {
        total = cartList[0].price * cartList[0].quantity
      } else {
        total = cartList.reduce(
          (a, b) => a.price * a.quantity + b.price * b.quantity,
        )
      }
      return (
        <>
          <div className="c-card">
            <div className="c-card2">
              <h1 className="cart-heading1">
                Order Total : <span className="f1">{total}</span>
              </h1>
              <p className="cart-para1">
                {cartList.length} {cartList.length === 1 ? 'item' : 'items'} in
                cart
              </p>
              <button type="button" className="cart-button">
                Checkout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
