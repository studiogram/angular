class TestComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<p>test</p>";
  }
  connectedCallback() {
    console.log("composant ajouté!");
  }
  disconnectedCallback() {
    console.log("composant retiré!");
  }
}

customElements.define("test-component", TestComponent);
