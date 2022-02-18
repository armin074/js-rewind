// trazim brojeve do 100 djeljive sa 3 i 7 
let brojac = 0

let tekuci_broj = 1

while(brojac < 100 && tekuci_broj < 100){
    if( (tekuci_broj % 3 == 0) && (tekuci_broj % 7 == 0) ){
        console.log(tekuci_broj)
        brojac++
    }

    tekuci_broj++
}