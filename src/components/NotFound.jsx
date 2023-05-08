import { useRouteError, Link } from "react-router-dom"

const NotFound = () => {
    const error = useRouteError();

    return (
        <div className="text-center pt-5">
            <h1 className="text-6xl font-bold mt-5">404</h1>
            <p className="text-4xl">Page not found</p>
            <p>{error.statusText || error.message}</p>
            <Link to='/'>Volver al Inicio</Link>
        </div>
    )
}

export default NotFound
