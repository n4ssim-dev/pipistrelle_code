document.querySelector('.form__button').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.code-input');
    let code = '';

    inputs.forEach(input => {
        code += input.value;
    });

    const expectedCode = '1234';
    const secretCode = '7';
    const errorMessage = document.getElementById('error-message');

    if (code === expectedCode) {
        document.querySelector('.Title').textContent = `Bravo ! Le code secret est : ${secretCode}`;
        document.querySelector('.input-container').remove();
        document.querySelector('.form__button').remove();
        errorMessage.style.display = 'none';
    } else {
        errorMessage.textContent = 'Mauvaise combinaison. Réessayez !';
        errorMessage.style.display = 'block';
        inputs.forEach(input => {
            input.classList.add('error');
            input.value = '';
        });

        setTimeout(() => {
            inputs.forEach(input => {
                input.classList.remove('error');
            });
        }, 1000);
    }
});