
function CalculadoraAguaKg() //en kilogramo
{
    let pesoKg = parseInt(prompt(`Digite el peso en kg`));
    let equivalente = parseFloat();
    let agua = 0;
    const mililitro = 35;
    const litro = 1;
    
    //Proceso
    agua = mililitro * pesoKg;
    
    //Imprimo en html
    document.write(`Debe consumir =${ agua } Ml de agua diario <br/>`);

    //Proceso
    equivalente = agua * litro / 1000;
    
     //Imprimo en html
    document.write( ` Esto equivale a ${ equivalente } L`)

    /* En este programa le pido al usuario que me diga su peso en kg luego lo multiplico
    por 35 que es el valor de mililitro y ese valor se almacena en la variable (agua) a la cual le doy salida por pantalla.
    Tambien tengo una valiable llamada equivalente donde se almacena el resultado de agua por litro que es una constante
    y a su vez se divide en 1000, equivalente me guarda el valor de convertir ML a L, y a esa variable le doy salida. */

}


function CalculadoraAguaLb() //En libras
{
    let peso = parseInt(prompt(`Digite el peso`));
    const ml = 35;
    let kg;
    let L = 1;
   
    
    //Proceso
    kg = peso /2.2; // conversion de lb a kg
    kg = kg * ml;
    

    //Imprimo en html
    document.write(`Debe consumir =${ kg } Ml de agua diario <br/>`);

    //Proceso
    L = kg * L / 1000;
    
     //Imprimo en html
    document.write( ` En litro es ${ L } L`)

    /* En este programa le pido al usuario que me diga su peso puede ser e lb o kg luego lo multiplico
    por 35 que es el valor de mililitro y ese valor se almacena en la variable (kilos) a la cual le doy salida por pantalla. */

}


 






/*
function LimpiarCampos()
{
    let cleanCampos=document.querySelector("input[type='text'],input[type='number']");
    document.getElementById('idGenerar').value=0;
    document.getElementById('identificador').value="";
    
    for(let x=0;x<cleanCampos.length;x++)
    {
        cleanCampos[x].value='';
    }
}
*/
