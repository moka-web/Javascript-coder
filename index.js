
$(document).ready( function(){

    class Credito{
    
        constructor(nombre,apellido,email,monto , cuotas){
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
            this.valorCuotas = (this.monto /this.cuotas) * this.interes;
        }
      
    }

    let creditosIngresados = [];

    
    
    let inputNombre = $('#nombre');
    let inputApellido = $('#apellido');
    let inputEmail = $('#email')
    let inputMonto = $('#monto'); 
    let inputCuotas = $('#inputGroupSelect02'); 
    const buttonCredito = $('#btnLoad');
   
   
    

    const pedirCredito = () => {

        let nombre = inputNombre.val();
        let apellido = inputApellido.val();
        let email = inputEmail.val();
        let monto = inputMonto.val();
        let cuotas = inputCuotas.val();
        let interes = {
        "3" : 1.21,
        "6":  1.35,  
        "12": 1.43,
        "18" : 1.52,  
        };
        
        const credito = new Credito (nombre,apellido,email,monto ,cuotas);
        credito.modificarIntereses(interes[cuotas]);
        

        const alertCredito = (string) =>{
            const alert = document.createElement('div');
            alert.className = "alert alert-danger";
            alert.innerHTML = string;  
            $('#div-card').append(alert);
            
        }
       
        const validarEmail = (email) =>{
            let exp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            let validacion = exp.test(email);
            return validacion;
        }


        

        if (monto < 1000) {
            alertCredito('el monto es menor al minimo requerido');
            
        }else if (nombre.length == 0) {
            alertCredito('ingrese un nombre valido');
            
            
        } else if (apellido.length == 0) {
            alertCredito('ingrese un apellido valido');
    
        } 
        else if (validarEmail(email) == false ) {
            alertCredito('el correo electronico ingresado no es valido');
            
        }
        else{

            creditosIngresados.push(credito);
            console.log(creditosIngresados);
            return credito;

        }


        
    }


    const devolverCredito = () => {

       
    
        let tarjetasa = document.getElementById("div-card");
        let div = document.createElement('div');


        if (tarjetasa.childNodes[0] ) {
            tarjetasa.removeChild(tarjetasa.childNodes[0]);
            
        };
        
        for (const Credito of creditosIngresados) {
                    
            div.id = "cardCreate"
            div.className = "  tarjetasa "
            div.innerHTML = `<h2>Mi credito</h2>
            <p>Nombre : ${Credito.nombre}</p>
            <p>Apellido : ${Credito.apellido}</p> 
            <p>Email : ${Credito.email}</p>    
            <p>Monto : $${Credito.monto}</p>
            <p>Cuotas : ${Credito.cuotas}</p>
            <p>valor cuotas : $${Credito.valorCuotas}</p>
            <p>tasa interes :${Credito.interes}</p>
            
            <button id = 'confirmarCredito' >Confirmar Credito</button>
            <hr>`;
            tarjetasa.appendChild(div);
            $('.tarjetasa').fadeIn(1000);
            
            $('#my-form').css({"display": "none"});
            
        }


        $('#confirmarCredito').on('click',(event) => {
            
           
            localStorage.setItem('creditos', JSON.stringify(creditosIngresados));
            
            const popUp = ()=> {

                $('#cardCreate').fadeOut();

                const popUpAlert = document.createElement('div');
                popUpAlert.className = "popUp";
                popUpAlert.innerHTML = 
                `
                    <br>
                    <p>su credito fue procesado , en breve nos estaremos comunicando via email! muchas gracias</p>
                    <br>
                    <button id = 'butonPopUp'>Aceptar</button>    
                ` 

                $('#div-card').append(popUpAlert);

                $('#butonPopUp').on('click',(event)=>{
                    creditosIngresados= [];
                    location.reload();

                })
                


            };
            
            
            
            
            popUp();
    
        });


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
                console.log('acceso : ',estado);
            }

        })
    })

})


















