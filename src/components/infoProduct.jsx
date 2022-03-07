import React, { useState } from "react";
import { Col, Row } from 'reactstrap'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Fab from '@mui/material/Fab';


const InfoProduct = ({ element, setEditData, deleteData, onAdd, setShowModal }) => {

    let { name, price, id } = element;

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });



    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        onAdd(element)

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleEditData = () =>{
        setEditData(element)
        setShowModal(true)

    }
    


    return (
        <Row className="rounded align-items-center m-2 p-2 shadow" style={{ backgroundColor: "white" }} >

            <Row className="m-0 p-0">
                
                <Row className="m-0  justify-content-around  align-items-center">
 
                    <Col className="m-0 p-0">
                        <h5 className="font m-0 p-0">{name}</h5>
                        <h4 className="fontPrice m-0 p-0">${price}</h4>
                    </Col>
                    <Col className="text-end  m-0 p-0">
                        <Fab size="small" onClick={handleEditData} aria-label="delete">
                            <EditIcon />
                        </Fab>

                        <Fab size="small" style={{backgroundColor:"#f43250"}} onClick={() => deleteData(id)} aria-label="delete">
                            <DeleteForeverIcon style={{color:"white"}}/>
                        </Fab>
                    </Col>
                </Row>


                <Row className=" text-center mt-4  m-0 p-0 justify-content-center" >
                    <Button className="m-0 " variant="outlined" color="primary"  onClick={handleClick}>
                        <AddShoppingCartIcon /> Agregar
                    </Button>
                    <Col>
                        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Se ha añadido {name} al carrito
                            </Alert>
                        </Snackbar>
                    </Col>






                    {/* <Stack spacing={2} sx={{ width: '100px' }} style={{}}>
                        <Button variant="outlined" onClick={handleClick}>
                            <AddShoppingCartIcon />Agregar
                        </Button>
                        <Fab size="small"  color=""  onClick={handleClick} aria-label="delete">
                            <AddShoppingCartIcon />
                        </Fab>
                        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Se ha añadido {name} al carrito
                            </Alert>
                        </Snackbar>
                    </Stack> */}
                </Row>
            </Row>



        </Row>
    )
}
export default InfoProduct