const GET_GIF = "GET-GIFS"
const DELETE_GIF = "DELETE_GIF"

function defineType<T extends string>(string: T): T {
    return string
}
type actionType = ReturnType<typeof getGifActionCreator>
    | ReturnType<typeof deleteGifActionType>

type initialStateType = Array<any>
const initialState: initialStateType = []


export const gifsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case GET_GIF:
            return action.gifs
        case DELETE_GIF:
            return state.filter(i => i.id !== action.id)
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
