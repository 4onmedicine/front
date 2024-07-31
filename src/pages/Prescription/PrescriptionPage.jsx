import styled from 'styled-components';
import {
  MainContainer,
  MainLogo,
  ContentsContainer,
  LogoDiv,
} from '../main/Mainpage';
import MainLogoSvg from '../../assets/MainLogo.svg';
import { useState } from 'react';

const PrescriptionPage = () => {
  const [uploadedInfo, setUploadedInfo] = useState(null); // 업로드한 파일 이름
  const [imageUrl, setImageUrl] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const setFileName = (file) => {
    const { name } = file;
    setUploadedInfo(name);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    //setIsActive(false);
    const targetFile = e.dataTransfer.files[0];
    setFileName(targetFile);
    const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      console.log(reader.result);
      setImageUrl(reader.result);
      setButtonDisabled(false);
    };
  };
  const handleSubmit = () => {
    // 서버로 파일 전송
  };

  const handleFileUpload = (e) => {
    const targetFile = e.target.files[0];
    setFileName(targetFile);
    const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      console.log(reader.result);
      setImageUrl(reader.result);
      setButtonDisabled(false);
    };
  };

  return (
    <MainContainer>
      <ContentsContainer>
        <LogoDiv>
          <MainLogo src={MainLogoSvg} />
        </LogoDiv>
        <UploadLabel
          //onDragEnter={handleDragStart}
          onDragOver={handleDragOver}
          //onDragLeave={handleDragEnd}
          onDrop={handleDrop}
        >
          <UploadInput
            type='file'
            accept='image/*'
            onChange={handleFileUpload}
          />
          {uploadedInfo ? (
            <>
              <PrevImage src={imageUrl} />
              <MiniTitle>{uploadedInfo}</MiniTitle>
            </>
          ) : (
            <>
              <MiniTitle>클릭 혹은 파일을 이곳에 드롭하세요.</MiniTitle>
              <MiniDesc>이미지 최소 사이즈: 100*100px</MiniDesc>
            </>
          )}
        </UploadLabel>
        <UploadButton disabled={buttonDisabled} onClick={handleSubmit}>
          처방전 업로드
        </UploadButton>
      </ContentsContainer>
    </MainContainer>
  );
};

export default PrescriptionPage;

const UploadInput = styled.input`
  opacity: 0;
`;

const UploadLabel = styled.label`
  width: 300px;
  height: 150px;
  background-color: #fff;
  border-radius: 5px;
  border: 4px dashed #eee;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #111;
    background-color: #efeef3;
  }
`;
const MiniTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 10px;
`;

const MiniDesc = styled.p`
  margin: 0;
  font-size: 14px;
`;

const UploadButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: 1000;
  color: white;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  &:disabled {
    background-color: #e9e9e9;
  }
`;

const PrevImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
