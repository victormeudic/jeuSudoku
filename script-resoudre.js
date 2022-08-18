class SudokuCurseur {
    constructor() {
    this.ligne = 1
    this.col = 2
    this.marche = 'avant'
    }

    progresse() {
        
    }
}



const button = document.getElementById('button-resoudre')
button.addEventListener('click', () => {
    const curseur = new SudokuCurseur()
    curseur.progresse()
    console.log(curseur.marche) // Afficher l'état de marche
    console.log(curseur.ligne) // Afficher la position de la ligne
    console.log(curseur.col) // Afficher la position de la colonne
})