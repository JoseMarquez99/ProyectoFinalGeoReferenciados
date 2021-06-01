const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");

nombre.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('postres').add({
        nombre: nombre.nombre.value,
        precio: precio.precio.value
    });
    nombre.nombre.value = '';
    precio.precio.value = '';
})




/*var nombre = document.getElementById("nombre").value;
var precio = document.getElementById("precio").value;
this.database = firebase.firestore();
*/

const firebaseConfig = {
    apiKey: "AIzaSyD8Axc5lYapSArBtCXSQazIq56GEIZIlo0",
    authDomain: "dulcebocadoclient.firebaseapp.com",
    projectId: "dulcebocadoclient",
    storageBucket: "dulcebocadoclient.appspot.com",
    messagingSenderId: "985865234824",
    appId: "1:985865234824:web:27b42863a274e6b313f23d"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


/*
const data ={
    nombre: nombre,
    precio: precio
};

async function si(){
const res = await db.collection('postres').add(data);

console.log('se añadio doc con id:' , res.id);
} */
