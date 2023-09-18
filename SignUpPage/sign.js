class SignUp {
    registration() {
        const btn = document.querySelector('.button');

        btn.addEventListener('click', function () {
            const emailOrPhone = document.querySelector('.input1');
            const password = document.querySelector('.input2');
            const confirmPsw = document.querySelector('.input3');
            try {
                if (!/^[\w\.\-\$]+@[a-z]+\.[a-z]{2,4}|\+[0-9]{12}$/g.test(emailOrPhone.value))
                    throw new Error('введите почту или номер телефона');

                if (password.value.length < 8) {
                    throw new Error('пароль должен содержать не менее 8 символов');
                }

                if (password.value !== confirmPsw.value)
                    throw new Error('пароли должны совпадать');

                alert('Вы успешно зашли в систему');
            } catch (error) {
                alert(error.message);
            }
        })
    }
}
const signUp = new SignUp();
console.log(signUp.registration())
