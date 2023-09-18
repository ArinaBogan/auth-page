class Login {
    check() {
        const btn = document.querySelector('.button');
        const emailOrPhone = document.querySelector('.input1');
        const password = document.querySelector('.input2');

        btn.addEventListener('click', function () {
            try {
                if (!/^[\w\.\_]+@[a-z]+\.+[a-z]{2,6}$|^\+375[0-9]{9}$/g.test(emailOrPhone.value))
                    throw new Error('почта или номер телефона введены некорректно');

                if (password.value.length < 8) {
                    throw new Error('пароль должен содержать не менее 8 символов');
                }
                alert('Вы успешно авторизованы в системе');
            } catch (error) {
                alert(error.message);
            }
        })
    }
}
const login = new Login();
console.log(login.check());