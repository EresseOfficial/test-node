// Importations nécessaires pour le test
const chai = require('chai');
const expect = chai.expect; // Nous utilisons Expect style
const calculator = require('../calculator'); // Assurez-vous que le chemin d'accès est correct

// Groupe de tests pour le calculateur
describe('Calculator', () => {
    // Teste la fonction d'addition
    describe('Add function', () => {
        it('should return the sum of two numbers', () => {
            const a = 5;
            const b = 10;

            // Appel à la fonction d'addition
            const result = calculator.add(a, b);

            // Vérifie si le résultat est correct
            expect(result).to.equal(15);
        });

        // Vous pouvez ajouter plus de cas de tests (par exemple, des cas négatifs, des valeurs limites, etc.)
    });
});

// Vous pouvez ajouter plus de 'describe' pour d'autres fonctions dans votre module calculator.