class Veiculo{
     #modelo;
     #piloto;
     #ano;
    constructor(Motor, m, p, a){
        this.motor=Motor;
        this.#modelo=m;
        this.#piloto=p;
        this.#ano=a;
    }

    acelerar(){
        return this.motor.acelerar();
    }

    get modelo(){
        return this.#modelo;
    }

    get piloto(){
        return this.#piloto;
    }

    get ano (){
        return this.#ano;
    }

    set modelo(m){
        this.#modelo=m;
    }

    set piloto(p){
        this.#piloto=p;
    }

    set ano(a){
        this.#ano=a;
    }
}

