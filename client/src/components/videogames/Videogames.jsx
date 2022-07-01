import { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Videogame from '../videogame/Videogame'
import { getAllGames, getGenres, orderGames, resetDetail, sortByCreate, sortByGenres } from '../../actions/actions'
import { connect, useDispatch, useSelector } from 'react-redux'
import './Videogames.css'
import Pagination from '../pagination/Pagination'

const Videogames = ({ allGames, getAllGames, getGenres }) => {
    const allGenres = useSelector(state => state.genre)
    const dispatch = useDispatch();
    const [order, setOrder] = useState('');

    const handleFilter = (e) => {
        e.preventDefault()
        dispatch(sortByGenres(e.target.value))
        setOrder(e.target.value)

    }
    const handleOrder = (e) => {
        e.preventDefault();
        console.log('toy en el handler :D');
        dispatch(orderGames(e.target.value));
        setOrder(e.target.value);
    }

    useEffect(() => {
        getAllGames()
        return getGenres()
        // orderGames()
    }, [getAllGames])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentByPage] = useState(15)
    const totalPages = Math.ceil(allGames.length / currentByPage)

    return (
        <div>
            <Navbar />
            <div>
                <select onChange={(e) => handleOrder(e)} >
                    <optgroup label='RATING'>

                        <option value='ASC'>Menor a mayor..</option>
                        <option value='DESC'>Mayor a menor..</option>
                    </optgroup>

                    <optgroup label='ALFANUMERICO'>

                        <option value='ABC'>A {'=>'} Z</option>
                        <option value='ZYX'>Z {'=>'} A</option>
                    </optgroup>

                </select>

                <select onChange={(e) => handleFilter(e)}>

                    <optgroup label='Filtrar por origen'>
                        <option value='ALL' > Todos los juegos</option>
                        <option value='DB' > Juegos creados</option>
                        <option value='API' > Juegos de la API</option>
                    </optgroup>
                    <optgroup label='Filtrar por genero'>
                        {
                            allGenres.map((genre) => {
                                return (
                                    <option key={genre.name} value={genre.name}>{genre.name}</option>
                                )
                            })
                        }
                    </optgroup>
                </select>
            </div>
            <div className='games-container'>
                {allGames
                    .slice(
                        (currentPage - 1) * currentByPage,
                        (currentPage - 1) * currentByPage + currentByPage)
                    .map(game => (
                        <Videogame
                            key={game.id}
                            name={game.name}
                            image={game.image}
                            genres={game.genres}
                            rating={game.rating}
                            id={game.id}
                        />
                    ))}
            </div>
            <div className='pagination-container'>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        allGames: state.allGames
    }
}
export default connect(mapStateToProps, { getAllGames, getGenres })(Videogames)
