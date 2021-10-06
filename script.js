window.addEventListener('load', () => {
    let valores = () => {
        var num1 = document.querySelector('#num1').value;
        var num2 = document.querySelector('#num2').value;

        return [parseInt(num1), parseInt(num2)];
    }

    function suma(valor1, valor2) {
        return valor1 + valor2;
    }

    document.querySelector('#calculo').addEventListener('click', () => {
        let values = valores();
        let resultado = suma(values[0], values[1]);

        const parrafo = `<p>El resultado es: ${resultado}</p>`;

        let parrafo_resultado = document.querySelector('#resultado');

        parrafo_resultado.innerHTML = parrafo;
    })
});