alert('funciona');
//Instanciando el objeto xmlhttpRequest.
const xhr = new XMLHttpRequest();
console.log(xhr)

xhr.onreadystatechange= function(){
    if (xhr.readyState == 4 & xhr.status == 200){
        
        console.log(JSON.parse(xhr.responseText));
        console.log(xhr.RES);
    }else{
     console.log('problemas del servidor');
    }
}

xhr.open('GET','https://api.github.com/zen')
xhr.send();
