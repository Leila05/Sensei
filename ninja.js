class Ninja{
    constructor(nombre){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = 0;
    }

    sayName(){
        console.log("Nombre del ninja:", this.nombre);
    }

    showStats(){
        this.drinkSake();
        console.log("Nombre:", this.nombre, ", Velocidad:", this.velocidad, 
        ", Fuerza:", this.fuerza, ".Salud:", this.salud);
    }

    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.velocidad = 10;
        this.fuerza = 10;
        this.salud = 200;
        this.sabiduria = 10;
    }

    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();