# README.md

# 4온 약 프로젝트

### 의약품 간편 검색 서비스

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled.png)

### 배포 주소: [https://4onmedicine.kro.kr](https://4onmedicine.kro.kr)

_개발 기간: 2024.07.15 ~ 2024.08.05_

---

## 프로젝트 소개

- 4온 약 어때? 프로젝트는 각종 의약품들의 정보를 간편하게 찾아볼 수 있는 웹 서비스입니다.
- 의약품의 사진, 성분, 효능, 사용법, 주의사항, 다른 성분과의 상호작용 및 부작용, 보관방법에 대한 정보를 제공합니다.
- 처방전 이미지 검색을 통해 해당하는 의약품들의 정보를 한 번에 확인할 수 있습니다.
- GPT에게 간단한 질문을 통해 정보를 얻을 수 있습니다.

## 프로젝트 배경

- 의약품 관련 정보를 찾기 어렵고 과정이 복잡해 시간 소요가 많음.
- 처방전에 많은 정보가 표시되지 않아 얻을 수 있는 정보가 한정적임.

## 개발 환경

- 사용 프레임워크: ReactJS, Vite
- 버전 관리: Github
- 협업 툴: Notion, Discord
- 배포 환경: GCP(Google Cloud Platform) VM

## 페이지별 기능

### 1. 의약품 검색

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%201.png)

초기 화면 검색창에서 약품명을 입력하면 자동으로 검색결과가 담긴 드롭다운이 생성됩니다.

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%202.png)

원하는 의약품에 커서를 두고 클릭 또는 엔터키 입력 시 세부 정보 창으로 이동합니다.

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%203.png)

### 2. 처방전 이미지 검색

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%204.png)

Drag&Drop 또는 직접 업로드 방식으로 처방전 이미지를 업로드할 수 있습니다.

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%205.png)

이미지 로딩이 완료된 후 “처방전 업로드” 버튼이 활성화됩니다. 의약품 정보 인식에 성공하였다면 버튼 클릭 시 해당하는 정보가 담긴 페이지로 이동합니다.

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%206.png)

### 3. GPT와 대화

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%207.png)

화면 우하단에 위치한 토글 버튼 클릭 시 채팅 창이 활성화됩니다. 간단한 질의응답이 가능합니다.

![Untitled](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/Untitled%208.png)

## 시스템 아키텍처

![4온약시스템아키텍처.png](README%20md%207e5e9b5a220a4a02ab724d3f41a5b9c9/4%25E1%2584%258B%25E1%2585%25A9%25E1%2586%25AB%25E1%2584%258B%25E1%2585%25A3%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25B5%25E1%2584%2589%25E1%2585%25B3%25E1%2584%2590%25E1%2585%25A6%25E1%2586%25B7%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25B5%25E1%2584%2590%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%258E%25E1%2585%25A5.png)

## 향후 계획

- 처방전 양식을 보급해 처방전 이미지 인식률 향상을 기대해볼 수 있음
- 수익 모델 창출을 위한 전문 상담 서비스 기능, 로그인 기능을 추가
- 의약품 및 건강기능식품에 대한 정보 및 의견을 나눌 수 있는 커뮤니티 기능 추가

## 팀원 구성

|                        [한태동](https://github.com/HANTAEDONG)                        |                         [한지우](https://github.com/huzan2)                          |                         [최지훈](https://github.com/cjh-19)                          |                        [이정현](https://github.com/LEEJH1029)                        |                       [장원준](https://github.com/jangwonjun)                        |
| :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| <img width = "300" src ="https://avatars.githubusercontent.com/u/132195232?s=96&v=4"> | <img width = "300" src ="https://avatars.githubusercontent.com/u/95648841?s=96&v=4"> | <img width = "300" src ="https://avatars.githubusercontent.com/u/66457014?s=96&v=4"> | <img width = "300" src ="https://avatars.githubusercontent.com/u/67615226?s=96&v=4"> | <img width = "300" src ="https://avatars.githubusercontent.com/u/41234293?s=96&v=4"> |
|                                  Frontend Developer                                   |                                  Frontend Developer                                  |                               Backend Developer, CI/CD                               |                                  Backend Developer                                   |                                  Backend Developer                                   |
