export const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            <p> Shopping Cart</p>
              <img src= "/images/cartIcon.png"></img>
            {cantCarrito}
        </div>
    )
}