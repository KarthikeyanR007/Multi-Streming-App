import React from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import PollIcon from '@mui/icons-material/Poll';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import './Fooder.css'


const Footer = () => {
  return (
    <div className='fooder'>
      <div className='fooder_icons'>
        <div className='fooder_icon fooder_icon_unmute'>
          <KeyboardVoiceIcon />
          <p>Unmute</p>
        </div>
        <div className='fooder_icon fooder_icon_video'>
          <VideocamIcon />
          <p>Start Video</p>
        </div>
        <div className='fooder_icon fooder_icon_sec'>
          <SecurityIcon />
          <p>Security</p>
        </div>
        <div className='fooder_icon fooder_icon_sec'>
          <PeopleAltIcon />
          <p>Participants</p>
        </div>
        <div className='fooder_icon fooder_icon_chat'>
          <ChatIcon />
          <p>Chat</p>
        </div>
        <div className='fooder_icon fooder_icon_share'>
          <ScreenShareIcon />
          <p>Share Screen</p>
        </div>
        <div className='fooder_icon fooder_icon_poll'>
          <PollIcon />
          <p>Polling</p>
        </div>
        <div className='fooder_icon fooder_icon_record'>
          <RadioButtonCheckedIcon />
          <p>Record</p>
        </div>
        <div className='fooder_icon'>
            <button>Start Live</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
