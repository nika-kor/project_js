// // // фільтер сайту 


window.toggleOn = (e) => {
    document.querySelectorAll('section:not(.hero)').forEach(el => el.style.display = 'none');
    document.querySelectorAll(`.${e}`).forEach(el => el.style.display = 'block');
    console.log(e)
}