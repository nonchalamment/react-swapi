// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

// services
import { getStarship } from "../services/sw-api"

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const starshipData = await getStarship(starshipId)
      console.log("THIS IS STARSHIP ID ====>", starshipData)
      setStarshipDetails(starshipData)
    }
    fetchStarship()
  }, [starshipId])

  if (!starshipDetails.name) return <h1>Loading ship detail...</h1>

  return ( 
    <>
      <table className="starship-card">
        <tr>
          <th>NAME: </th>
          <th>{starshipDetails.name}</th>
        </tr>
        <tr>
          <th>MODEL: </th>
          <th>{starshipDetails.model}</th>
        </tr>
        <tr>
          <th className="return-link"><Link to='/'>RETURN</Link></th>
          <th></th>
        </tr>
      </table>
    </>
  )
}

export default StarshipPage