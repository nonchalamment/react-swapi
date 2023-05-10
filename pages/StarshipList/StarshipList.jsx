// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// services
import { getAllStarships } from "../../services/sw-api"


const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      console.log('STARSHIPS =======> ', starshipData.results)
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading starships...</h1>

  return (
    <div className="container">
      {starshipList.map((starship) => 
        <Link to={`/starships/${starship.url.slice(32)}`}>
          <div className="link-container" key={starship.url.slice(31)}>
            {starship.name}
          </div>
        </Link>
      )}
    </div>

  )
}

export default StarshipList