
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

let creditosIngresados = [];


const inputMonto = document.getElementById('monto');
const inputCuotas = document.getElementById('cuotas');
const buttonCredito =document.getElementById('btnLoad');
const content = document.getElementById('content');
const form = document.getElementById('my-form');

const pedirCredito = () => {
    
    let monto = parseInt(inputMonto.value) ;
    let cuotas = parseInt(inputCuotas.value);
    let interes = 1.21;
    let valorCuotas = (monto/cuotas) * interes;
    const credito = new Credito (monto ,cuotas);
    
    creditosIngresados.push(credito);
    localStorage.setItem('creditos', JSON.stringify(creditosIngresados));
    console.log(creditosIngresados);

    return credito;
}


const alertCredito = () =>{
    const alert = document.createElement('div');
    alert.className = "alert alert-danger";
    alert.innerHTML = 'Los datos ingresados no son validos';
    form.appendChild(alert);
}


const devolverCredito = () => {
    
    for (const Credito of creditosIngresados) {

        
         if ( (Credito.monto > 1000) && ((Credito.cuotas === 3) || (Credito.cuotas === 6) || (Credito.cuotas === 12) || (Credito.cuotas === 18))) 
         {
            
            let tarjetasa = document.getElementById("div-card");
            let div = document.createElement('div')
                    
                div.className = " card tarjetasa "
    
                div.innerHTML = `<h2>Mi credito</h2>
                 <p>monto : $${Credito.monto}</p>
                 <p>cuotas : ${Credito.cuotas}</p>
                 <p>valor cuotas $${Credito.valorCuotas}</p>
                 <button>Confirmar Credito</button>
                 <hr>`;
                tarjetasa.appendChild(div)
            }
            
            else{ alertCredito()};
    }

}


buttonCredito.onclick = (event) => {
    event.preventDefault()
    
    pedirCredito();
    devolverCredito();

}



/*let creditosAlmacenados = localStorage.getItem('creditos');
console.log(creditosAlmacenados);*/

/*let creditosAlmacenados2 = localStorage.getItem('creditos') //nuevo array para no manipular el original que no estoy usando para nada 
if (creditosAlmacenados2 != null) {
    let nuevoArray = JSON.parse(creditosAlmacenados2)
    console.log(nuevoArray)
}*/



//eventos


