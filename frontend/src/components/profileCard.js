import { Link } from "react-router-dom";

function ProfileCard({ id, user, description }) {
  return (
    <div>
      <div>
        <img alt={'アイコン'} src={user.image_url} />
        <p>{user.name}</p>
        <p>{user.company}/{user.profession}</p>
        <p>{description}</p>
      </div>
      <Link to={`/profiles/${id}`}>プロフィールを見る</Link>
    </div>
  )
}

export default ProfileCard;
