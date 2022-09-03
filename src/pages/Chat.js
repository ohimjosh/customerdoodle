import { ChatEngine } from 'react-chat-engine';


import ChatFeed from '/Volumes/Seagate/Github/customerdoodle/src/components/ChatFeed.jsx';

//
// /Volumes/Seagate/Github/customerdoodle/src/components/ChatFeed.jsx


import '/Volumes/Seagate/Github/customerdoodle/src/Chat.css';

const projectID = '9be14093-c997-4465-843b-54d432533f40';

export const Chat = () => {
  

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      // userName={localStorage.getItem('username')}
      // userSecret={localStorage.getItem('password')}
      userName='farnazinnia'
      userSecret='farnaz'
      // userName='farnazinnia'
      // userSecret='farnaz'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

