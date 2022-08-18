import SudokuCase from './SudokuCase.js'
import SudokuCurseur from './SudokuCurseur.js'

export default class Sudoku {
    constructor(grille) {
        this.grille = []
        // Parcourir toutes les lignes et toutes les colonnes
        for (let ligne = 0; ligne < 9; ligne += 1) {
            const grilleLigne = [];
          
            for (let col = 0; col < 9; col += 1) {
                const valeur = grille[ligne][col]
              const cellule = new SudokuCase()

              if (valeur !== '') {

                cellule.definirValeurInitiale(valeur)
              }

              grilleLigne.push(cellule)
            }

            this.grille.push(grilleLigne)
        }
        
}

resoudre() {
    
}
}