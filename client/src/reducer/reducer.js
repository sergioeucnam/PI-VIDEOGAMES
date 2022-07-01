import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, CREATE_VIDEOGAME, GET_GENRES, RESET_DETAILS, SEARCH_GAMES, SORT_BY_CREATE, SORT_BY_RATING, ORDER_GAMES, SORT_BY_GENRES } from '../actions/actions.js'
const initialState = {
    searchGames: {},


    // gamesFromApi: {},
    allGames: [],
    allGamesBackup: [],
    // filteredGames: [],
    gameDetails: {},
    genre: [],

};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allGames: action.payload,
                // filteredGames: action.payload,
                allGamesBackup: action.payload
            };
        case SEARCH_GAMES:
            return {
                ...state,
                searchGames: action.payload
            }
        case GET_VIDEOGAMES_DETAIL:
            return {
                ...state,
                gameDetails: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genre: action.payload
            };
        case CREATE_VIDEOGAME:
            return {
                ...state,
                allGames: [...state.allGames, action.payload]
            };
        case RESET_DETAILS:
            return {
                ...state,
                gameDetails: {}
            };

        case SORT_BY_GENRES:
            const filterBy =

                action.payload === 'ALL'
                    ?
                    state.allGamesBackup
                    :
                    action.payload === 'DB'
                        ?
                        state.allGamesBackup.filter(game => (typeof game.id) !== 'number')
                        :
                        action.payload === 'API'
                            ?
                            state.allGamesBackup.filter(game => (typeof game.id) === 'number')
                            :
                            state.allGamesBackup.filter(game => game.genres.includes(action.payload))
            return {
                ...state,
                allGames: filterBy
            }


        case ORDER_GAMES:
            const orderGames =
                action.payload === 'ASC'
                    ?
                    state.allGames.sort((a, b) => a.rating - b.rating)
                    :
                    action.payload === 'DESC'
                        ?
                        state.allGames.sort((a, b) => b.rating - a.rating)
                        :
                        action.payload === 'ABC'
                            ?
                            state.allGames.sort((a, b) => a.name.localeCompare(b.name))
                            :
                            state.allGames.sort((a, b) => b.name.localeCompare(a.name));
            return {
                ...state,
                allGames: orderGames
            }

        default: return state;
    }
}
export default rootReducer;
