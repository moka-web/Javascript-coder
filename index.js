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

    const inputMonto = $('#monto'); //equivale a document.getElementById()
    const inputCuotas = $('#inputGroupSelect02'); 
    const buttonCredito = $('#btnLoad');
    const content = $('#content');
    const form = $('#content'); 


    const alertCredito = () =>{

        const alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.innerHTML = 'ingrese un monto mayor a $1.000';  
        form.append(alert);
        
    }


    const pedirCredito = () => {
    
        let monto = inputMonto.val() ;
        let cuotas = inputCuotas.val();
        let interes = 1.21;
        let valorCuotas = (monto/cuotas) * interes;
        const credito = new Credito (monto ,cuotas);
        
        if ( (monto > 1000)){
            
            creditosIngresados.push(credito);
            localStorage.setItem('creditos', JSON.stringify(creditosIngresados));
            console.log(creditosIngresados);
            return credito;
        
        }
        else
        
        {alertCredito()}
         
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
                     <button id = 'confirmarCredito' >Confirmar Credito</button>
                     <hr>`;
                    tarjetasa.appendChild(div)
            
        }


        $('#confirmarCredito').on('click',(event) => {
            
            creditosIngresados = [];
            location.reload();
    
        })
        //const confirmarCredito = $('#confirmarCredito');
         
        /*$('#confirmarCredito').on('click',(event) => {
            
            const creditosIngresados = []; //se ejcuta en el entorno de la funcion
            location.reload();

        })*/
    }

    
    

    /*buttonCredito.onclick = (event) => {
        event.preventDefault()
        
        pedirCredito();
        devolverCredito();
    
    }*/

    buttonCredito.on('click',(evenet) =>{
        evenet.preventDefault()
        pedirCredito();
        devolverCredito();

    })


})




















/*let creditosAlmacenados = localStorage.getItem('creditos');
console.log(creditosAlmacenados);*/

/*let creditosAlmacenados2 = localStorage.getItem('creditos') //nuevo array para no manipular el original que no estoy usando para nada 
if (creditosAlmacenados2 != null) {
    let nuevoArray = JSON.parse(creditosAlmacenados2)
    console.log(nuevoArray)
}*/



//eventos


