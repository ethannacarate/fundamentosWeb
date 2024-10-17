const datos = {  //constante llamada datos
    nombre: "naru corp", // tiene la priopiedad "nombre del objeto"
    direccion: "sarg candelaria 1298", // Propiedad 'direccion', contiene la dirección de la empresa.
    telefono: "+56 9 3909 2403", //Tiene la propiedad del numero telefonico
    email: "naruyia.27@gmail.com",//Tiene la propiedad de un correo
    website: "naru.cl"//Tiene la propiedad de un enlace
};

const divDatos = document.getElementById('datos-empresa'); // Se obtiene el elemento del DOM con el id 'datos-empresa' y se asigna a la constante 'divDatos'.
divDatos.innerHTML = `
    <h2>Datos de la Empresa</h2>
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Dirección:</strong> ${datos.direccion}</p>
    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
   
    <p><strong>Email:</strong> <a href="mailto:${datos.email}">${datos.email}</a></p>
   
 <p><strong>Sitio Web:</strong> <a href="https://rockcontent.com/es/blog/realidad-aumentada/" target="_blank">${datos.website}</a></p>`;//Se establece el contenido HTML de 'divDatos' 
 
 const btnMostar = document.getElementById ('mostrar');
 btnMostar.addEventListener('click',() =>{
     divDatos.style.display = 'block';
})
const btnocultar = document.getElementById ('ocultar');
 btnocultar.addEventListener('click',() =>{
     divDatos.style.display = 'none';
})
