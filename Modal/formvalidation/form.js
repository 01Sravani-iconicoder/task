function validation ()
{
    var name = document.getElementById('nam');
    var email = document.getElementById('em');
    var password = document.getElementById('pass');

    if(name.value.trim() == "") 
    {
        alert("Name should not be empty");
        return false;
    }
    else if(email.value.trim() == "")
    {
        alert('Email should not be empty')
        return false;
    }
    else if(password.value.trim() == "")
    {
        alert('Password should not be empty')
        return false;
    }
    else
    {
        true;
    }
}