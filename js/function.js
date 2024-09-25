
function getInputNumber(id) {
    const value = document.getElementById(id).value;
    const num = parseFloat(value);
    return num;
}

function setHistory (amount, title){
    const date = new Date()
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = `
        <div class=" border-2 border-gray-300 p-4 rounded-lg">
            <h1>${amount} Taka is ${title}</h1>
            <p>${date}</p>
        </div>
    `
    const historySection = document.getElementById('history-sec');
    historySection.appendChild(historyDiv);
}