import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    enabled: false,
  })

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>An error has occurred: {error.message}</h2>
  }

  return (
    <div>
      <button onClick={refetch}>Fetch Heroes</button>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  )
}
