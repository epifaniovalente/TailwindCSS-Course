document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const error_id = document.getElementById('error_id');
    /*------- */
    const senha = document.getElementById('senha').value;
    const error_senha = document.getElementById('error_senha');


    if (user_id.length === 0) {
        error_id.textContent = 'informar o ID é obrigatério!';
    }else{
        error_id.textContent = '';
    }
    if (senha.length === 0) {
        error_senha.textContent = 'connfirmar a senha é obrigatério!';
    }else{
        error_senha.textContent = '';
    }

    
});