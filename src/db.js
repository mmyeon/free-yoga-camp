import React from "react";
import imgMainNeck from "./assets/img/main/neck.jpeg";
import imgMainSpine from "./assets/img/main/spine.jpeg";
import imgMainHip from "./assets/img/main/hip.jpeg";
import imgMainCore from "./assets/img/main/core.jpeg";
import imgMainLegs from "./assets/img/main/leg.jpeg";

const data = [
  {
    id: "neck",
    title: <span>Neck & Shoulder</span>,
    titleDetail: (
      <span>
        목과 어깨가 뻐근하신가요? <br />
        편안한 어깨와 목을 원하시나요? <br />
        쉬운 움직임부터 시작해 <br />
        긴장된 경추와 흉추를 풀어줍니다.
      </span>
    ),
    desc: "목과 어깨를 풀어주는 요가",
    backgroundColor: "#94ccfe",
    imageUrl: imgMainNeck,
    objectPosition: "5% 50%",
    playList: [
      {
        order: "첫 번째 수련",
        thumbnail: "https://img.youtube.com/vi/TH-Nbk-HUos/maxres3.jpg",
        objectPosition: "70% 0%",
        url: "https://youtu.be/TH-Nbk-HUos",
        title: "목과 등 상부의 긴장을 알아보는 요가 ",
        // detail:
        //   "첫 시간입니다. 가볍게 시작해봅니다. 나의 목과 등 상부를 부드럽게 움직여, 움직임의 범위를 확인해봅니다.",
      },
      {
        order: "두 번째 수련",
        thumbnail: "https://img.youtube.com/vi/SqjhjyWQ1TA/maxres3.jpg",
        url: "https://youtu.be/SqjhjyWQ1TA",
        title: "목과 등 상부에 쌓인 긴장을 풀어주는 요가",
        // detail:
        //   "이전 수련에서 다들 목에 쌓인 뻐근함 확인하셨나요? 이번 시간에는 목과 등 상부에 쌓인 습관적인 긴장을 풀어주는 요가를 진행합니다. 호흡이 끊기지 않게 이어가봅니다.",
      },
      {
        order: "세 번째 수련",
        thumbnail: "https://img.youtube.com/vi/Nvq0uEC3VDM/maxres2.jpg",
        objectPosition: "30% 0%",
        url: "https://youtu.be/Nvq0uEC3VDM",
        title: "굳은 어깨를 자유롭게 하는 요가",
        // detail:
        //   "이제 모든 준비는 끝났어요. 가슴과 등 상부, 목을 동시에 움직여 어깨를 자유롭게 해봅니다. ",
      },
    ],
  },
  {
    id: "spine",
    title: "Spine",
    titleDetail: (
      <span>
        허리가 자주 뻐근하신가요? <br />
        허리로 인해 일상생활에 지장이 있으신가요? <br />
        무너진 척추 정렬을 바로잡고 <br />
        통증없이 척추를 움직여봅니다.
      </span>
    ),
    desc: "척추를 풀어주는 요가",
    backgroundColor: "#94ACFE",
    imageUrl: imgMainSpine,
    objectPosition: "40% 20%",
    playList: [
      {
        order: "첫 번째 수련",
        thumbnail: "https://img.youtube.com/vi/LHKGhhFQ26s/maxres3.jpg",
        objectPosition: "70% 0%",
        url: "https://youtu.be/LHKGhhFQ26s",
        title: "등을 강화하고 상체의 긴장을 푸는 요가 ",
      },
      {
        order: "두 번째 수련",
        thumbnail: "https://img.youtube.com/vi/xd9gl_rkzE0/maxres3.jpg",
        objectPosition: "55% 0%",
        url: "https://youtu.be/xd9gl_rkzE0",
        title: "무너진 척추를 바로세워 자세를 개선하는 요가",
      },
      {
        order: "세 번째 수련",
        thumbnail: "https://img.youtube.com/vi/HNn63Jbm1PY/maxres3.jpg",
        objectPosition: "30% 0%",
        url: "https://youtu.be/HNn63Jbm1PY",
        title: "척추를 길게 늘이고 전신을 움직이는 요가",
      },
    ],
  },
  {
    id: "core",
    title: "Core",
    titleDetail: (
      <span>
        코어근육에 대해 들어보셨나요? <br />
        코어는 몸통을 둘러싼 여러 근육을 말합니다. <br />
        안전하고 유연한 움직임을 위해 <br />
        코어를 자각하고 강화하는 훈련을 진행합니다.
      </span>
    ),
    desc: "전신을 강화하는 요가",
    backgroundColor: "#BB94FE",
    imageUrl: imgMainCore,
    objectPosition: "40% 76%",
    playList: [
      {
        order: "첫 번째 수련",
        thumbnail: "https://img.youtube.com/vi/m7NRc0A-2hU/maxres1.jpg",
        objectPosition: "60% 30%",
        url: "https://youtu.be/m7NRc0A-2hU",
        title: "몸의 중심인 코어를 자각하고 강화하는 요가",
      },
      {
        order: "두 번째 수련",
        thumbnail: "https://img.youtube.com/vi/hyNTK5Couew/maxres1.jpg",
        objectPosition: "30% 0%",
        url: "https://youtu.be/U1ACBEAhkhY",
        title: "엉덩이와 코어 근육을 단련하는 요가",
      },
      {
        order: "세 번째 수련",
        thumbnail: "https://img.youtube.com/vi/rzdtYf1Zwes/maxres2.jpg",
        objectPosition: "35% 0% ",
        url: "https://youtu.be/rzdtYf1Zwes",
        title: "신체 에너지를 높이고 전신을 강화하는 요가",
      },
    ],
  },
  {
    id: "hip",
    title: "Hip",
    titleDetail: (
      <span>
        골반이 틀어진다는 건 어떤 의미일까요?
        <br />
        골반은 척추와 다리를 연결해주기 때문에 <br />
        허리 통증과도 연관이 있습니다.
        <br />
        건강한 요추와 골반을 위해 수련합니다.
      </span>
    ),
    desc: "고관절 주변을 풀어주는 요가",
    backgroundColor: "#5C9EF6",
    imageUrl: imgMainHip,
    objectPosition: "50% 99%",
    playList: [
      {
        order: "첫 번째 수련",
        thumbnail: "https://img.youtube.com/vi/PRTSdgueVzU/maxres2.jpg",
        objectPosition: "80% 0%",
        url: "https://youtu.be/PRTSdgueVzU",
        title: "긴장된 고관절 굴곡근을 풀어주는 요가",
      },
      {
        order: "두 번째 수련",
        thumbnail: "https://img.youtube.com/vi/hyNTK5Couew/maxres2.jpg",
        objectPosition: "60% 0%",
        url: "https://youtu.be/_waBrv-FpcU",
        title: "신체 좌우 균형을 맞추는 요가",
      },
      {
        order: "세 번째 수련",
        thumbnail: "https://img.youtube.com/vi/OOqNIh5R3Z0/maxres1.jpg",
        objectPosition: "50% 0%",
        url: "https://youtu.be/OOqNIh5R3Z0",
        title: "흔들림 속에서 신체 균형감각을 키우는 요가",
      },
    ],
  },
  {
    id: "legs",
    title: "Legs",
    titleDetail: (
      <span>
        신발의 발 뒤꿈치가 고르게 닳아있나요? <br />
        몸의 뿌리인 발의 정렬에 따라
        <br />
        발목, 무릎, 다리의 건강이 결정됩니다.
        <br />
        균형잡힌 방식으로 다리를 수련합니다.
      </span>
    ),
    desc: "햄스트링을 늘리는 요가",
    backgroundColor: "#D4CEED",
    imageUrl: imgMainLegs,
    objectPosition: "60% 60%",
    playList: [
      {
        order: "첫 번째 수련",
        thumbnail: "https://img.youtube.com/vi/kaoZMagv9hs/maxres2.jpg",
        objectPosition: "45% 0%",
        url: "https://youtu.be/kaoZMagv9hs",
        title: "무릎 통증을 완화하는 요가",
      },
      {
        order: "두 번째 수련",
        thumbnail: "https://img.youtube.com/vi/pEb2lokZ2UI/maxres1.jpg",
        objectPosition: "55% 0%",
        url: "https://youtu.be/pEb2lokZ2UI",
        title: "몸의 뿌리가 되는 발과 발목을 풀어주는 요가",
      },
      {
        order: "세 번째 수련",
        thumbnail: "https://img.youtube.com/vi/39TuBoRmqWo/maxres1.jpg",
        objectPosition: "80% 0%",
        url: "https://youtu.be/39TuBoRmqWo",
        title: "햄스트링과 엉덩이를 강화하는 요가",
      },
    ],
  },
];

export default data;
