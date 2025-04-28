// import { useQueries } from "@tanstack/react-query"
// import axios from "axios"

// const fetchSuperHero = (heroId) => {
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

// const DynamicParallelPage = ({ heroIds }) => {
//     const queryResults = useQueries(
//         heroIds.map((id) => {
//             return {
//                 queryKey: ['super-hero', id],
//                 queryFn: () => fetchSuperHero(id)
//             }
//         })
//     );

//     console.log({ queryResults })
//     return (
//         <div>DynamicParallePage</div>
//     );
// }


// export default DynamicParallelPage

import { useQueries } from "@tanstack/react-query"
import axios from "axios"

const fetchSuperHero = async (heroId) => {
    const response = await axios.get(`http://localhost:4000/superheroes/${heroId}`);
    return response.data;
}

const DynamicParallelPage = ({ heroIds }) => {
    const queryResults = useQueries({
        queries: heroIds.map((id) => ({
            queryKey: ['super-hero', id],
            queryFn: () => fetchSuperHero(id)
        }))
    });

    console.log({ queryResults });

    return (
        <div>DynamicParallelPage</div>
    );
}

export default DynamicParallelPage
