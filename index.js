const transactionsUL = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');

const dummyTransactions = [
    { id: 1, name: "Bolo de pote", amount: -20},
    { id: 2, name: "Salario", amount: 300},
    { id: 3, name: "Torta", amount: -10},
    { id: 4, name: "Violão", amount: 150}
];


const addTransactionIntoDom = ({name, amount}) => {
    const operator = amount < 0 ? '-' : '+';
    const CSSClass = amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(amount);

    const li = document.createElement('li');
    li.classList.add(CSSClass);
    li.innerHTML = `${name} <span>${operator} R$${amountWithoutOperator}</span><button class="delete-btn">x</button>`

    transactionsUL.append(li);
}

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions.map(({amount}) => amount);
    const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2);
    const income = transactionsAmounts.filter(value => value > 0).reduce((accumulator, value) => accumulator + value ,0).toFixed(2);
    const expense = Math.abs(transactionsAmounts.filter(value => value < 0).reduce((accumulator, value) => accumulator + value ,0)).toFixed(2);
    
    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
}


const init = () => {
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();
}

init();