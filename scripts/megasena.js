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
    if(numberPerson.length<5){
        alert(`Falta escolher ${5-numberPerson.length}`);
    } else if(valueBet===0){
        alert(`Adiciona o valor da aposta`);
    } else {
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


function createElementsList(){
    const list = document.querySelector('.container-content-numbers-person-list');
    for(let element of valueRandowBet){
        const listaNumero = document.createElement('li');
        listaNumero.setAttribute('class', 'number-person');
        listaNumero.innerText = `${element}`;
        list.appendChild(listaNumero);
    }
}

function generatorRandowNumber(){
    valueRandowBet = [];
    for(let counter=0; counter<5; counter++){
        let numberRandow = Math.ceil(((Math.random()*30)+1));
        valueRandowBet.push(numberRandow);
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

