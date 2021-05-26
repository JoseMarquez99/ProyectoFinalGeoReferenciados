class Operator{
        
    constructor(id,nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    };

    agregar(){
        db.collection('postres').add({
            nombre: this.nombre,
            precio: this.precio
        });
    }

    actualizar(){    
        db.collection('postres').doc(this.id).update({
            nombre: this.nombre,
            precio: this.precio
        });
    };

};