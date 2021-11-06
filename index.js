
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



const pedirCredito = () => {

    let monto = parseInt(prompt('ingrese el monto del credito'));
    let cuotas = parseInt(prompt('ingrese el numero de cuotas'));
    let interes = 1.21;
    let valorCuotas = (monto/cuotas) * interes;
    const credito = new Credito (monto ,cuotas);
    return credito;
}

const credito1 = pedirCredito();
console.log(credito1)


const ingresarCuotas = () => {
    switch (credito1.cuotas) {
        case 3:
           
            alert('usted abonara 3 cuotas de $' + credito1.valorCuotas )
            
            return credito1.valorCuotas;
        case 6:
            alert('usted abonara 6 cuotas de $' + credito1.valorCuotas )
            
            return credito1.valorCuotas;
            
        case 12:
            alert('usted abonara 12 cuotas de $' + credito1.valorCuotas )
            
            return credito1.valorCuotas;
            
        case 18:
            alert('usted abonara 18 cuotas de $' + credito1.valorCuotas )
            
            return credito1.valorCuotas;
            
        default:
            break;
    }
        
}

 if (credito1.monto > 1000) {
        ingresarCuotas()
    }else{ alert('el monto de su credito es menor al minimo requerido')} 
