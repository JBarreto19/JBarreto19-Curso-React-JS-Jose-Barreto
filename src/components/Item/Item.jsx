import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div className="card">
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Precio: ${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <Link className='nav-link' to={`/product/${item.id}`}><button className="btn btn-dark">Detailed View</button></Link>
            </div>
        </div>

    )
} 