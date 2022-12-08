// une voiture qui roule a 110Km/h, par de paris vers Nantes, et fait une pause de 1h, combien de temps met-elle pour arriver a Nantes ? Paris NAntes = 384.8 km.


// let calcul = (distance, vitesse, pause) => {
//      return distance / vitesse + pause;
// }

// console.log(calcul(384.8, 110, 1));



//////////////////////////
//    Algorithme 1     //
////////////////////////


/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80 */


// function thirdAngle(a, b) {
//      return 180 - (a + b);
// } 

// console.log(thirdAngle(90, 30));




//////////////////////////
//    Algorithme 2     //
////////////////////////


/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 ou
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.
Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

// function isLeapYear(year) {
//      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//           return true;
//      } else {
//           return false;
//      }
//  } 

//  console.log(isLeapYear(2005)); // true

//  const isLeapYear = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Oui ceci est une anné ..." : false;
//  console.log(isLeapYear(2004)); // true

//////////////////////////
//    Algorithme 3     //
////////////////////////

/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.
exemple :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

// function theaterSieges() {
//      let result = [];
//      for (let i = 1; i <= 26; i++) {
//           let row = [];
//           for (let j = 1; j <= 100; j++) {
//                row.push(`${i}-${j}`);
//           }
//           result.push(row);
//      }
//      return result;
//    }
   
//    console.log(theaterSieges());








// Complétez la fonction capitalize de sorte qu'elle mette en majuscule le mot en paramètre qu'elle reçoit. 


function capitalize(word) {
     return word[0].toUpperCase() + word.slice(1).toLowerCase();

}

console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"