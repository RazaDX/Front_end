function sasveicinaties(){
        alert("Sveiks, piena puika");


}

function CheckUsernamePassword(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == 'demo' && password == 'demo'){
       sasveicinaties()
    }
    else{
        alert('Access denied!')
    }
}
