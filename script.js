const billAmount = document.querySelector('#billAmount').value;
const serviceQuality = document.querySelector('#serviceQuality');
const peopleCount = document.querySelector('#peopleCount');

let total = (billAmount*serviceQuality) / peopleCount;


const newDiv = document.createElement('div');
