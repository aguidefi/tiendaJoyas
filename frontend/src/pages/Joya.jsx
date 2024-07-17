import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { urlBaseServer } from './Joyas'

export const Joya = () => {
  const [joyaInfo, setJoyaInfo] = useState("")
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch (urlBaseServer + `/joyas/joya/${id}`)
        const data = await res.json()
        setJoyaInfo(data.results)
        setLoading(true)
        return data;
      } catch (error) {
        console.error(error);
      } 
    }
    getData()
  },[])

  return (
    <div className='card-container'>
      {loading ? (
        <Card border='danger' className="text-danger">
          
        </Card>
      ) : (
        <h1 style={{ marginTop: '5%'}}>Cargando tu Joya...</h1>
      )}
    </div>
  )
}
