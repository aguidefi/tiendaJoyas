import { pool } from '../config/db.js';
import format from 'pg-format';

const getJoyasHATEOAS = async ({limits=6, order_by='precio_ASC', page = 1})=>{
  const [campo, direccion] = order_by.split('_');
  const offset = Math.abs((page - 1) * limits);
  const query = format("SELECT * FROM inventario order by %s %s LIMIT %s OFFSET %s", campo, direccion, limits, offset);
  try {
    const response = await pool.query(query);
    if(response.rowCount > 0){
      return response.rows;
    }
  } catch (error) {
    console.log('Error', error.code, 'Error message', error.message);
  }
}

const getJoyasFiltros = async ({precio_min=10000, precio_max=42000, categoria, metal}) => {
  let filtros = [];
  const values = [];

  const agregarFiltro = (campo, comparador, valor) => {
    values.push(valor)
    filtros.push(`${campo} ${comparador} $${filtros.length + 1}`)
  }
  
  if (precio_min) {
    agregarFiltro('precio', '>=', precio_min);
  }
  if (precio_max) {
    agregarFiltro('precio', '<=', precio_max);
  }
  if (categoria) {
    agregarFiltro('categoria', 'ILIKE', `%${categoria}%`);
  }
  if (metal) {
    agregarFiltro('metal', 'ILIKE', `%${metal}%`);
  }
    

  let query = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join(' AND ')}`;
  };
  try {
    const response = await pool.query(query, values);
    if (response.rowCount > 0) {
      return response.rows;
    } 
  } catch (error) {
    console.log('Error', error.code, 'Error message', error.message);
  }
}

export const models = {
  getJoyasHATEOAS,
  getJoyasFiltros
}