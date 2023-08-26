export class BaseComponent {
  constructor({ tag = 'div', elementClass = [], parent, id }) {
    this.element = document.createElement(tag);
    this.element.classList.add(...elementClass);
    if (parent) {
      parent.append(this.element);
    }
    if (id) {
      this.element.id = id;
    }
    console.log(this.element);
  }
  getNode() {
    return this.element;
  }
  setImg(img, altImg) {
    this.element.src = img;
    this.element.alt = altImg;
  }
  setText(text) {
    this.element.textContent = text;
  }
  setInnerHTML(value) {
    this.element.innerHTML = value;
  }
  setStyle(property, value) {
    this.element.style[property] = value;
  }
  setEvent(event, func) {
    this.element.addEventListener(event, func);
  }
  insertChildren(...children) {
    children.forEach((component) => {
      this.element.append(component.getNode());
    });
  }
}
