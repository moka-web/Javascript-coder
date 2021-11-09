
class Credito{
    
    
    constructor(monto , cuotas,){
        this.monto = monto;
        this.cuotas = cuotas;
        this.interes = 1.21;
        this.valorCuotas = (this.monto /this.cuotas) * this.interes;
    }
    
    
    modificarIntereses(intereses){
        this.interes = intereses;
    }
  
}

let creditosIngresados = []
console.log(creditosIngresados)


const pedirCredito = () => {

    let monto = parseInt(prompt('ingrese el monto del credito'));
    let cuotas = parseInt(prompt('ingrese el numero de cuotas'));
    let interes = 1.21;
    let valorCuotas = (monto/cuotas) * interes;
    const credito = new Credito (monto ,cuotas);
    creditosIngresados.push(credito)
    return credito;


}



const credito1 = pedirCredito();
const credito2 = pedirCredito();
const credito3 = pedirCredito();



for (const Credito of creditosIngresados) {
    
    const ingresarCuotas = () => {
        switch (Credito.cuotas) {
            case 3:
               
                console.log('usted abonara 3 cuotas de $' + Credito.valorCuotas )
                
                return Credito.valorCuotas;
            case 6:
                console.log('usted abonara 6 cuotas de $' + Credito.valorCuotas )
                
                return Credito.valorCuotas;
                
            case 12:
                console.log('usted abonara 12 cuotas de $' + Credito.valorCuotas )
                
                return Credito.valorCuotas;
                
            case 18:
                console.log('usted abonara 18 cuotas de $' + Credito.valorCuotas )
                
                return Credito.valorCuotas;
                
            default:
                break;
        }
            
    }
    
     if (Credito.monto > 1000) {
            ingresarCuotas();
        }else{ alert('el monto de su credito es menor al minimo requerido')};
}


