/**
 * Informations piscines :
 */
const piscines = [
  { city: "Paris", quantity: 84 },
  { city: "Marseille", quantity: 29 },
  { city: "Lyon", quantity: 14 },
  { city: "Toulouse", quantity: 21 },
];

/**
 * Classe pour chaque élément :
 */
class TestComponent extends HTMLElement {
  static get observedAttributes() {
    return ["style"];
  }
  // Le constructeur avec super() qui fait référence à HTMLElement :
  constructor() {
    super();
  }
  // méthode appelée lorsque l'élément est connecté :
  connectedCallback() {
    console.log("composant ajouté!");
    this.addEventListener("click", () => (this.style.color = "blue"));
    this.innerHTML = `
    <h3>${piscines[this.id].city}</h3>
    <p>Nombre de piscines : ${piscines[this.id].quantity}</p>
    `;
  }
  // méthode appelée lorsque l'élément est déconnecté :
  disconnectedCallback() {
    console.log("composant retiré!");
  }
  // méthode appelée lorsqu'un attribut est modifié, attention à utiliser static get observedAttributes() :
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    console.log(oldValue);
    console.log(newValue);
  }
}
// Définition de l'élément :
customElements.define("test-component", TestComponent);

/**
 * Boucle qui crée des éléments en fonction du tableau piscines :
 */
for (let piscine in piscines) {
  const component = document.createElement("test-component");
  // L'identifiant permet d'accèder à l'élément du tableau piscines :
  component.id = piscine;
  document.body.appendChild(component);
}
