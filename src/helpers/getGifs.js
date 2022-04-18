

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=czb3P5Iozna3XHJ4204crP4oLw3Aw3W3&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
} 