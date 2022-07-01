// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { searchGame } from "../../actions/actions";
// import Navbar from "../navbar/Navbar";
// import Videogame from "../videogame/Videogame";

// //esto estaba comentado


// const SearchByName = () => {
//     const searched = useSelector(state => state.searchGames);
//     console.log('log del search by name', searched);


//     const dispatch = useDispatch();
//     const { name } = useParams();
//     // console.log(name);
//     useEffect(() => {
//         dispatch(searchGame(name));

//     }, [])

//     return (
//         <>
//             <Navbar />

//             <Videogame
//                 name={searched.name}

//             />
//             {/* searched.name
//             ?
//             (
//             {searched.map(game => (
//                 <Videogame
//                     key={game.id}
//                     name={game.name}
//                     image={game.image}
//                     genres={game.genres}
//                     rating={game.rating}
//                 // id={game.id}
//                 />
//             ))} */}


//             {/* <div className='game-container'> */}
//             {/* <div className='cajaContenedor'> */}
//             {/* <div className='game-title'>{dddd.name}</div>
//                 <div className='game-image'>
//                     <img src={dddd.image} alt={dddd.name} className='game-image' />
//                 </div>
//                 <div className='rating'>
//                     <h2>
//                         {dddd.rating}
//                     </h2>
//                 </div>
//                 <div className='genres-info'> */}
//             {/* <h2> {dddd.genres[0]} {dddd.genres[1]} {dddd.genres[2]}</h2> */}
//             {/* </div>
//                 <div className='toDetails'>
//                     <Link to={`/videogame/${dddd.id}`}>
//                         <button className='button-generic-cards' >Ver detalles</button>
//                     </Link>
//                 </div> */}
//             {/* </div> */}
//             {/* </div> */}
//             {/* ) : <h1>'not found'</h1> */}
//         </>
//     )
// }
// export default SearchByName;