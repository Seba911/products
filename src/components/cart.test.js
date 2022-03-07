import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './cart';

// test('renders learn react link', () => {
//   render(<Cart />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renderea si el carrito esta vacio', () => {
    render(<Cart cartItems={[]} />);
    const linkElement = screen.getByText("Aún no tenés ningún producto agregado!");
    expect(linkElement).toBeInTheDocument();
  });

test('Renderea un item del cart satisfactoriamente', () => {
    let item = {id:1,name:"Test",price:123}
    render(<Cart cartItems={[item]} />);

    const itemName = screen.getByText("Test");
    expect(itemName).toBeInTheDocument();
  });

  test('Renderea 3 items del cart satisfactoriamente', () => {
    let item = [{id:1,name:"Test",price:123},{id:2,name:"Prueba",price:123},{id:3,name:"OtroTest",price:123}]
    const {container} = render(<Cart cartItems={item} />);
    expect(container.getElementsByClassName("testCart").length).toBe(3)
  });

  test('Checkea si se llama a la funcion de onAdd', () => {
    const mockAdd = jest.fn()
    let item = [{id:1,name:"Test",price:123}]
    render(<Cart cartItems={item} onAdd={mockAdd} />);
    fireEvent.click(screen.getByText("+"))
    expect(mockAdd).toBeCalled()
  });