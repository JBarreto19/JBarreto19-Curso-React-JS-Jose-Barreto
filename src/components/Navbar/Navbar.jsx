import { Categorias } from "./Categorias/Categorias";
import { CartWidget } from "../CartWidget/CartWidget";
export const Navbar = () => {
    return ( 
      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid">
              <img src= "/img/heavy-metal.png"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <Categorias/>
          </div>
        <CartWidget cantCarrito={0}/>
       </div>
      </nav>

);
}