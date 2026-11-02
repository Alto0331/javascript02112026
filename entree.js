//entree : recuperer une valeur saisie par l'utilisateur ou par un autre programme
// une seule instruction : prompt("message") 

//affiche un popup avec un message
alert("message")

//pareil avec un champs de saisie en plus
prompt("quel est votre nom ?")

//recuperer la valeur saisie par l'utilisateur
let nom = prompt("quel est votre nom ? ");
console.log(nom);

//prompt retourne toujours une string
let nombre = prompt("veuillez entrer un nombre")
console.log(typeof nombre);

let nombre2 = Number(prompt("veuillez entrer un nombre"));
console.log(typeof nombre2);