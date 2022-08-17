const verifier = () => {
  // Vérifier que les nombres saisis sont bien des chiffres de 1 à 9

  //Récupérer tous les inputs de la page
  const listeInput = document.querySelectorAll("input");

  // Chacun des inputs
  for (const input of listeInput) {
    // Vérifier que le champ est valide
    const validiteInput = input.checkValidity();

    if (validiteInput === false) {
      // Si c'est pas valide, arrétez le programme
      return;
    }
  }
  // Tableau qui contient toute les lignes
  const sudoku = [];

  // Récuperer toutes les valeurs
  for (let ligne = 0; ligne < 9; ligne++) {
    const sudokuLigne = [];

    for (let col = 0; col < 9; col++) {
      const identifiant = "case" + ligne + "-" + col;
      const input = document.getElementById(identifiant);
      const valeur = input.value;
      let nombre;

      if (nombre === "") {
        // Si valeur est un champ texte vide
        // L'utilisateur n'a rien saisi
        nombre = "";
      } else {
        // Si valeur n'est pas vide
        // Transformer la valeur en nombre
        nombre = parseInt(valeur, 10);

        // Ajouter la valeur a la ligne
        sudokuLigne.push(nombre);
      }
    }

    // Ajouter la ligne au sudoku
    sudoku.push(sudokuLigne);
  }
  console.log(sudoku);
};

// Récupérer le boutton
const button = document.getElementById("button-verifier");

// Assigner l'événement click à la function vérifier
button.addEventListener("click", verifier);
