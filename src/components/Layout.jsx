import {Outlet, Link } from "react-router-dom";

const Layout =()=>{
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Header</Link>
                </li>
                <li>
                <Link to="/autos">Autos</Link>
                </li>
                <li>
                <Link to="/listarAutos">ListarAutos</Link>
                </li>
                <li>
                <Link to="/renta">Renta</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />  
    //es como un contenedor y aca se van a renderizaren el Outlet todas nuestras paginas.
    </div>;


}
export default Layout;