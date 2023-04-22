export const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            <p> Shopping Cart</p>
              <button className="botoncarrito"><img src= "/img/cartIcon.png"></img></button>
            {cantCarrito}
        </div>
    )
}