import Navbar from "../navbar/Navbar"
import './NotFound.css'

//create notfound component
const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className="not-found">
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
        </>
    )
}
export default NotFound;