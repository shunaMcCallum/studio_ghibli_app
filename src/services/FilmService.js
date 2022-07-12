const baseURL = 'https://ghibliapi.herokuapp.com/films'

const FilmService = {

    getFilms() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    // postUser(payload) {
    //     return fetch(baseURL, {
    //         method: 'POST',
    //         body: JSON.stringify(payload),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json());
    // },

    putUser(id, payload) {
        return fetch(baseURL + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    },

    // deleteUser(id) {
    //     return fetch(baseURL + id, {
    //         method: 'DELETE'
    //     });
    // }

}

export default FilmService;

