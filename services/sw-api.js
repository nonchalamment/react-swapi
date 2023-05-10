const baseUrl = 'https://swapi.dev'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  console.log(res)
  return res.json()
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/api/starships/${starshipId}`)
  return res.json()
}