class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();

        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '%'
        }
    }

    borrar() {
        //Borrar solamente lo que está en la última posición
        this.valorActual = this.valorActual.toString().slice(0,-1);

        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        //this.tipoOperacion !== 'igual' && this.calcular(); -> si tipoOperacion es distinto a 'igual' entonces this.calcular()
        if(this.tipoOperacion !== 'igual') this.calcular();

        this.tipoOperacion = tipo;

        //this.valorAnterior = this.valorActual || this.valorAnterior -> si hay un valorActual, se lo asigno a valorAnterior. Sino dejo lo que tenia valorAnterior...
        if(this.valorActual !== '') this.valorAnterior = this.valorActual;

        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero){
        //Si es el punto y ya hay un punto en el display, no hacer nada
        if(numero === '.' && this.valorActual.includes('.')) return
        //Si es el punto y no hay nada en el display, no hacer nada
        if(numero === '.' && this.valorActual === '') return

        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return

        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }
}