var chiffre1 = prompt("Choississez votre premier chiffre");
chiffre1Nombre = Number(chiffre1);

while (isNaN(chiffre1Nombre))
{
	alert("Vous n'avez pas rentrer un nombre, recommencer");
	chiffre1 = prompt("Choississez votre premier chiffre");
	chiffre1Nombre = Number(chiffre1);
}

//----------------------------------------------------------------------------------------------

var operation = prompt("Choississez votre opération");

while ((operation!=="+")&&(operation!=="-")&&(operation!=="*")&&(operation!=="/"))
{
	alert("Votre opérateur n'est pas correct, recommencer");
	operation = prompt("Choississez votre opération");
}

//----------------------------------------------------------------------------------------------

var chiffre2 = prompt("Choississez votre deuxieme chiffre");
chiffre2Nombre = Number(chiffre2);

while (isNaN(chiffre2Nombre))
{
	alert("Vous n'avez pas rentrer un nombre, recommencer");
	chiffre2 = prompt("Choississez votre deuxieme chiffre");
	chiffre2Nombre = Number(chiffre2);
}

//----------------------------------------------------------------------------------------------

if (operation==="+")
	{
		reponse = chiffre1Nombre + chiffre2Nombre;
		reponseString = reponse.toString();
	}
else if (operation==="*")
	{
		reponse  = chiffre1Nombre * chiffre2Nombre;
		reponseString = reponse.toString();
	}
else if (operation==="-")
	{
		reponse  = chiffre1Nombre - chiffre2Nombre;
		reponseString = reponse.toString();
	}
else if (operation==="/")
	{
		reponse  = chiffre1Nombre / chiffre2Nombre;
		reponseString = reponse.toString();
	}

alert(chiffre1 + operation + chiffre2 + " = " + reponseString);

