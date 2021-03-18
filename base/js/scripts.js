class TestComponent extends HTMLElement {
  static get observedAttributes() {
    return ["style"];
  }
  constructor() {
    super();
    this.innerHTML = "<p>test</p>";
  }
  connectedCallback() {
    console.log("composant ajouté!");
    this.addEventListener("click", () => (this.style.color = "blue"));
  }
  disconnectedCallback() {
    console.log("composant retiré!");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    console.log(oldValue);
    console.log(newValue);
  }
}

customElements.define("test-component", TestComponent);
