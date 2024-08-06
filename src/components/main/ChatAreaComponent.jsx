import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NavLogo from "../../assets/NavLogo.svg";
import { IoClose } from "react-icons/io5";

const ChatAreaComponent = ({ closeModal }) => {
  const [texts, setTexts] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();
  const chatContentRef = useRef();
  const inputAreaRef = useRef();

  const handleResizeHeight = (e) => {
    ref.current.style.height = "auto";
    ref.current.style.height = `${Math.min(ref.current.scrollHeight, 100)}px`; // 100px는 대략 5줄 높이
    const { value } = e.target;
    setTexts(value);
  };

  const onSubmit = () => {
    if (texts.trim() !== "") {
      setIsLoading(true);
      const newMessages = [...messages, { type: "user", text: texts }];
      setMessages(newMessages);
      ref.current.style.height = "auto"; // 초기화 후 textarea 높이도 초기화
      const fetchData = async () => {
        try {
          const res = await fetch(import.meta.env.VITE_BACKEND_URL + `/chat`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: texts }),
          });
          const data = await res.json().then((result) => {
            setMessages([
              ...newMessages,
              { type: "server", text: result.response },
            ]);
            setIsLoading(false);
          });
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
      setTexts("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
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
        <TopArea>
          <CloseButton onClick={closeModal}>
            <IoClose size={80} />
          </CloseButton>
        </TopArea>
        <ChatArea ref={chatContentRef}>
          <SideArea>
            <SideLogo src={NavLogo} />
            <SideTitle>GPT에게 간단한 질의응답을 할 수 있습니다</SideTitle>
            <SideDesc>Ex) 나 감기 걸렸어.</SideDesc>
          </SideArea>
          {messages.map((message, index) => (
            <ChatMessage key={index} isUser={message.type === "user"}>
              {message.text}
            </ChatMessage>
          ))}
        </ChatArea>
        <InputArea ref={inputAreaRef}>
          <InputTextArea
            ref={ref}
            rows={1}
            onChange={handleResizeHeight}
            onKeyDown={handleKeyPress}
            value={texts}
            disabled={isLoading}
            placeholder="GPT에게 메세지 전송"
          />
        </InputArea>
      </ChatContainer>
    </>
  );
};

export default ChatAreaComponent;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  align-items: center;
  border-radius: 10px;
  /* background-color: #dcf8c6; */
  background-color: white;
  padding-bottom: 5px;
`;

const BackGround = styled.div`
  background-color: #f5f5f5;
  width: 800px;
  border-radius: 10px;
  height: calc(100vh - 530px);
  display: flex;
`;

const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  background-color: white;
  width: 800px;
  height: 600px;
  border-radius: 10px;
  gap: 10px;
  padding-top: 10px;
`;

const SideArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 150px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px;
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

const ChatMessage = styled.div`
  border-radius: 10px;
  word-wrap: break-word;
  width: 80%;
  align-self: flex-end;
  background-color: ${(props) => (props.isUser ? "white" : "#429d6b")};
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  border: 1px solid ${(props) => (props.isUser ? "#75d3a0" : "none")};
  color: ${(props) => (props.isUser ? "black" : "white")};
  padding: 15px;
  font-size: 14px;
  margin: 0 5px 0 5px;
  line-height: 150%;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  height: 50px;
`;
const InputTextArea = styled.textarea`
  width: 95%;
  max-height: 30px;
  border-radius: 20px;
  padding: 5px 20px;
  height: 41px;
  outline: none;
  box-sizing: border-box;
  border: none;
  background-color: #f5f5f5;
  font-size: 17px;
  overflow: hidden; // 스크롤바 숨기기
  resize: none; // 사용자가 수동으로 크기를 조절하지 못하게 함
  color: #5a5a5a;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: none;
  opacity: 80%;
  border-radius: 5px;
  cursor: pointer;
`;

const TopArea = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px;
  justify-content: flex-end;
  height: 45px;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
`;
