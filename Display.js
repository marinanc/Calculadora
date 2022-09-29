class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();

        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
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
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}