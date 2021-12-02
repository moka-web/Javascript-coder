$(document).ready( function(){

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

    //const form = $('#user-form');

    const inputMonto = document.getElementById('monto'); //equivale a document.getElementById()
    const inputCuotas = document.getElementById('inputGroupSelect02');
    const buttonCredito =document.getElementById('btnLoad');
    const content = document.getElementById('content');
    const form = document.getElementById('my-form');


    const pedirCredito = () => {
    
        let monto = inputMonto.value ;
        let cuotas = inputCuotas.value;
        let interes = 1.21;
        let valorCuotas = (monto/cuotas) * interes;
        const credito = new Credito (monto ,cuotas);
        
        if ( (monto > 1000)){
            
            creditosIngresados.push(credito);
            localStorage.setItem('creditos', JSON.stringify(creditosIngresados));
            console.log(creditosIngresados);
            return credito;
        
        }else{alertCredito()}
         
    }


    const alertCredito = () =>{
        const alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.innerHTML = 'ingrese un monto mayor a $1.000';
        form.appendChild(alert);
    }

    const devolverCredito = () => {
    
        let tarjetasa = document.getElementById("div-card");
        let div = document.createElement('div')
        
        for (const Credito of creditosIngresados) {
                    
                    div.className = " card tarjetasa "
        
                    div.innerHTML = `<h2>Mi credito</h2>
                     <p>monto : $${Credito.monto}</p>
                     <p>cuotas : ${Credito.cuotas}</p>
                     <p>valor cuotas $${Credito.valorCuotas}</p>
                     <button>Confirmar Credito</button>
                     <hr>`;
                    tarjetasa.appendChild(div)
            
        }
    
    
    }


    buttonCredito.onclick = (event) => {
        event.preventDefault()
        
        pedirCredito();
        devolverCredito();
    
    }


})




















/*let creditosAlmacenados = localStorage.getItem('creditos');
console.log(creditosAlmacenados);*/

/*let creditosAlmacenados2 = localStorage.getItem('creditos') //nuevo array para no manipular el original que no estoy usando para nada 
if (creditosAlmacenados2 != null) {
    let nuevoArray = JSON.parse(creditosAlmacenados2)
    console.log(nuevoArray)
}*/



//eventos


