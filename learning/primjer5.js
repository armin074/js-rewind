const osobe = [
    {ime :"Ana", jmbg: "0001"},
    {ime :"Marko", jmbg: "0002"},
    {ime :"Jovan", jmbg: "0003"},
    {ime :"Armin", jmbg: "0004"},
    {ime :"Roberto", jmbg: "0005"},
    {ime : "Lamija", jmbg: "0006"},
    {ime : "Uros", jmbg: "0007"},
]

const trazeni_jbmg = "0004"

for(let osoba of osobe) {
    console.log(osoba.ime)
    if(osoba.jmbg === trazeni_jbmg){
        console.log("Ime: ",osoba.ime)
        break
    }
}