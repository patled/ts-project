export class Hello {
  addHeader(headerText: string) {
    const h1 = document.createElement('h1');
    h1.textContent = headerText;
    document.body.appendChild(h1);
  }
}
