import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { searchGame } from "../../actions/actions";

const SearchByName = () => {
    const dispatch = useDispatch();
    const { name } = useParams();
    const dddd = useSelector(state => state.searchGames);
    useEffect(() => {
        dispatch(searchGame(name));

    }, [])
    console.log('log del search by name', dddd);

    return (
        <p>hola</p>
        // <>
        //     dddd.mapeo.name ? (
        //     <div className='game-container'>
        //         {/* <div className='cajaContenedor'> */}
        //         <div className='game-title'>{dddd.name}</div>
        //         <div className='game-image'>
        //             <img src={dddd.image} alt={dddd.name} className='game-image' />
        //         </div>
        //         <div className='rating'>
        //             <h2>
        //                 {dddd.rating}
        //             </h2>
        //         </div>
        //         <div className='genres-info'>
        //             {/* <h2> {dddd.genres[0]} {dddd.genres[1]} {dddd.genres[2]}</h2> */}
        //         </div>
        //         <div className='toDetails'>
        //             <Link to={`/videogame/${dddd.id}`}>
        //                 <button className='button-generic-cards' >Ver detalles</button>
        //             </Link>
        //         </div>
        //         {/* </div> */}
        //     </div>
        //     ) : (
        //     <div>
        //         <h1>No se encontro el juego</h1>
        //     </div>
        //     )
        // </>
    )
}
export default SearchByName;