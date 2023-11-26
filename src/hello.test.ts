import { Hello } from './hello';

describe('Hello class', () => {
  let hello: Hello;

  beforeEach(() => {
    hello = new Hello();
  });

  it('should add header', () => {
    const text = 'Hello, World!';
    hello.addHeader(text);

    const h1 = document.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1!.textContent).toBe(text);
  });
});
