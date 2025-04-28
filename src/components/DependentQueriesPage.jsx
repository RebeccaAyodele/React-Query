import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const DependentQueriesPage = ({ email }) => {
    const {data: user} = useQuery({
        queryKey: ['user', email],
        queryFn: () => fetchUserByEmail(email)
    })
    const channelId = user?.data.channelId

    useQuery({
        queryKey: ['courses', channelId],
        queryFn: () => fetchCoursesByChannelId(channelId),
        enabled: !!channelId
    })
  return (
    <div>DependentQueriesPage</div>
  )
}

export default DependentQueriesPage