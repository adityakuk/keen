import { useState } from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Avatar, Button, Input } from '@mui/material';
import './css/QuoraHeader.css';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';
import 'react-responsive-modal/styles.css'
import { ExpandMore, PeopleAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from "../firebase"
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const QuoraHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = (<CloseIcon />)
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {

      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      }
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user
      }
      await axios
        .post('/api/questions', body, config)
        .then((res) => {
          alert(res.data.message)
          window.location.href = "/";
        }).catch((e) => {
          console.log(e);
          alert('error in adding question')
        })
    }
  }

  // const handleLogout = () => {
  //   if (window.confirm('Are you sure to logout ?')) {
  //     signOut(auth)
  //       .then(() => {
  //         dispatch(logout());
  //         console.log('Logged out');
  //       }).catch(() => {
  //         console.log('error in logout');
  //       });
  //   }
  // }
  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };
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
        <div className='qHeader__Rem'>
          {/* <span onClick={handleLogout}>
            < Avatar src={user?.photo} /></span> */}
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
        </div>
        <Button variant="contained" color="success" onClick={() => setIsModalOpen(true)} >Add Question</Button>
        {/* <Button mt-3 onClick={() => setIsModalOpen(true)}>Add Question</Button> */}
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
            <Avatar src={user?.photo} className='avatar' />
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
            <button onClick={handleSubmit} type='submit' className='add'>
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}