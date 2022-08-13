export default class PhotoService { 
    constructor(resource) {
        this._resource = resource; // _atributo privado
        this.route = 'v1/fotos'
    }
}