function generateNumber(){
    const min = Math.ceil(document.querySelector(".input-value-min").value);
    const max = Math.floor(document.querySelector(".input-value-max").value);
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(`O número sorteado foi: ${result}`);
}
