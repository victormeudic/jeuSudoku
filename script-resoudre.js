import Sudoku from './script/Sudoku.js'

const buttonResoudre = document.getElementById('button-resoudre')
buttonResoudre.addEventListener('click', () => {
    // Tableau qui contient toutes les lignes
const grille = [];

// Récuperer toutes les valeurs
for (let ligne = 0; ligne < 9; ligne += 1) {
  const grilleLigne = [];

  for (let col = 0; col < 9; col += 1) {
    const identifiant = "case" + ligne + "-" + col;
    const input = document.getElementById(identifiant);
    const valeur = input.value;
    const nombre = valeur === "" ? "" : parseInt(valeur, 10);

    // Ajouter la valeur a la ligne
    grilleLigne.push(nombre);
  }

  // Ajouter la ligne au sudoku
  grille.push(grilleLigne);
}

const sudoku = new Sudoku(grille)
sudoku.resoudre()    
})