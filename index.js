$(document).ready( function(){

    class Credito{
    
        constructor(nombre,apellido,email,monto , cuotas,){
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
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
    let inputNombre = $('#nombre');
    let inputApellido = $('#apellido');
    let inputEmail = $('#email')
    let inputMonto = $('#monto'); //equivale a document.getElementById()
    let inputCuotas = $('#inputGroupSelect02'); 
    const buttonCredito = $('#btnLoad');
    const content = $('#content');
    const form = $('#my-form'); 
    //$(form).fadeOut().fadeIn(1000);

    const alertCredito = () =>{

       

        const alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.innerHTML = 'ingrese un monto mayor a $1.000';  
        $('#div-card').append(alert);
        
    }


    const pedirCredito = () => {

        let nombre = inputNombre.val();
        let apellido = inputApellido.val();
        let email = inputEmail.val();
        let monto = inputMonto.val();
        let cuotas = inputCuotas.val();
        let interes = 1.21;
        let valorCuotas = (monto/cuotas) * interes;
        const credito = new Credito (nombre,apellido,email,monto ,cuotas);
        
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


        if (tarjetasa.childNodes[0] ) {
            tarjetasa.removeChild(tarjetasa.childNodes[0]);
            
        };
        
        for (const Credito of creditosIngresados) {
                    
                    div.id = "cardCreate"
                    div.className = "  tarjetasa "
                    div.innerHTML = `<h2>Tu Prestamo</h2>
                    <p>Monto : $${Credito.monto}</p>
                    <p>Cuotas : ${Credito.cuotas}</p>
                    <p>valor cuotas : $${Credito.valorCuotas}</p>
                    <p>Nombre : ${Credito.nombre}</p>
                    <p>Apellido : ${Credito.apellido}</p> 
                    <p>Email : ${Credito.email}</p>  
                 
                    <button id = 'confirmarCredito' class="btn btn-primary" >Confirmar Credito</button>
                    <hr>`;
                    tarjetasa.appendChild(div)
                    $('.tarjetasa').fadeIn(1000)
                   
                    $('#my-form').css({
                        "display": "none"}
                    )
            
        }


        $('#confirmarCredito').on('click',(event) => {
            //deberia agregar otra funcionalidad
            creditosIngresados = [];
            location.reload();
        
    
        })


    }

    
    


    buttonCredito.on('click',(evenet) =>{
        evenet.preventDefault()
        
        pedirCredito();
        devolverCredito();
        
       
    
        
    })
    
        const APIDOLLAR = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
    
    
    $('#dolarButton').on('click',(event) =>{
        $.get(APIDOLLAR,(respuesta,estado)=>{
            if (estado === "success") {
                let misDatos =respuesta;
                let elegirDolar= $('#elegirTipoDolar').val();
                
               
                console.log(elegirDolar);
                console.log(misDatos);
                console.log(misDatos[elegirDolar].casa); 
                
                $('#cardDollar').empty();
               

                $('#cardDollar').append(
                    `
                    <div class="card container "> <p> tipo de cambio: ${misDatos[elegirDolar].casa.nombre} </p> 
                            <p>venta : $ ${misDatos[elegirDolar].casa.venta}</p>
                            <p> compra : $ ${misDatos[elegirDolar].casa.compra}</p>    
                    </div>
                    `
                    
                )
                
                
            }else{
                console.log('acceso : ',estado)
            }

        })
    })

})





















