
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    const defaultEmail = "donidarmawan822@gmail.com";

    if(name == ""){
        alert("Nama tidak boleh kosong");
        return
    }else if(email == ""){
        alert("Email tidak boleh kosong")
        return
    }else if(phone == ""){
        alert("Nomor telpon masih kosong")
        return
    }else if(subject == ""){
        alert("Subject masih kosong")
        return
    }else if(message == ""){
        alert("Pesan masih kosong")
        return
    }

    console.log(name)
    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo saya ${name}, saya seorang ${subject} programmer, ${message} 
    untuk info lebih lanjut tolong hubungi saya ${phone}`
    mailTo.click();
    event.preventDefault();
}