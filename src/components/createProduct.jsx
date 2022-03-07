import React, { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Col, Input } from 'reactstrap'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';


const CreateProduct = ({ createData, updateData, editData, setEditData, showModal, setShowModal }) => {

    const initialProduct = {
        id: null,
        name: "",
        price: ""
    }

    const [product, setProduct] = useState(initialProduct)


    useEffect(() => {
        if (editData) {
            setProduct(editData)
        } else {
            setProduct(initialProduct)
        }
    }, [editData])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!product.name || !product.price) {
            alert("Datos Incompletos")
            return;
        }

        if (product.id === null) {
            createData({ ...product, price: parseFloat(product.price) })
        } else {
            updateData({ ...product, price: parseFloat(product.price) });
            
        }

        handleReset();

    }

    const handleReset = (e) => {
        setProduct(initialProduct)
        setEditData(null)
        setShowModal(false)
    }


    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
        
 
         
    };


    const handleOpenModal = () => {
        setShowModal(true);

    }

    const handleCloseModal = () => {
        setShowModal(false);
        handleReset()
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: 'none',
        borderRadius:'10px',
        boxShadow: 24,
        p: 4,
        textAlign:"center"
    };


    return (
        <Col className="text-center my-3">
            <Button variant="contained" size="large" onClick={handleOpenModal}>+ Crear Producto</Button>
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modalStyle"
            >
                <Box sx={style} className="">
                    <h3 className="font">{editData ? "Editar" : "Crear Producto"}</h3>
                    <form onSubmit={handleSubmit}>
                        <Col className="">
                            <TextField
                                className="mx-2"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={product.name}
                                id="filled-basic"
                                label="Nombre del Producto"
                                variant="filled"
                            />

                            <FormControl className="my-3">
                                <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
                                <OutlinedInput
                                    className="mx-2"
                                    style={{ width: "100px" }}
                                    type="text"
                                    name="price"
                                    onChange={handleChange}
                                    value={product.price}
                                    id="filled-basic"
                                    label="Precio"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}

                                />
                            </FormControl>


                        </Col>
                        <div className="d-flex mx-4">
                            <Input className="bg-primary text-white mx-2" type="submit" value={editData ? "Aceptar edición" : "Crear"} />
                            <Input type="reset" value="Cancelar" onClick={handleCloseModal} />
                        </div>


                    </form>
                </Box>

            </Modal>

            {/* <h3>{editData ? "Editar" : "Crear Producto"}</h3>
            <form onSubmit={handleSubmit}>
                <Col className="">
                    <TextField
                        className="mx-2"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={product.name}
                        id="filled-basic"
                        label="Nombre del Producto"
                        variant="filled"
                    />

                    <FormControl>
                        <InputLabel htmlFor="outlined-adornment-amount">Precio</InputLabel>
                        <OutlinedInput
                            className="mx-2"
                            style={{ width: "100px" }}
                            type="text"
                            name="price"
                            onChange={handleChange}
                            value={product.price}
                            id="filled-basic"
                            label="Precio"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}

                        />
                    </FormControl>

  
                </Col>
                <Col>
                    <input type="submit" value={editData ? "Aceptar edicion" : "Crear"} />
                    <input type="reset" value="Cancelar" onClick={handleReset} />
                </Col>


            </form> */}
        </Col>
    )
}
export default CreateProduct