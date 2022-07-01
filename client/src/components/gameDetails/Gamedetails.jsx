import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesDetail, resetDetail } from '../../actions/actions'
// import { gameDetails } from '../../reducer/reducer'
import Navbar from '../navbar/Navbar'
import { Link, useParams } from 'react-router-dom'
import './Gamedetails.css'
import Loading from '../Loading'
const GameDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    // const allDetails = useSelector(state => state.gameDetails.gameID)
    // const lazyDetails = useSelector(state => state.gameDetails)
    const allDetails = useSelector(state => state.gameDetails)
    console.log('log del game details', allDetails);
    useEffect(() => {
        dispatch(getGamesDetail(id))
        return () => {
            dispatch(resetDetail())
        }
    }, [])
    return (
        allDetails.name ? (
            <>
                <Navbar />
                <div className='aber'>

                    <div className='lazyCSS'>
                        <div className='data-container'>
                            <h1>{allDetails.name}</h1>
                            {
                                allDetails.image
                                    ?
                                    <img src={allDetails.image} alt={allDetails.name} className='imagenBackground' />
                                    :
                                    <img src='https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0'
                                        alt='name' className='imagenBackground' />}

                            <h2> RELEASE DATE: {allDetails.releaseDate}</h2>
                            <h2>RATING {allDetails.rating}</h2>
                            <h2>{allDetails.platforms.map(p => p + "         ")}</h2>
                            <p className='description'>{allDetails.description}</p>
                        </div>
                    </div>
                </div>
            </>
        ) :
            <Loading />

    )
}
export default GameDetails;