import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ChatPage = () => {
  const [texts, setTexts] = useState("");
  const [messages, setMessages] = useState([]);
  const ref = useRef();
  const chatContentRef = useRef();

  const handleResizeHeight = (e) => {
    ref.current.style.height = "auto";
    ref.current.style.height = `${Math.min(ref.current.scrollHeight, 100)}px`; // 100px는 대략 5줄 높이
    const { value } = e.target;
    setTexts(value);
  };

  const onSubmit = () => {
    if (texts.trim() !== "") {
      const newMessages = [...messages, { type: "user", text: texts }];
      setMessages(newMessages);
      setTexts("");
      ref.current.style.height = "auto"; // 초기화 후 textarea 높이도 초기화

      // Mock 서버 응답
      setTimeout(() => {
        const mockReply = "This is a mock reply from the server.";
        setMessages([...newMessages, { type: "server", text: mockReply }]);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ChatContainer>
      <ChatArea>
        <ChatContentArea ref={chatContentRef}>
          {messages.map((message, index) => (
            <ChatMessage key={index} isUser={message.type === "user"}>
              {message.text}
            </ChatMessage>
          ))}
        </ChatContentArea>
        <InputArea>
          <InputTextarea
            ref={ref}
            rows={1}
            onChange={handleResizeHeight}
            onKeyPress={handleKeyPress}
            value={texts}
          />
          <InputSubmitBtn onClick={onSubmit}>제출</InputSubmitBtn>
        </InputArea>
      </ChatArea>
    </ChatContainer>
  );
};

export default ChatPage;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  margin: 0 auto;
`;

const ChatArea = styled.div`
  /* border: 2px solid black; */
  width: 800px;
  height: 700px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatContentArea = styled.div`
  border: 2px solid black;
  width: 700px;
  height: 600px;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatMessage = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ddd;
  word-wrap: break-word;
  border: 2px solid black;
  width: 200px;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.isUser ? "#dcf8c6" : "#fff")};
`;

const InputArea = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: fit-content;
  background-color: blue;
  z-index: 999;
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  overflow: visible;
`;

const InputTextarea = styled.textarea`
  border: none;
  width: 660px;
  max-height: 90px; /* 최대 높이를 5줄로 제한 (약 100px) */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 생성 */
  resize: none; /* 사용자가 크기를 조절할 수 없도록 설정 */
`;

const InputSubmitBtn = styled.button`
  width: 30px;
  height: 30px;
`;
