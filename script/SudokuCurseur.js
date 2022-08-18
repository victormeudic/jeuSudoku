export default class SudokuCurseur {
    constructor() {
    this.ligne = 0
    this.col = 0
    this.marche = 'avant'
    }

    // Fait progresser le curseur selin l'état de marche
    progresse() {
        // Si marche avant
        if (this.marche === "avant") {
           // Avancer le curseur
            return this.avance() 
        } else {
            // Si marche arrière
            // Reculer le curseur
            return thise.recule()
        } 
    }

    avance() {
        if (this.ligne === 8 && this.col === 8) {
            return false
        }

        if (this.col === 8) {
            this.ligne += 1
            this.col = 0
        } else {
            this.col += 1
        }

        return true
    }

    recule() {
        if (this.ligne === 0 && this.col === 0) {
            return false
        }

        if (this.col === 0) {
            this.ligne -= 1
            this.col === 8
        } else {
            this.col -= 1
        }

        return true
    }
}