const GET_GIF = "GET-GIFS"
const DELETE_GIF = "DELETE_GIF"
const LIKE_GIF = "LIKE_GIF"

function defineType<T extends string>(string: T): T {
    return string
}
type actionType = ReturnType<typeof getGifActionCreator>
    | ReturnType<typeof deleteGifActionType>
    | ReturnType<typeof likedCardAC>

type initialStateType = Array<any>
const initialState: initialStateType = []


export const gifsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case GET_GIF:
            return action.gifs.map(i => ({...i, isLiked: false}))
        case DELETE_GIF:
            return state.filter(i => i.id !== action.id)
        case LIKE_GIF:
            const el = state.find(i => i.id === action.id)
            el.isLiked = !el.isLiked
            return [...state]
        default:
            return state
    }
}


export const getGifActionCreator = (gifs: Array<any>) => ({
    type: defineType(GET_GIF),
    gifs,
})

export const deleteGifActionType = (id: string) => ({
    type: defineType(DELETE_GIF),
    id,
})

export const likedCardAC = (id: string) => ({
    type: defineType(LIKE_GIF),
    id,
})
