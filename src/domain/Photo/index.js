export default class Photo {
    constructor(titulo = '', url = '', descricao = '', _id = null) {
        this._id = _id;
        this.titulo = titulo;
        this.url = url;
        this.descricao = descricao;
    }
}
