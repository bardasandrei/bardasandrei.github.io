

function verifica() {

    var numeS = document.myForm.nume.value;
    var cnpS = document.myForm.cnp.value;
    var telefonS = document.myForm.telefon.value;
    var emailS = document.myForm.email.value;

    var alphaExp = /^[a-zA-Z]+$/;
    var numericExpression = /^[0-9]+$/;
    var emailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



    if (numeS === "") {
        alert("Introduceti va rog un nume");
        document.myForm.nume.focus();
        return false;
    }
    else if(!(numeS.match(alphaExp))){
        alert("Numele trebuie sa contina doar litere");
        document.myForm.nume.focus();
        return false;
    }





    else if (cnpS === "") {
        alert("Introduceti va rog un CNP");
        document.myForm.cnp.focus();
        return false;
    }
    else if (!(cnpS.match(numericExpression))) {
        alert("CNP-ul trebuie sa contina doar cifre");
        document.myForm.cnp.focus();
        return false;
    }
    else if(cnpS.length !== 13){
        alert("CNP-ul trebuie sa contina 13 cifre");
        document.myForm.cnp.focus();
        return false;
    }





    else if (telefonS === "") {
        alert("Introduceti va rog un telefon");
        document.myForm.telefon.focus();
        return false;
    }
    else if (!(telefonS.match(numericExpression))) {
        alert("Numarul de telefon trebuie sa contina doar cifre");
        document.myForm.telefon.focus();
        return false;
    }
    else if (telefonS.length !== 10) {
        alert("Numarul de telefon trebuie sa contina 10 cifre");
        document.myForm.telefon.focus();
        return false;
    }





    else if (emailS === "") {
        alert("Introduceti va rog un e-mail");
        document.myForm.email.focus();
        return false;
    }
    else if (!(emailS.match(emailExp))) {
        alert("Va rog introduceti un mail valid");
        document.myForm.email.focus();
        return false;
    }





    else{
        return true;
    }










    }

