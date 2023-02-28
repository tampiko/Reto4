console.log('Agenta Loaded!');
oculta("alertNombre");
oculta("alertTelefono");

agenda = [
    { nombre: 'Juan', telefono: '923923' }
];

getData = () => {
    nombre = document.querySelector('#nombre').value
    telefono = document.querySelector('#telefono').value
    console.log('nombre ', nombre);
    console.log('telefono ', telefono);
}

pintaTabla = () => {
    agenda.forEach((usr) => {
        console.log(usr);
    });
}