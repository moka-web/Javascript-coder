
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

localStorage.setItem('creditos', JSON.stringify(creditosIngresados))

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
//const credito2 = pedirCredito();
//const credito3 = pedirCredito();
localStorage.setItem('creditos', JSON.stringify(creditosIngresados));

let creditosAlmacenados = localStorage.getItem('creditos');
console.log(creditosAlmacenados);

let creditosAlmacenados2 = localStorage.getItem('creditos') //nuevo array para no manipular el original que no estoy usando para nada 
if (creditosAlmacenados2 != null) {
    let nuevoArray = JSON.parse(creditosAlmacenados2)
    console.log(nuevoArray)
}

for (const Credito of creditosIngresados) {
    
    let div = document.createElement('div')
        div.innerHTML = `<h2>Mi credito</h2>
         <p>monto : $${Credito.monto}</p>
         <p>cuotas : $${Credito.cuotas}</p>
         <p>valor cuotas $${Credito.valorCuotas}</p>
         <button>Confirmar Credito</button>
         <hr>`;
    document.body.appendChild(div)


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

