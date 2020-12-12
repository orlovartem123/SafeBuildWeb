let form = document.getElementById('sign-up-form');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    new FormData(form);
});

form.addEventListener("formdata", event => {
    const data = event.formData;
    const values = [...data.values()];
    console.log(values);
    if(values[0].length==0||values[1].length==0||values[2].length==0){
        Swal.fire('Одно из полей не заполнено!','Проверьте введенные данные','error');
        return;
    }
    if (values[1] != values[2]) {
        Swal.fire('Пароли не совпадают!', '', 'error');
        return;
    }
    if (values[1].length < 3) {
        Swal.fire('Пароль слишком короткий!', '', 'warning');
        return;
    }
    Swal.fire('Поздравляем!', 'Вы успешно прошли регистрацию!', 'success');
});