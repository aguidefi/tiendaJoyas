const vistaHATEOAS = (joyas) => {
  const results = joyas.map((item) => {
    return {
      name: item.nombre,
      href: `/joyas/joya/${item.id}`
    }
  }).slice(0,6)
  const totalJoyas = joyas.length;
  const stockTotal = joyas.reduce((acc, joya) => acc + joya.stock, 0);
  const HATEOAS = {
    totalJoyas,
    stockTotal,
    results
  }
  return HATEOAS
}

export default vistaHATEOAS;