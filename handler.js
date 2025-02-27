document.getElementById('btn-update').addEventListener('click', function () {
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerText = 'Page Title Updated'
})

document.getElementById('btn-login').addEventListener('click', function () {
    const userInfo = document.getElementById('user');
    userInfo.innerText = 'User Logged In Successfully'
})

document.getElementById('name-update').addEventListener('click', function () {
    const nameInput = document.getElementById('input-name');
    const name = nameInput.value;
    console.log('Name :', name)

    const nameP = document.getElementById('rename');
    nameP.innerText = name;
})