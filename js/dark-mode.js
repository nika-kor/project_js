const themeSwitch = document.querySelector('.header-settings-list-switch-checkbox');

themeSwitch.addEventListener('click', () => {
    switch(themeSwitch.checked) {
        case true:
            document.body.classList.add('dark');
            console.log('dark')
            break;
        case false:
            document.body.classList.remove('dark');
            console.log('light');
            break;
    }
});