function ask_password(login, password, success, failure) {

    vowels = 'aeiouy';

    login = toLowerCase(login);
    password = toLowerCase(password);

    let vowelsCount = 0;
    for (const el of password) {
        if (el in vowels) {
            vowelsCount++
        }
    }

    let sequenceСonsonantsLogin = []
    for (const el of login) {
        if (!vowels.includes(el)) {
            sequenceСonsonantsLogin.push(el);
        }
    }

    let sequenceСonsonantsPassword = []
    for (const el of login) {
        if (!vowels.includes(el)) {
            sequenceСonsonantsPassword.push(el);
        }
    }

    if (vowelsCount != 3) {
        failure();
    }


}

function main(login, password) {
    const success = () => {

    }

    const failure = () => {

    }

    ask_password("login", "aalgn", success, failure)
}