class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
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