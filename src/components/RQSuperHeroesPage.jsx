import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes)


  if(isLoading) {
    return <h2>Loading...</h2>
    
  }
    return (
      <div>
        <h2>RQ Super Heroes Page</h2>
        {data?.data.map((hero) => {
            return <div key={hero.name}>{hero.name}</div>
          })
        }
      </div>
    )
  }


// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const RQSuperHeroesPage = () => {
//   const { isLoading, isError, data, error } = useQuery(['super-heroes'], () => {
//     return axios.get('http://localhost:4000/superheroes');
//   });

//   console.log("Query Data:", data);

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   if (isError) {
//     console.log("Query Error:", error);
//     return <h2>Error: {error.message}</h2>;
//   }

//   return (
//     <div>
//       <h2>RQ Super Heroes Page</h2>
//       {data?.data.map((hero) => (
//         <div key={hero.name}>{hero.name}</div>
//       ))}
//     </div>
//   );
// };
