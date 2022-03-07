import React from "react";
import InfoProduct from "./infoProduct";
import { Row } from 'reactstrap'
import WarningIcon from '@mui/icons-material/Warning';



const ContainerProducts = ({ data, setEditData, deleteData, onAdd, setShowModal }) => {
    return (
        <>
            <Row className="m-0 justify-content-center" lg="4" xs="1">
                {data.length === 0
                    ?
                    <div className="text-center font" style={{fontWeight:"300", fontSize:"20px", color:"#9c9c9c "}}>
                         <WarningIcon />
                        <p>Producto no encontrado o servidor offline</p>
                    </div>
                    : (data.map((element, i) =>
                        <InfoProduct
                            onAdd={onAdd}
                            key={i}
                            element={element}
                            setShowModal={setShowModal}
                            setEditData={setEditData}
                            deleteData={deleteData}
                        />
                    )
                    )}

            </Row>
        </>
    )
}
export default ContainerProducts