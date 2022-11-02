import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutlined,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import './css/Post.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import ReactTimeAgo from 'react-time-ago'

export const LastSeen = ({ date }) => {
    console.log(date)
    return (
        <div>
            <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
        </div>
    );
}

export const Post = ({post}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = (<CloseIcon />)


    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h4> User Name</h4>
                <small><LastSeen date={post?.createdAt} /></small>
            </div>
            <div className='post__body'>
                <div className='post__question'>
                    <p> {post?.questionName}</p>
                    <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>Answer</button>
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
                        <div className='modal__question'>
                            <h1>{post?.questionName}</h1>
                            <p> Asked by {''} <span className='name' >Username</span> on
                                <span className='name'>{new Date(post?.createAt).toLocaleString()}</span></p>
                        </div>
                        <div className='modal__answer'>
                            <ReactQuill placeholder='Enter your answer ' />
                        </div>
                        <div className='modal__button'>
                            <button className='cancle' onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button type='submit' className='add' >
                                Add Question
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />

                <div className='post__footerLeft'>
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
            <p style={{
                color: 'rgba(0,0,0,0.5)',
                fontSize: '12px',
                fontWeight: 'bold',
                margin: "10px",


            }}>
                {post?.allAnswers}
            </p>
            <div style={{
                margin: "15px, 0px, 0px, 0px", // top, bottom, left, right
                padding: '5px, 0px, 0px, 20px',
                borderTop: '1px solid lightgray',
            }} className='post__answer'>
                <div style={{
                    display: 'flax',
                    flexDirection: 'column',
                    width: '100%',
                    padding: '10px 5px',
                    borderTop: '1px solid lightgray',

                }} className='post-answer-container'>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#888",
                        }}

                        className='post-answered'>
                        <Avatar />
                        <div style={{
                            margin: "0px 10px",
                        }}
                            className='post-info'>
                            <p>
                                Username
                            </p>
                            <span>Timestamp</span>
                        </div>
                    </div>
                    <div className='post-answer'>This is answer</div>
                </div>
            </div>
        </div>
    )
}
export default Post;