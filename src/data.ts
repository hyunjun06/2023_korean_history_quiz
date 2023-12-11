const quizData = [
    "연맹체 국가의 정의를 서술하시오.",
    "다음 특징을 가지는 국가는 무엇인지 이름을 쓰시오.",
    "삼국이 왕의 권력이 강해지며 발전하게 된 형태의 국가는?",
    "연맹체 국가와 중앙 집권적 영역 국가의 차이점을 서술하시오.",
    "법흥왕의 업적 세 가지를 서술하시오.",
    "나당 동맹이 체결되게 된 배경을 신라와 당 입장 모두에서 서술하시오.",
    "소수림왕의 업적을 서술하시오.",
    "신문왕의 업적을 서술하시오.",
    "고려 건국 세력의 바탕이 된 골품의 이름을 쓰고, 그 바탕을 서술하시오.",
    "발해가 고구려를 계승하였다는 증거를 두 가지 제시히시오.",
    "고려의 대외 관계 핵심에 있는 국가를 쓰시오. 그리고 교류한 두 가지 분야를 쓰시오.",
    "고려의 독자적 천하관에 대해 서술하시오.",
    "고려의 여러대에 걸쳐 고위 관료를 배출한 사람들을 지칭하는 단어를 쓰고, 권력을 독점한 방식 세 가지를 서술하시오.",
    "공민왕은 이 것을 설치하여 권문세족을 약화하려 하였다.",
    "다음은 신진사대부의 성장과 고려의 몰락에 관한 내용이다. 순서대로 나열하시오.",
    "고려 중기 편찬되어 가장 오래된 역사서라고 표현되는 이 역사서와 저자의 이름을 쓰시오.",
    "사람은 성종 때 정치 무대에 등장하며 선조 때 전부 차지하게 된다.",
    "동인이 북인과 남인으로 갈라지게 된 계기를 서술하시오.",
    "환국의 정의를 서술하시오.",
    "정조의 업적 세 가지를 서술하시오.",
    "정조를 긍정적인 측면과 부정적인 측면에서 평가하시오.",
    "효종이 전개한 북벌 운동의 배경을 서술하시오.",
    "북벌 운동의 의의를 서술하시오.",
    "실학자의 두 가지 학파의 이름을 쓰시오.",
    "유형원, 이익, 정약용 등이 소속된 실학자 학파의 이름을 쓰고, 주장을 서술하시오.",
    "이익이 주장한 주장과 정약용이 주장한 주장에 대해 서술하시오.",
    "조선 전기 공납의 문제점을 두 가지 서술하시오.",
    "대동법과 공납의 차이점을 서술하시오.",
];

