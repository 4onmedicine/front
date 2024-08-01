import styled from 'styled-components';
import Loading from '../loading/Loading';
import { useState } from 'react';

const PrescriptionComponent = () => {
  const [uploadedInfo, setUploadedInfo] = useState(null); // 업로드한 파일 이름
  const [imageUrl, setImageUrl] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // navigate();
    }, 3000);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
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
                <MiniDesc>{uploadedInfo}</MiniDesc>
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
        </>
      )}
    </>
  );
};

export default PrescriptionComponent;

const UploadInput = styled.input`
  opacity: 0;
`;

const UploadLabel = styled.label`
  width: 100px;
  height: 100px;
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
  margin: 30px 0 30px 0;
`;
const MiniTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
`;

const MiniDesc = styled.p`
  margin: 0;
  font-size: 14px;
  margin: 10px;
`;

const UploadButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: 1000;
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.COLOR.LIGHTGREEN};
  }
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  &:disabled {
    background-color: #e9e9e9;
  }
  cursor: pointer;
`;

const PrevImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
