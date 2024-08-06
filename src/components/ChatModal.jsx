import styled from 'styled-components';
import ChatAreaComponent from './main/ChatAreaComponent';

const ChatModal = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContainer>
      <ChatAreaComponent
        onClick={(e) => e.stopPropagation()}
        closeModal={closeModal}
      ></ChatAreaComponent>
    </ModalContainer>
  );
};

export default ChatModal;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;
