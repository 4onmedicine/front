import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
      setTexts('');
      ref.current.style.height = 'auto'; // 초기화 후 textarea 높이도 초기화

      // Mock 서버 응답
      setTimeout(() => {
        const mockReply = 'This is a mock reply from the server.';
        setMessages([...newMessages, { type: 'server', text: mockReply }]);
        setIsLoading(false);
      }, 500);
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
    <ChatContainer>
      <ChatArea>
        {/*<ChatTitle>채팅방</ChatTitle>*/}
        <InfoContainer>
          <p>hi</p>
          <ChatContentArea ref={chatContentRef}>
            {messages.map((message, index) => (
              <ChatMessage key={index} isUser={message.type === 'user'}>
                {message.text}
              </ChatMessage>
            ))}
          </ChatContentArea>
        </InfoContainer>
        <InputArea ref={inputAreaRef}>
          <InputTextarea
            ref={ref}
            rows={1}
            onChange={handleResizeHeight}
            onKeyPress={handleKeyPress}
            value={texts}
            disabled={isLoading} // 서버 응답 대기 중에는 비활성화
            placeholder='메세지 챗GPT'
          />
        </InputArea>
      </ChatArea>
    </ChatContainer>
  );
};

export default ChatAreaComponent;

const InfoContainer = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  background-color: white;
`;

const ChatArea = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px); /* 전체 높이에서 적절한 값을 뺍니다 */
  //height: 100%;
  background-color: #dcf8c6;
  /* border: 4px solid #2cad66; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding-top: 4px;
`;

const ChatContentArea = styled.div`
  /* border: 4px dashed #2cad66; */
  border-radius: 20px;
  width: 700px;
  flex-grow: 1;
  overflow-y: auto; /* 내용이 넘칠 경우에만 스크롤 생성 */
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #dcf8c6;
`;

const ChatMessage = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-bottom: 1px solid #ddd;
  word-wrap: break-word;
  width: 300px;
  align-self: flex-end;
  background-color: ${(props) => (props.isUser ? '#e6e6e9' : '#f4f4f6')};
`;

const InputArea = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 700px;
  background-color: #2cad66;
  z-index: 999;
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  overflow: visible;
  position: sticky; /* 부모 요소의 흐름을 벗어나지 않고 고정 위치 */
  bottom: 0;
  left: 50%;
  transform: translateX(-5%);
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column-reverse; /* 위로 확장되도록 설정 */
`;

const InputTextarea = styled.textarea`
  border: none;
  font-family: 'gmarket-medium';
  font-size: 18px;
  width: 690px;
  max-height: 90px; /* 최대 높이를 5줄로 제한 (약 100px) */
  resize: none; /* 사용자가 크기를 조절할 수 없도록 설정 */
  background-color: #2cad66;
  outline: none; /* 포커스 시 테두리 제거 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatInfoDiv = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  flex-shrink: 0;
`;

const ChatTitle = styled.div`
  font-size: 25px;
  font-family: monospace;
`;
