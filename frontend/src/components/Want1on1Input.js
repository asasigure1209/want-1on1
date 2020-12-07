import { useState } from "react"
import Modal from 'react-modal'
import { useUser } from "../hooks/useUser"
import { createWantTalk } from "../hooks/wantTalksHook"

Modal.setAppElement('#root')

function Want1on1Input() {
  const user = useUser()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [company, setCompany] = useState("エイチーム")
  const [profession, setProfession] = useState("全職種")
  
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleCompany = (e) => {
    setCompany(e.target.value)
    e.target.checked = true
  }

  const handleProfession = (e) => {
    setProfession(e.target.value)
    e.target.checked = true
  }

  const createPost = () => {
    const uid = user ? user.uid : null
    createWantTalk(uid, title, company, profession, description, () => {
      setIsOpen(false)
      setTitle('')
      setProfession('')
      setDescription('')
      window.location.reload();
    })
  }

  return (
    <>
      <button onClick={openModal}>あなたのお悩みを、一緒に考えてくれる人がいる</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>want面談を作成しよう</h2>
        <p>want面談を作成すると、<br />あなたのお話したい相手がきっと見つかります</p>
        <label>面談のタイトル</label>
        <input name="title" value={title} onChange={handleTitle} />
        <label>面談の詳細</label>
        <input name="description" value={description} onChange={handleDescription} />
        <label>面談を聞いて欲しい人</label>
        <input type="radio" name="company" value="エイチーム" onClick={handleCompany} /><label htmlFor="company">エイチーム</label>
        <input type="radio" name="company" value="ライフ" onClick={handleCompany} /><label htmlFor="company">ライフ</label>
        <input type="radio" name="company" value="ブライズ" onClick={handleCompany} /><label htmlFor="company">ブライズ</label>
        <input type="radio" name="company" value="引越し侍" onClick={handleCompany} /><label htmlFor="company">引越し侍</label>
        <input type="radio" name="profession" value="全職種" onClick={handleProfession} /><label htmlFor="profession">全職種</label>
        <input type="radio" name="profession" value="マーケ" onClick={handleProfession} /><label htmlFor="profession">マーケ</label>
        <input type="radio" name="profession" value="エンジニア" onClick={handleProfession} /><label htmlFor="profession">エンジニア</label>
        <input type="radio" name="profession" value="デザイナ" onClick={handleProfession} /><label htmlFor="profession">デザイナ</label>
        <input type="radio" name="profession" value="営業" onClick={handleProfession} /><label htmlFor="profession">営業</label>
        <button onClick={createPost}>感謝コメントを送信する</button>
      </Modal>
    </>
  )
}

export default Want1on1Input