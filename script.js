const screen = document.querySelector('.screen');

function clearScreen() {
    screen.value = '';
}

function pressEnter() {
    screen.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            calculate();
        }
    });
}

function calculate() {
    let result = screen.value;

    try {
        result = eval(result);
        if (isNaN(result)) {
            screen.value = 'Conta Inválida';
            return;
        }

        if (!isFinite(result)) {
            screen.value = 0;
            return;
        }
        
        screen.value = result;
    } catch(error) {
        screen.value = 'Conta Inválida';
        return;
    }
}

function btnToScreen(valor) {
    screen.value += valor;
}

function delOne() {
    screen.value = screen.value.slice(0, -1);
}

function btnsClick() {
    document.addEventListener('click', event => {
        const element = event.target;

        if (element.classList.contains('btn-num')) {
            btnToScreen(element.innerText);
        }

        if (element.classList.contains('btn-clear')) {
            clearScreen();
        }

        if (element.classList.contains('btn-del')) {
            delOne();
        }

        if (element.classList.contains('btn-eq')) {
            calculate();
        }
    });
}
btnsClick();
pressEnter();