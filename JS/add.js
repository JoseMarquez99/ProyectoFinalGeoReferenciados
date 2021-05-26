formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    var registro = new Operator(null,formulario.nombre.value,formulario.precio.value);
    Operator.agregar();
    formulario.nombre.value ='';
    formulario.codigo.value ='';
    //$('#ventananuevo').modal('hide');
});