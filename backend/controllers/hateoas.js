const vistaHATEOAS = (joyas) => {
  const results = joyas.map((item) => {
    return {
      name: item.nombre,
      href: `/joyas/joya/${item.id}`
    }
  }).slice(0,6)
  const totalJoyas = joyas.length
  const HATEOAS = {
    totalJoyas,
    results
  }
  return HATEOAS
}

export default vistaHATEOAS;