import AddHomeIcon from '@mui/icons-material/AddHome';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Avatar, Button, Input } from '@mui/material';
import './css/QuoraHeader.css';
import Modal from 'react-responsive-modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css'
import { ExpandMore, PeopleAltOutlined } from '@mui/icons-material';
import axios from 'axios';





export const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = (<CloseIcon />)

  const handleSubmit = async() => {
    if(question !== ""){

      const config = {
        headers: {
          "Content-Type":"application/json",
        }
      }
      const body = {
        questionName: question,
        questionUrl: inputUrl,
      }
      await axios
      .post('/api/questions', body, config)
      .then((res) => {
        console.log(res.data)
        alert(res.data.message)
      }).catch((e) =>{
        console.log(e);
        alert('error in adding question')
      })
    }
  }

  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img src='https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif'
            alt='logo' />
        </div>
        <div className='qHeader__icons'>
          <div className='qHeader__icon'>
            <AddHomeIcon />
          </div>
          <div className='qHeader__icon'>
            <FeaturedPlayListIcon />
          </div>
          <div className='qHeader__icon'>
            <AssignmentTurnedInIcon />
          </div>
          <div className='qHeader__icon'>
            <PeopleAltIcon />
          </div>
          <div className='qHeader__icon'>
            <CircleNotificationsIcon />
          </div>
        </div>
        <div className='qHeader__input'>
          <ManageSearchIcon />
          <input type="text" placeholder='Search Question' />
        </div>
        <div className='qHeader_Rem'>
          < Avatar />
        </div>
        <Button variant="contained" color="success" onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className='modal__title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className='modal__info'>
            <Avatar className='avatar' />
            <div className='modal__scope'>
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className='modal__Field'>
            <Input 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            type='text' 
            placeholder='Start your question With What, How, Why, etc. ' />
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <input type='text'
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                placeholder='Optional: include a link that gives context' />
              {
                inputUrl !== "" && <img 
                style={{
                  height: "40vh",
                  objectFit: "contain",
                }}
                src={inputUrl}
                  alt='Desplayimage' />
              }

            </div>
          </div>
          <div className='modal__buttons'>
            <button className='cancle' onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleSubmit} type='submit' className='add' >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}