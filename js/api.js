import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                if (resultado.lyrics) {
                    const {lyrics} = resultado;

                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensaje.textContent = 'La canción no existe, prueba nuevamente';
                    UI.divMensaje.classList.add('error');

                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error'); 
                    }, 3000);
                }
            })
    }
}

export default API;