import useSuperHeroesData from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const { isLoading, error, data, isFetching, refetch } = useSuperHeroesData()
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
      {data?.data.map((hero) => {
        return <div key={hero.id}><Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
      })}
      {/* {
        data.map(heroName => {
          return <div key={heroName}>{heroName}</div>
        })
      } */}
    </div>
  )
}
