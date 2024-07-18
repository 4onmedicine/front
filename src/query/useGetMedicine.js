const medicines = [
  {
    itemName: "코드랍정",
    efcyQesitm: "",
    useMethodQesitm: "",
    intrcQesitm: null,
    atpnQesitm:
      "이 약에 과민증 환자, 심한 증상의 간 및 신기능 장애, 심한 증상의 관상 심장 질환, 잔뇨 형성을 수반하는 배뇨(소변을 눔)장애, 고혈압 및 관상동맥(심장동맥)질환, 임부 또는 임신하고 있을 가능성이 있는 여성, 수유부, 2세 이하의 영아(갓난아기), MAO 억제제를 투여 중인 환자, 갈락토오스 불내성, Lapp 유당분해효소 결핍증 또는 포도당-갈락토오스 흡수장애 등의 유전적인 문제가 있는 환자는 이 약을 복용하지 마십시오.이 약을 복용하기 전에 12세 미만의 소아, 천식, 녹내장, 심질환, 부정맥, 당뇨병, 갑상샘기능항진증, 전립선비대로 인한 배뇨장애 환자는 의사 또는 약사와 상의하십시오.복용 후 졸음이 나타날 수 있으므로 운전 및 기계조작 시 주의하십시오.",
    depositMethodQesitm:
      "습기와 빛을 피해 실온에서 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.",
    itemImage:
      "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147427985925200020",
    seQesitm:
      "진정, 졸음, 중추 신경 쇠약, 중추 흥분, 불안, 발한(땀이 남), 가벼운 혈압강하, 시력장애, 동공확대, 헛소리, 환각, 흥분, 근육경련, 경직(굳음), 아테토시스, 간대상 및 강직성 경련, 고열, 호흡마비, 혼수, 순환기 마비, 피부반응, 일시적인 자극통, 작열감(화끈감), 구갈, 구역, 구토, 배뇨(소변을 눔)곤란, 흥분, 급성전신발진고름물집증, 발열, 홍반, 다수의 작은 농포, 허혈성 대장염(급격한 복통, 직장 출혈 등)이 나타나는 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.",
  },
  {
    itemName: "코드렌연질캡슐",
    efcyQesitm:
      "이 약은 감기의 여러 증상(콧물, 코막힘, 재채기, 인후(목구멍)통, 기침, 가래, 오한, 발열, 두통, 관절통, 근육통)의 완화에 사용합니다.",
    useMethodQesitm:
      "만 15세 이상 및 성인은 1회 2캡슐씩, 1일 3회 식후 30분에 복용합니다.",
    intrcQesitm: null,
    atpnQesitm:
      "이 약에 과민증 환자 및 경험자, 다른 해열진통제, 감기약 복용 시 천식 경험자, 만 3개월 미만의 영아, MAO억제제(항우울제, 항정신병제, 감정조절제, 항파킨슨제 등)를 복용하고 있거나 복용을 중단한 후 2주 이내의 사람은 이 약을 복용하지 마십시오.이 약을 복용하기 전에 수두 또는 인플루엔자에 감염되어 있거나 또는 의심되는 영아 및 만 15세 미만의 어린이, 만 3개월 이상 및 만 2세 미만의 영‧유아, 임부 또는 임신하고 있을 가능성이 있는 여성 및 수유부, 고령자, 몸이 약한 사람, 알레르기 체질, 알레르기 증상(발열, 발진, 관절통, 천식, 가려움증 등) 경험자, 간장질환, 신장질환, 심장질환, 갑상선질환, 당뇨병, 고혈압, 위십이지장궤양, 녹내장(눈의 통증, 눈이 침침함 등), 배뇨곤란, 고열, 속쓰림, 위부불쾌감, 위통과 같은 위장문제, 궤양, 출혈문제, 흡연, 천식, 만성 기관지염, 폐기종, 과도한 가래가 동반되는 기침, 1주 이상 지속 또는 재발되는 기침, 만성 기침, 발열·발진이나 지속적인 두통이 동반되는 기침 환자는 의사 또는 약사와 상의하십시오.정해진 용법과 용량을 잘 지키십시오.복용 후 졸음이 나타날 수 있으므로 운전 및 기계조작 시 주의하십시오.",
    depositMethodQesitm:
      "습기와 빛을 피해 실온에서 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.",
    itemImage:
      "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147446594586900058",
    seQesitm:
      "발진, 발적, 가려움, 구역, 구토, 식욕부진, 변비, 부종, 배뇨곤란, 목마름(지속적이거나 심한), 어지러움, 불안, 떨림, 불면, 쇽 증상(복용 후 바로 두드러기, 부종, 가슴답답함 등과 함께 안색이 창백하고, 손발이 차고, 식은땀, 숨쉬기 곤란함), 피부점막안증후군(스티븐스-존슨증후군), 독성표피괴사용해(고열을 동반하고, 발진·발적, 화상과 같이 물집이 생기는 심한 증상이 전신피부, 입 또는 눈점막에 나타남), 급성전신발진고름물집증, 천식, 전신의 나른함, 황달, 간질성폐렴(기침을 동반하고, 숨이 차고, 호흡곤란, 발열), 허혈성 대장염(급격한 복통, 직장 출혈) 등이 나타나는 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.",
  },
  {
    itemName: "코드에이연질캡슐",
    efcyQesitm:
      "이 약은 육체피로, 임신·수유기, 병중·병후(병을 앓는 동안이나 회복 후)의 체력저하 시, 노년기의 비타민 A, B1, B2의 보급, 눈의 건조감의 완화, 야맹증, 각기, 눈의 피로, 신경통, 근육통, 관절통(요통, 어깨결림 등), 구각염(입꼬리염), 구순염(입술염), 구내염(입안염), 설염(혀염), 습진, 피부염의 완화에 사용합니다.",
    useMethodQesitm: "만 8세 이상 및 성인은 1회 2캡슐씩, 1일 2회 복용합니다.",
    intrcQesitm: null,
    atpnQesitm:
      "이 약에 과민증 환자, 3개월 미만의 젖먹이, 콩 또는 땅콩에 과민증 환자, 대두유에 알레르기 반응 경험자는 이 약을 복용하지 마십시오.이 약을 복용하기 전에 1세 미만의 젖먹이, 임부 및 임신하고 있을 가능성이 있는 여성, 수유부, 미숙아, 유아, 고지단백혈증, 당뇨성고지질혈증 및 췌장(이자)염 등 지방대사 이상 환자 또는 지질성 유제를 신중히 투여해야 하는 환자는 의사 또는 약사와 상의하십시오.정해진 용법과 용량을 잘 지키십시오.어린이에게 투여할 경우 보호자의 지도·감독하에 투여하십시오.요를 황색으로 변하게 하여 임상검사치에 영향을 줄 수 있습니다.1개월 정도 복용하여도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오. ",
    depositMethodQesitm:
      "습기와 빛을 피해 실온에서 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.",
    itemImage:
      "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1NvwvvpEt4s",
    seQesitm:
      "구역, 구토, 가려움, 건조하고 거친 피부, 통증성 관절부종(부기), 묽은 변, 변비, 설사, 식욕부진, 홍반(붉은 반점), 두드러기, 습진, 발진, 반구진성 발진, 가려움, 부종(부기), 수분저류(고임)(신부전 또는 심부전 환자) 등이 나타날 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.",
  },
  {
    itemName: "코드비타연질캡슐",
    efcyQesitm:
      "이 약은 육체피로, 임신 · 수유기, 병중 · 병후(병을 앓는 동안이나 회복 후)의 체력저하 시, 노년기의 비타민 A, B1, B2의 보급과 눈의 건조감의 완화, 야맹증(밤에 잘 못보는 증상), 신경통, 근육통, 관절통(요통, 어깨결림 등), 구각염(입꼬리염), 구순염(입술염), 구내염(입안염), 설염(혀염), 습진, 피부염의 완화 및 각기, 눈의피로에 사용합니다.",
    useMethodQesitm: "만 8세 이상 및 성인은 1일 2회, 1회 2캡슐 복용합니다.",
    intrcQesitm: null,
    atpnQesitm:
      "이 약에 과민증 환자, 만 3개월 미만의 젖먹이,  대두유 과민증 또는 알레르기 반응 경험자, 콩 또는 땅콩 과민증 환자는 이 약을 복용하지 마십시오.이 약을 복용하기 전에  만 1세 미만의 젖먹이, 임부 및 임신하고 있을 가능성이 있는 여성, 수유부, 미숙아, 유아, 고지단백혈증, 당뇨병성고지질혈증 및 췌장염 등 지방대사 이상 환자 또는 지질성 유제를 신중히 투여해야 하는 환자, 적색 40호 과민증 또는 알레르기 반응 경험자는 의사 또는 약사와 상의하십시오.정해진 용법과 용량을 잘 지키십시오.어린이에게 투여할 경우 보호자의 지도 감독 하에 투여하십시오.이 약에 함유된 비타민 A는 정상적인 식이에서 충분히 공급되므로 보조요법의 용량은 1일 5,000 IU 이상을 넘지 않도록 주의하십시오.요를 황색으로 변하게 하여 임상검사치에 영향을 줄 수 있습니다.",
    depositMethodQesitm:
      "습기와 빛을 피해 실온에서 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.",
    itemImage: "",
    seQesitm:
      "구역, 구토, 가려움, 건조하고 거친 피부, 통증성 관절부종(부기), 묽은 변, 설사, 변비, 식욕부진, 홍반(붉은 반점), 두드러기, 습진, 발진, 반구진성 발진, 가려움, 부종(부기), 부종(부기)·수분저류(고임)(신부전 또는 심부전 환자)가 나타나거나, 1개월 정도 복용하여도 증상의 개선이 없을 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.",
  },
];

export async function fetchMedicine(query) {
  await new Promise((r) => setTimeout(r, 2_000));
  return medicines.filter((medicine) =>
    medicine.itemName.toLowerCase().includes(query.toLowerCase())
  );
}
