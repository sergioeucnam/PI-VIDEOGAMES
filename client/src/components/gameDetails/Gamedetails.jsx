import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesDetail, resetDetail } from '../../actions/actions'
// import { gameDetails } from '../../reducer/reducer'
import Navbar from '../navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import './Gamedetails.css'
const GameDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const allDetails = useSelector(state => state.gameDetails.gameID)
    console.log('log del game details', allDetails);
    useEffect(() => {
        dispatch(getGamesDetail(id))
        return () => {
            dispatch(resetDetail())
        }
    }, [])
    return (
        allDetails ? (
            <>
                <Navbar />
                <div className='lazyCSS'>
                    <h1>test</h1>
                    <Link to='/home'>
                        <button> IR ATRAS</button>
                    </Link>
                    {/* <h1 > {allDetails.id}</h1> */}
                    <h1>{allDetails.name}</h1>
                    <img src={allDetails.image} alt={allDetails.name} className='imagenBackground' />
                    <h2> RELEASE DATE: {allDetails.releaseDate}</h2>
                    <h2>RATING {allDetails.rating}</h2>
                    {allDetails.platforms.map((platform) => (
                        <h2>{platform.name}</h2>
                    ))}
                    <p>{allDetails.description}</p>
                </div>
            </>
        ) : <h1 className='carnal'>estoi agarrando senal krnal</h1>

    )
}
export default GameDetails;