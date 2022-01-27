type actionType = {type: string, gifs: Array<any>}
type initialStateType = Array<any>
const initialState: initialStateType = []

const GET_GIF = "GET-GIFS"

export const gifsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case GET_GIF:
            return action.gifs
        default:
            return state
    }
}


export const getGifActionCreator = (gifs: Array<any>) => ({
    type: GET_GIF,
    gifs,
})
