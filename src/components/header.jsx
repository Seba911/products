import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';


const Header = ({ countCartItems, cartItems, onAdd, onRemove }) => {

    const itemsPrice = cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.qty, 0);
    const shippingPrice = itemsPrice * 0.14;
    const totalPrice = itemsPrice + shippingPrice;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <header>

                <div>


                    {countCartItems ? (
                        <div>
                            {/* <Stack spacing={2} direction="row">
                                <Badge badgeContent={countCartItems} color="error" >
                                    <ShoppingCartIcon />
                                </Badge>
                            </Stack> */}

                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                                <Tooltip title="Ver productos">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Badge badgeContent={countCartItems} color="error" >
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            ><div className='p-4'>
                                <div className="d-flex align-items-center justify-content-center mb-2">
                                    <ShoppingCartIcon /><h4 className="mx-2 my-0 p-0">Carrito</h4>
                                </div>
                                {cartItems.map((item) =>
                                    // console.log(item)

                                    <div key={item.id} className="">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="font">
                                                {item.name}
                                            </div>
                                            <div className='text-center'>
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
                                    <div>
                                        <hr></hr>
                                        <div className="row align-items-center">
                                            <div className="col" style={{fontSize:"11px"}}>PRECIO DEL PRODUCTO</div>
                                            <div className="col">${itemsPrice.toFixed(2)}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col" style={{fontSize:"11px"}}>COSTO DE ENVIO</div>
                                            <div className="col">${shippingPrice.toFixed(2)}</div>
                                        </div>

                                        <div className="row align-items-center bg-primary rounded">
                                            <div className="col" style={{fontSize:"11px", color:"white"}}>TOTAL</div>
                                            <div className="col" style={{color:"white"}}>${totalPrice.toFixed(2)}</div>
                                        </div>
                                        <div className='text-center mt-3'>
                                            <Button style={{fontSize:"10px"}} variant="contained" color="success" onClick={() => alert('Se ha realizado la compra')}> COMPRAR AHORA</Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                                

                            </Menu>
                        </div>
                    ) : <>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <Tooltip title="Ver carrito">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Badge badgeContent={countCartItems} color="error" >
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        padding:5
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        ><div className='p-4'>
                            <div className="d-flex align-items-center justify-content-center mb-2">
                                    <ShoppingCartIcon /><h4 className="mx-2 my-0 p-0">Carrito</h4>
                                </div>
                            {cartItems.length === 0 && <div className="font" style={{fontWeight:"300"}}> Aún no tenés ningún<br /> producto agregado! </div>}
                        </div>


                        </Menu></>}

                </div>
            </header>
        </>
    )
}
export default Header