import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {


  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    select: (data) => {
      const superHeroNames = data.data.map(hero => hero.name)
      return superHeroNames
    }
  })

  useEffect(() => {
    if (data) {
      console.log('Perform side effect after data fetching', data);
    }
  })

  useEffect(() => {
    if (error) {
      console.log('Perform side effet after encountering error', error);
    }
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
      {/* {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {
        data.map(heroName => {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </div>
  )
}
