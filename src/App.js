import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField'
import CreateProduct from "./components/createProduct";
import ContainerProducts from "./components/containerProducts";
import Cart from "./components/cart"
import axios from "axios"
import { Container } from "reactstrap";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Header from './components/header'


const App = () => {


  const [db, setDb] = useState([])
  const [tablaDatos, setTablaDatos] = useState([])
  // cuando este nulo, significa que se hace una insert
  // cuando sea true, se actualiza la db
  const [editData, setEditData] = useState(null)
  const [busqueda, setBusqueda] = useState("")
  const [showModal, setShowModal] = useState(false)


  // let api = helpHttp();
  let url = "http://localhost:3004/producto"

  const peticionGet = async () => {
    await axios.get(url)
      .then(response => {
        setDb(response.data);
        setTablaDatos(response.data)
      }).catch(error => {
        console.log(error)
      })
  }




  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaDatos.filter((element) => {
      if (element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || element.price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return element;
      }
    })
    setDb(resultadoBusqueda)
  }

  const handleChange = e => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }


  useEffect(() => {
    peticionGet()
  }, [])


  const createData = (data) => {
    data.id = Date.now()
    setDb([...db, data])
    setTablaDatos([...tablaDatos, data])
    fetch(`http://localhost:3004/producto/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });

  }

  const updateData = (data) => {
    let newData = db.map(element => element.id === data.id ? data : element)
    setDb(newData)
    setTablaDatos(newData)
    console.log(data.id)
    fetch(`http://localhost:3004/producto/${data.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)

    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        setDb(newData)
        setTablaDatos(newData)
      })
    })
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Seguro deseas eliminar el producto id ${id}?`)

    if (isDelete) {
      let newData = db.filter(element => element.id !== id)
      setDb(newData)
      setTablaDatos(newData)
      fetch(`http://localhost:3004/producto/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
        });
    } else {
      return
    }
  }

  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }



  return (
    <div className="" style={{ backgroundColor: "#ededed" }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingY: "25px", backgroundColor: "white" }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Buscar Producto" variant="standard" value={busqueda}
          onChange={handleChange} />
        <Header
          countCartItems={cartItems.length}
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
        />
      </Box>

      <Container>
        <CreateProduct
          createData={createData}
          updateData={updateData}
          editData={editData}
          setEditData={setEditData}
          showModal={showModal}
          setShowModal={(show) => setShowModal(show)}
        />
        <ContainerProducts
          onAdd={onAdd}
          data={db}
          setShowModal={(show) => setShowModal(show)}
          setEditData={setEditData}
          deleteData={deleteData}
        />
        <Cart
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
        />
      </Container>
      <footer className="footer bg-dark text-white text-center font" style={{fontWeight:"300"}}>
        Desarrollado por <a className="text-decoration-none" href="https://github.com/Seba911" target="_blank">Seba911</a>
      </footer>
    </div>
  )
}
export default App