import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NavLogo from '../../assets/NavLogo.svg';

const ChatAreaComponent = () => {
  const [texts, setTexts] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();
  const chatContentRef = useRef();
  const inputAreaRef = useRef();

  const handleResizeHeight = (e) => {
    ref.current.style.height = 'auto';
    ref.current.style.height = `${Math.min(ref.current.scrollHeight, 100)}px`; // 100px는 대략 5줄 높이
    const { value } = e.target;
    setTexts(value);
  };

  const onSubmit = () => {
    if (texts.trim() !== '') {
      setIsLoading(true);
      const newMessages = [...messages, { type: 'user', text: texts }];
      setMessages(newMessages);
      ref.current.style.height = 'auto'; // 초기화 후 textarea 높이도 초기화
      const fetchData = async () => {
        try {
          const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/chat`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: texts }),
          });
          const data = await res.json().then((result) => {
            setMessages([...newMessages, { type: 'server', text: result }]);
            setIsLoading(false);
          });
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
      setTexts('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // 엔터키 기본 동작인 줄바꿈을 방지
      e.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  // messages가 업데이트 될 때마다 chatContentRef의 가장 아래로 스크롤 유지
  useEffect(() => {
    if (chatContentRef.current && inputAreaRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ChatContainer>
        <BackGround>
          <SideArea>
            <SideLogo src={NavLogo} />
            <SideTitle>GPT에게 간단한 질의응답을 할 수 있습니다</SideTitle>
            <SideDesc>Ex) 나 감기 걸렸어.</SideDesc>
            <SideCaution>
              답변의 전문성은 보장할 수 없으며, 의약품의 사용은 항상 약사와
              상의하시기 바랍니다.
            </SideCaution>
          </SideArea>
          <ChatArea ref={chatContentRef}>
            {messages.map((message, index) => (
              <ChatMessage key={index} isUser={message.type === 'user'}>
                {message.text}
              </ChatMessage>
            ))}
          </ChatArea>
        </BackGround>
        <InputArea ref={inputAreaRef}>
          <InputTextArea
            ref={ref}
            rows={1}
            onChange={handleResizeHeight}
            onKeyDown={handleKeyPress}
            value={texts}
            disabled={isLoading}
            placeholder='GPT에게 메세지 전송'
          />
        </InputArea>
      </ChatContainer>
    </>
  );
};

export default ChatAreaComponent;

const ChatContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BackGround = styled.div`
  background-color: #f5f5f5;
  width: 800px;
  border-radius: 10px;
  height: calc(100vh - 530px);
  display: flex;
`;

const SideArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: center;
  align-items: center;
`;

const SideTitle = styled.p`
  font-size: 16px;
  align-self: center;
`;
const SideDesc = styled.p`
  font-size: 14px;
  align-self: center;
  text-align: center;
  margin-top: 5px;
`;
const SideLogo = styled.img`
  width: 60px;
  margin: 30px;
`;

const SideCaution = styled.p`
  text-align: left;
  font-size: 12px;
  position: absolute;
  max-width: 25%;
  bottom: 80px;
  color: gray;
`;

const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  background-color: #dcf8c6;
  width: 45%;
  border-radius: 10px;
  gap: 10px;
  padding-top: 10px;
`;

const ChatMessage = styled.div`
  border-radius: 10px;
  word-wrap: break-word;
  width: 80%;
  align-self: flex-end;
  background-color: ${(props) => (props.isUser ? 'white' : '#429d6b')};
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  border: 1px solid ${(props) => (props.isUser ? '#75d3a0' : 'none')};
  color: ${(props) => (props.isUser ? 'black' : 'white')};
  padding: 15px 0 15px 15px;
  font-size: 14px;
  margin: 0 5px 0 5px;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74%;
  border: 1px solid;
  border-radius: 10px;
  height: 40px;
`;
const InputTextArea = styled.textarea`
  resize: none;
  width: 90%;
  max-height: 30px;
  border: none;
  outline: none;
`;
