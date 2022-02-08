import React from "react";
import MaterialTable from "material-table";


function App() {

  const columnas = [
    {
      title: 'Código',
      field: 'codigo'
    },
    {
      title: 'Descripción',
      field: 'descripcion'
    },
    {
      title: 'Cantidad',
      field: 'cantidad',
      type: 'numeric'
    },
    {
      title: 'Precio',
      field: 'precio',
      type: 'numeric'
    }
  ]

  const data = [
    { codigo: 'ra', descripcion: 'Ratón o mouse', cantidad: 15, precio: 5},
    { codigo: 'te', descripcion: 'Teclado', cantidad: 30, precio: 8},
    { codigo: 'teg', descripcion: 'Teclado Gamer', cantidad: 30, precio: 15},
    { codigo: 'alm', descripcion: 'Almohadilla o mouse pad', cantidad: 50, precio: 1},
    { codigo: 'almg', descripcion: 'Almohadilla o mouse pad Gamer', cantidad: 15, precio: 10}
  ]
  return (
    <div>
      <MaterialTable
        columns = {columnas}
        data = {data}
        title = 'Inventario'
        actions={[
          {
            icon: 'edit',
            tooltip: 'Editar Item',
            onClick: (event, rowData) => {alert('vas a editar: ' +rowData.codigo)}
          },
          {
            icon: 'delete',
            tooltip: 'Eliminar Item',
            onClick: (event, rowData) => {window.confirm('vas a eliminar a: ' +rowData.codigo)}
          }  
        ]}
        options = {{
          actionsColumnIndex: -1
        }}
        localization = {{
          header: {
            actions: 'Acciones'
          }
        }}
      />   
    </div>
  );
}

export default App;
