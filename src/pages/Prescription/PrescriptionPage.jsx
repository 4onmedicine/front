import styled from 'styled-components';
import {
  MainContainer,
  MainLogo,
  ContentsContainer,
  LogoDiv,
} from '../main/Mainpage';
import Loading from '../../components/loading/Loading';
import MainLogoSvg from '../../assets/MainLogo.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { presDataArrayState } from '../../atoms/atom';

const PrescriptionPage = () => {
  const [uploadedInfo, setUploadedInfo] = useState(null); // 업로드한 파일 이름
  const [imageUrl, setImageUrl] = useState(''); // 이미지 url
  const [targetImage, setTargetImage] = useState(null); // 이미지 저장 state
  const [buttonDisabled, setButtonDisabled] = useState(true); // 처방전 업로드 버튼 비활성화 여부
  const [loading, setLoading] = useState(false); // 로딩 화면 출력 여부
  const navigate = useNavigate();
  const [medCode, setMedCode] = useState([]); // 이미지 POST 후 받아온 약 보험코드 array
  const setPresData = useSetRecoilState(presDataArrayState); // 보험코드 array POST 후 받아온 약 정보 array를 Recoil State로 저장
  const presDataArray = useRecoilValue(presDataArrayState);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const setFileName = (file) => {
    const { name } = file;
    setUploadedInfo(name);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const targetFile = e.dataTransfer.files[0];
    setFileName(targetFile);
    setTargetImage(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      //console.log(reader.result);
      setImageUrl(reader.result);
    };
    console.log(targetImage);
  };
  useEffect(() => {
    if (!targetImage) {
      setButtonDisabled(true);
      return;
    }
    const formData = new FormData();
    formData.append('image', targetImage);
    // 이미지 업로드되자마자 서버에 보내서 약 코드 받아오기
    const fetchData = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + `/send-image`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          }
        );
        setMedCode(res.json().data); // 백엔드에서 json에 key랑 value 매핑해서 주도록 말하기
      } catch (e) {
        console.log(e);
        return;
      }
    };
    fetchData();
    setButtonDisabled(false);
  }, [targetImage]); // onChange 이벤트로 파일 업로드시 imageUrl State를 업데이트하므로 이를 감지해 서버에 이미지 링크 전달

  const handleSubmit = () => {
    // 서버로 약 코드 전송 후 약 정보 받아와 recoil value로 저장
    console.log(targetImage);
    setLoading(true);
    const reqBody = {
      data: medCode,
    };
    const fetchData = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + `/receive-data`,
          {
            method: 'POST',
            headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
          }
        );
        setPresData(res.json().data.filter((element) => element != null)); // 백엔드에서 json에 key랑 value 매핑해서 주도록 말하기
      } catch (e) {
        console.log(e);
        return;
      } finally {
        for (let element in presDataArray) {
          if (element == null) {
            setPresData(presDataArray.splice(presDataArray.indexOf(null), 1));
          }
        }
      }
    };
    fetchData();
    setLoading(false);
    navigate('/prescription_detail/instruction');
  };

  const handleFileUpload = (e) => {
    const targetFile = e.target.files[0];
    setFileName(targetFile);
    const reader = new FileReader();
    reader.readAsDataURL(targetFile);
    reader.onloadend = () => {
      //console.log(reader.result);
      setImageUrl(reader.result);
      setTargetImage(e.target.files[0]);
    };
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
          </ContentsContainer>
        </MainContainer>
      )}
    </>
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
