let Mots = prompt("Entrez votre liste de mots avec des virgules comme separateur");


let MotsRetounes = Mots.split(",");

let LongueurMaximal = 0;

let Etoile = '';

MotsRetounes.forEach((i)=>{

    if(LongueurMaximal < i.length)
    {
        LongueurMaximal = i.length
    }
});

longueurEtoile = LongueurMaximal + 4;
Etoile +=   "*".repeat(longueurEtoile);
Etoile += "\n";
let space = '';

 for(let j=0; j < MotsRetounes.length; j++)
{
    let Espace = longueurEtoile - MotsRetounes[j].length - 3 ;
    space = ' '.repeat(Espace)

    Etoile +=  "* " + MotsRetounes[j] + space + "* \n";
}

Etoile = Etoile + "*".repeat(longueurEtoile);

 console.log(Etoile);