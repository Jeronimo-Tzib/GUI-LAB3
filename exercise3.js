const display = document.querySelector('#count-display');
const incrementBtn = document.querySelector('#inc-btn');
const decrementBtn = document.querySelector('#dec-btn');

const CounterApp = {
    count: 0,
    increment: function(){
        this.count++;
        display.textContent = this.count;
    },
    decrement: function(){
        this.count--;
        display.textContent = this.count;
    }
};

incrementBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
decrementBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));