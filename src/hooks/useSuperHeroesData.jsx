import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
  }
  

const useSuperHeroesData = () => {
    const {data, error, ...rest} = useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes,
        select: (data) => {
          const superHeroNames = data.data.map(hero => hero.name)
          return superHeroNames
        }
      });
    
      useEffect(() => {
        if (data) {
          console.log('Perform side effect after data fetching', data);
        }
      }, [data])
    
      useEffect(() => {
        if (error) {
          console.log('Perform side effet after encountering error', error);
        }
      }, [error])
    
  return {data, error, ...rest}
}

export default useSuperHeroesData