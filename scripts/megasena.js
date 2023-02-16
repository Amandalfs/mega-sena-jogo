const numberPerson = []
let valueBet = 0;
let valueRandowBet = [];

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
    const txtValue = document.querySelector('.numberValue');
    const list = document.querySelector('.container-content-numbers-person-list');
    if(numberPerson.length<5){
        alert(`Falta escolher ${5-numberPerson.length}`);
    } else if(valueBet===0){
        alert(`Adiciona o valor da aposta`);
    } else if(numberPerson.length===5 &&  txtValue.value!=="exist" && list.value!=='exist') {
        

        generatorRandowNumber();
        const profit = checkBet();
        createElementsList();
        const span = document.querySelector('.textValueBet');
        if(profit<3){
            span.innerHTML = `Voce perdeu R$${valueBet.toFixed(2)}`;
        } else if(profit===3){
            const won = valueBet*0.25;
            span.innerHTML = `Voce ganhou R$${won.toFixed(2)}`;
        } else if(profit===4){
            const won = valueBet*0.50;
            span.innerHTML = `Voce ganhou R$${won.toFixed(2)}`;
        } else if(profit===5){
            const won = valueBet;
            span.innerHTML = `Voce ganhou R$${won.toFixed(2)}`;
        }
        txtValue.value = 'exist';
        list.value = 'exist';
    } else {
        alert('clique no botao reset para comecar de novo');
    }
})

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', ()=>{
    const listRevelation = document.querySelector('.container-content-numbers-person-list');
    listRevelation.style.display = 'none';
    listRevelation.value = '';
    const textSpan = document.querySelector('.textValueBet');
    textSpan.innerHTML = '';
    textSpan.style.display = 'none';
    textSpan.value = '';
    const btnSolo = document.querySelectorAll('.number');
    for(let elemento of btnSolo){
        elemento.style.backgroundColor = 'rgb(245, 207, 247)';
    }
    console.log(btnSolo);
})

const btnAddValueBet = document.querySelector('.addValueBet');
btnAddValueBet.addEventListener('click', ()=>{
    const txtValue = Number(document.querySelector('.numberValue').value);
    const txt = document.querySelector('.numberValue');
    const list = document.querySelector('.container-content-numbers-person-list');
    const textSpan = document.querySelector('.textValueBet');
    if(txtValue>=1 && txt.value!=='exist' && list.value!=='exist'){
        valueBet += txtValue;
        textSpan.innerHTML = `Valor: R$${valueBet.toFixed(2)}`;
    } else if(txtValue<1){
        alert('Adicione Dinheiro mao de vaca');
    } else {
        alert('Clique no botao reset para apostar de novo')
    }
})

function addNumberCreate(elemento){
    elemento.style.backgroundColor = '#00ff00';
    numberPerson.push(elemento.innerText);
}


function createElementsList(){
    const list = document.querySelector('.container-content-numbers-person-list');
    list.innerHTML = '';
    for(let element of valueRandowBet){
        const listaNumero = document.createElement('li');
        listaNumero.setAttribute('class', 'number-person');
        listaNumero.innerText = `${element}`;
        list.appendChild(listaNumero);
    }
}
//valueRandowBet.push(numberRandow);
//let numberRandow = Math.ceil(((Math.random()*30)+1));
function generatorRandowNumber(){
    valueRandowBet = [];
    for(let counter=0; counter<5; counter++){
        let c = 0;
        while(c<1){     
            let numberRandow = Math.ceil(((Math.random()*30)+1));
            if(!valueRandowBet.includes(numberRandow)){
                if(numberRandow>=1 && numberRandow<=9){
                    valueRandowBet.push(`0${numberRandow}`);
                } else {
                    valueRandowBet.push(String(numberRandow));
                }
                c++
            }
        }
    }
}

function checkBet(){
    let profit = 0;
    for(let elementOfBet of numberPerson){
        if(valueRandowBet.includes(elementOfBet)){
            profit++
        }
    }
    return profit;
}

