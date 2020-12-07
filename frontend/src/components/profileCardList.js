import { useSearch } from "../hooks/searchHook";
import ProfileCard from "./profileCard";

function ProfileCardList({ word = "" }) {
  const [ profiles, isLoading, error ] = useSearch(word, 'profile')

  if (isLoading)
    return <p>Loading...</p>

  if (error)
    return <p>{error}</p>

  return (
    <div>
      {
        profiles.map(({ id, user, description }) => (
          <ProfileCard user={user} id={id} description={description} key={id} />
        ))
      }
    </div>
  )
}

export default ProfileCardList;