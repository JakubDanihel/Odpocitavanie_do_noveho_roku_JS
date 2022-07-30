//datovy format je: "1 jan 2023" - "den mesiac rok"; "12 31 2023" - "mesiac den rok"
const novyRok = "1 Jan 2023";

const dni = document.getElementById("dni");
const hodiny = document.getElementById("hodiny");
const minuty = document.getElementById("minuty");
const sekundy = document.getElementById("sekundy");

odpocitavadlo();

setInterval(odpocitavadlo, 1000);


//zadefinovanie odpotavania
function odpocitavadlo(){
    //zadefinovanie kedy je novy rok, a aky je sucasny den v roku
    const novyRokDatum = new Date(novyRok);
    const sucasnyRok = new Date();

    let cas;

    //rozdiel medzi ked je novy rok a sucasny da cas v milisekundach
    cas = ((novyRokDatum-sucasnyRok)/1000);

    //console.log(cas);

    const dni_odpocet = Math.floor(cas/3600/24); //dni

    //hodiny
    const hodiny_odpocet = Math.floor(cas/3600) %24;

    //minuty
    const minuty_odpocet = Math.floor(cas/60)%60;

    //sekundy
    const sekundy_odpocet = Math.floor(cas)%60;



    //console.log(dni_odpocet, hodiny_odpocet, minuty_odpocet, sekundy_odpocet);

    dni.textContent = format_cas(dni_odpocet);
    hodiny.textContent = format_cas(hodiny_odpocet);
    minuty.textContent = format_cas(minuty_odpocet);
    sekundy.textContent = format_cas(sekundy_odpocet);

}

function format_cas(time){
    return time<10?(`0${time}`):time;
}