console.log('Tools Loaded!');

const validaNumericos = (event) => {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}

const oculta = (div) => {
    document.querySelector(`#${div}`).classList.add('oculto');
}

const muestra = (div) => {
    document.querySelector(`#${div}`).classList.remove('oculto');
}