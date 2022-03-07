import React from "react";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Cart = ({ cartItems, onAdd, onRemove }) => {

    const itemsPrice = cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.qty, 0);
    const shippingPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <>
            <div className='p-4'>
            <hr></hr>
                <div className="d-flex align-items-center justify-content-center">
                    <ShoppingCartIcon /><h3 className="mx-2 my-0 p-0 font">Carrito</h3>
                </div>
                
                {cartItems.length === 0 && <div className="font text-center" style={{fontWeight:"300"}}>Aún no tenés ningún producto agregado!</div>}
                
                    {cartItems.map((item) =>
                        // console.log(item)

                        <div key={item.id} className="testCart">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="font">
                                    {item.name}
                                </div>
                                <div className="text-center">
                                    <Button onClick={() => onRemove(item)} className="mx-1" variant="outlined" style={{ minWidth: "40px" }}>-</Button>
                                    <Button onClick={() => onAdd(item)} className="" variant="contained" style={{ minWidth: "10px" }}>+</Button>
                                </div>
                            </div>

                            <div className='fontPrice text-center'>
                                <strong>{item.qty}</strong> x ${item.price.toFixed(2)} c/u
                            </div>
                        </div>

                    )}
               
                
                {cartItems.length !== 0 && (
                    <div className="d-flex justify-content-center">
                        <div>
                        <hr></hr>
                        <div className="row align-items-center">
                            <div className="col" style={{ fontSize: "11px" }}>PRECIO DEL PRODUCTO</div>
                            <div className="col">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col" style={{ fontSize: "11px" }}>COSTO DE ENVIO</div>
                            <div className="col">${shippingPrice.toFixed(2)}</div>
                        </div>

                        <div className="row align-items-center bg-primary rounded">
                            <div className="col" style={{ fontSize: "11px", color: "white" }}>TOTAL</div>
                            <div className="col" style={{ color: "white" }}>${totalPrice.toFixed(2)}</div>
                        </div>
                        <div className='text-center mt-3'>
                            <Button style={{ fontSize: "10px" }} variant="contained" color="success" onClick={() => alert('¡Se ha realizado la compra! ¡Muchas gracias!')}> COMPRAR AHORA</Button>
                        </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </>
    )
}
export default Cart