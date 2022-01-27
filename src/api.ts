const API_KEY = 'pium5ayLlX75gfIKmNYkuJx6DbczwilI'


export const apiMethods = {
    getGifsSearch: async function(search: string) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=en`
        return await fetch(url).then(response => response.json())
    }
}
