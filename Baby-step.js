//CALLING ET INITIALISATION AT 0
var step = 0;
//PASSING NUMBERS AS ARGUMENTS  
for (var i=2;//Ici i=2 car a l'indice 0 et 1 on a "node" et 'yourscript' ainsi a partir de 3 on a les arguments x&y qui sont des nombre ici
jsi<process.argv.length;i++){
//SUM OF THE ARGUMENTS
    step += Number(process.argv[i]);//Il permet d'avoir les valeurs contenu dans process.argv
}
console.log(step);

//The process.argv property is an inbuilt
//application programming interface
//of the process module which is used to get the arguments
//passed to the node.js process when run in the command line.