import { useState } from 'react';
import Modal from 'react-modal'
import { createThanksComment } from '../hooks/thanksCommentsHook';
const { useUser } = require("../hooks/useUser");
const { useWantTalks } = require("../hooks/wantTalksHook");
const { default: Heading } = require("./app/Heading");
const { default: WantTalkCard } = require("./WantTalkCard");

Modal.setAppElement('#root')

function WantTalkCardList() {
  const user = useUser()
  const uid = user ? user.uid : null
  const [wantTalks, isWantTalksLoading, wantTalksError] = useWantTalks(uid) //TODO: 認証できたらそこからIDとる
  const [userName, setUserName] = useState("")
  const [thanksComment, setThanksComment] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleThanksComment = (e) => {
    setThanksComment(e.target.value)
  }

  const closeModal = () => {
    setIsOpen(false)
    setIsSent(false)
    setUserName('')
    setThanksComment('')
    window.location.reload();
  }

  const createPost = () => {
    createThanksComment(uid, 1/* どうやって相手のUIDとる？ */, thanksComment, () => {
      setIsSent(true)
      setUserName('')
      setThanksComment('')
    })
  }

  if (isWantTalksLoading)
    return <p>Loading...</p>

  if (wantTalksError)
    return <p>{wantTalksError}</p>

  return (
    <>
      <Heading text="現在want中の面談"/>
      <div>
        {wantTalks.map(({ id, company, profession, title, description, created_at }) => (
          <WantTalkCard
            key={id}
            id={id}
            company={company}
            profession={profession}
            title={title}
            description={description}
            created_at={created_at}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {isSent ? (
          <p>感謝コメントを送りました</p>
        ) : (
          <>
          <h2>面談相手に感謝を送ろう</h2>
          <p>感謝コメントを送ることで<br />相手のプロフィール画面に表示されます</p>
          <label>面談相手のお名前</label>
          <input name="user_name" value={userName} onChange={handleUserName} />
          <label>感謝コメント</label>
          <input name="thanks_comments" value={thanksComment} onChange={handleThanksComment} />
          <button onClick={createPost}>感謝コメントを送信する</button>
          </>
        )}
      </Modal>
    </>
  )
}

export default WantTalkCardList