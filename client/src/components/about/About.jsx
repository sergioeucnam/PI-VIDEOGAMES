import Navbar from '../navbar/Navbar.jsx'
import logo from '../about/videogame.png'
const about = () => {
    return (
        <>
            <Navbar />
            <div className='lazyCSS'>
                <img src={logo} />
                # Individual Project - Henry Videogames <br />
                ## Objetivos del Proyecto<br />
                <br />
                - Construir una App utlizando React, Redux, Node y Sequelize.<br />
                - Afirmar y conectar los conceptos aprendidos en la carrera.<br />
                - Aprender mejores prácticas.<br />
                - Aprender y practicar el workflow de GIT.<br />
                - Usar y practicar testing.<br />
                <br />
            </div>
        </>
    )
}
export default about;