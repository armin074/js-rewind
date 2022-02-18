let brojac = 0 
let tekuci_broj = 1

while(true){

    if(!((tekuci_broj % 3 == 0) &&
           (tekuci_broj % 7 == 0)) ){
        {
            tekuci_broj++
            continue // prekida tekuci ciklus
        }
    }
    console.log(tekuci_broj)
    brojac++
    tekuci_broj++

    if(brojac == 100) {
        break // gasim petlju 
    }
}