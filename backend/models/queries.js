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
    // console.log('Error', error.code, 'Error message', error.message);
  }
}

const getJoyasFiltros = async ({precio_min, precio_max, categoria, metal}) => {
  let filtros = [];
  let values = [];
    
  if (precio_min) {
    filtros.push('precio', '>=', '%s');
    values.push(precio_min);
  }
  if (precio_max) {
    filtros.push('precio', '<=', '%s');
    values.push(precio_max);
  }
  if (categoria) {
    filtros.push('categoria', '=', '%s');
    values.push(`'${categoria}'`);
  }
  if (metal) {
    filtros.push('metal', '=', '%s');
    values.push(`'${metal}'`);
  }

  let query = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join("AND")}`;
  };
  try {
    const formattedQuery = format(query, ...values);
    const response = await pool.query(formattedQuery);
    if (response.rowCount > 0) {
      return response.rows;
    } 
  } catch (error) {
    // console.log('Error', error.code, 'Error message', error.message);
  }
}

export const models = {
  getJoyasHATEOAS,
  getJoyasFiltros
}