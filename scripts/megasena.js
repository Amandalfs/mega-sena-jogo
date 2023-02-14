const numberPerson = []
let valueBet = 0;

const btnNumbers = document.querySelector('.container-number');
btnNumbers.addEventListener('click', (el)=>{
   const numberSwitch = el.target;
   const valueBoolean = el.target.classList.contains('number');
   if(valueBoolean && numberPerson.length<5){
        addNumberCreate(numberSwitch);
        
   }
})

const btnRevelation = document.querySelector('.btnRevelation');
btnRevelation.addEventListener('click',()=>{
    if(numberPerson.length<5 ){
        alert(`Falta escolher ${5-numberPerson.length}`)
    }
})

const btnAddValueBet = document.querySelector('.addValueBet');
btnAddValueBet.addEventListener('click', ()=>{
    const txtValue = Number(document.querySelector('.numberValue').value);
    if(txtValue>=1){
        const textSpan = document.querySelector('.textValueBet');
        valueBet += txtValue;
        textSpan.innerHTML = `Valor: R$${valueBet.toFixed(2)}`;
    } else {
        alert('Adicione Dinheiro mao de vaca');
    }
})

function addNumberCreate(elemento){
    elemento.style.backgroundColor = '#00ff00';
    numberPerson.push(elemento.innerText);
}


function test(){
    const list = document.querySelector('.container-content-numbers-person-list');
    const listaNumero = document.createElement('li');
    listaNumero.setAttribute('class', 'number-person');
    listaNumero.innerText = `${number}`;
    list.appendChild(listaNumero);
    
}

function randowNumber(){

}