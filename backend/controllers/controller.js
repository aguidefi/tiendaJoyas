import { models } from "../models/queries.js";
import vistaHATEOAS from "./hateoas.js";

const home = async (req,res) => {
  res.send('Bienvenido a la API');
};

const getJoyasHATEOAS = async (req,res) => {
  try{
    const queryStrings = req.query;
    const response = await models.getJoyasHATEOAS(queryStrings);
    const HATEOAS = await vistaHATEOAS(response);
    res.status(200).send(HATEOAS);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getJoyasFiltros = async (req, res) => {
  try {
    const queryStrings = req.query;
    const response = await models.getJoyasFiltros(queryStrings);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const notFound = async (req,res) => {
  res.status(404).send('Ruta no encontrada');
}

export const controllers = {
  home,
  getJoyasHATEOAS,
  getJoyasFiltros,
  notFound
}