const quizDesc = [
    "",
    "왕을 비롯한 여러 가들이 각자의 영역을 다스리며 나라를 통치하는 국가.",
    "",
    "",
    "",
    "",
    "(시험 범위 아닐수도)",
    "(시험 범위 아닐수도)",
    "",
    "",
    "",
    "",
    "(권력을 독점한 방식인지는 잘 모르겠고 그냥 세가지 잘 서술)",
    "이 것을 무엇이며, 이 것의 역할을 두가지 서술하시오.",
    "1. 위화도 회군(이성계), 2. 조선 건국, 3. 요동 정벌 추진(우왕과 최영), 4. 신진사대부 등장, 5. 급진 개혁파와 함께 이성계 개혁 추진, 6. 온건 개혁파 제거, 7. 신흥 무인 세력 등장",
    "",
    "사림이 붕당으로 분열하게 된 두 가지 이유를 제시하시오. 그리고 분열한 사림 중 기성 사림을 지칭하는 단어를 쓰시오.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

const quizAnswer = [
    "왕을 비롯한 여러 가들이 각자의 영역을 다스리며 나라를 통치하는 국가.",
    "연맹체 국가",
    "중앙 집권적 영역 국가",
    "연맹체 국가는 왕을 비롯한 여러 가들이 같이 나라를 통치하는 반면, 중앙 집권적 영역 국가는 왕을 중심으로 5부나 6부의 지배층은 독자성을 잃고 관리가 된 형태이다.",
    "율령 반포, 17관등제, 공복제, 골품제 정비, 불교 공인",
    "당시 신라는 백제의 침략을 받아 위기인 상황임. 고구려와 왜에 모두 지원을 요청하였으나 거절 당함. 따라서 당에 지원을 요청하게되었고, 당은 이를 받아들임. 당 입장에서는 이전에 고구려를 침략하며 어려움을 느껴 외세의 도움이 필요하다 생각함. 따라서 나당 동맹이 체결됨.",
    "태학 설립, 율령 반포, 불교 수용",
    "김흠돌의 반란 사건을 계기로 귀족을 숙청, 국학 설립, 녹읍 폐지, 지방 행정 조직 개편(9주 5소경), 군사 조직 재정비(9서당 10정)",
    "6두품. 6두품은 진골이 모든 권력을 독차지 하는 것을 비판하였고, 개혁을 주장하였다. 하지만 6두품 세력 내에서도 호족과 연합하여 새로운 사회를 건설하자는 움직임이 있었고, 이는 고려의 건국으로 이어졌다.",
    "1. 발해의 건국 주도 세력은 고구려 유민이다. 2. 일본과의 외교 문서에서 고구려라고 칭하였다.",
    "고려 대외 관계 핵심은 송이다. 송과 문화적, 경제적 교류를 하였다.",
    "송, 거란, 금등의 나라에 왕국을 표방하였고, 내부적으로 황제국이라 칭하였다. 왜, 동여진에는 해동천하를 자처하였다. 또한, 왕이 반포하는 글을 조서라 칭하고, 옷은 황색으로 입으며, 수도를 황도로 명명하기도 하였다.",
    "문벌. 1. 과거와 음서제도를 이용하여 고위 관료 독점. 2. 문벌 내의 혼인으로 권력 유지. 3. 왕실과 혼인하여 경쟁에서 우위 차지.",
    "전민변정도감. 1. 불법으로 차지한 토지를 주인에게 돌려줌. 2. 부당한 방법으로 노비가 된 자들을 평민으로 풀어줌.",
    "4, 7, 3, 1, 5, 6, 2",
    "삼국사기, 김부식",
    "1. 척신 정치의 잔재 청산, 2. 이조 전랑의 후보. 서인",
    "정여립 모반 사건 / 정철의 건저의 사건 / 기축옥사.",
    "정국 주도 붕당과 견제하는 붕당이 급격하게 바뀌는 것.",
    "1. 정책 뒷받침 기구 규장각 설치. 2. 초계문신제 시행. 3. 왕의 친위 부대 장용영 설치. 4. 수원화성 건설. 5. 서얼 등용. 6. 통공 정책. 7. 대전통편.",
    "긍정: 붕당 간 경쟁을 완화하여 정국 안정을 찾았다. 부정: 왕과 소수 집단에 권력이 집중되어 세도 정치의 배경이 되었다.",
    "병자호란으로 오랑캐라 여긴 여진족에게 굴욕을 당함. 이는 큰 충격이었으며, 전쟁 후 세자를 비롯한 많은 신하, 백성이 청에 인질로 잡혀갔고, 무리한 조공 요구가 이어졌다.",
    "소중화주의를 바탕으로 오랑캐에게 당한 수치를 씻고, 임진왜란 때 도와준 명의 의리를 지키자.",
    "중농학파, 중상학파",
    "중농학파. 토지 제도의 개혁을 주장. 토지 소유 불균등을 해결하여 농민의 삶이 안정되어야 정국이 안정된다. 농사 짓는 사람이 땅을 소유해야 한다.",
    "이익: 한전론, 토지의 판매를 자유로 하되, 영업전은 판매를 재한. 정약용: 여전론, 1여를 공동 경작하고, 여민의 노동량에 따라 생산품을 분배.",
    "1. 각 지역의 특산품의 생산량이 일정하지 않다. 2. 보관과 운반이 어렵다. 3. 공물을 대신 내고 그에 대한 대가를 받아가는 방납이 나타나며 폐단이 많아졌다.",
    "대동법은 광해군 때 시행되었다. 공납에서 공물을 집집마다 냈다면, 대동법에서는 토지 1결이 기준으로 바뀌었다. 또한, 각 지역의 특산품이 아닌 쌀 12두, 삼베, 무명, 동전 등을 받았다. 이를 통해 공인이 시장에서 필요한 물품을 대량으로 구매하여 상품화폐경제가 활성화 되었다."
];

export { quizData, quizAnswer, quizDesc };