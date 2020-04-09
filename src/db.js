import React from "react";
import imgMainNeck from "./assets/img/main/neck.jpeg";
import imgMainSpine from "./assets/img/main/spine.jpeg";
import imgMainHip from "./assets/img/main/hip.jpeg";
import imgMainCore from "./assets/img/main/core.jpeg";
import imgMainLegs from "./assets/img/main/leg.jpeg";

const data = [
  {
    id: "neck",
    title: <div>Neck & Shoulder</div>,
    desc: "목과 어깨를 풀어주는 요가",
    backgroundColor: "#94ccfe",
    imageUrl: imgMainNeck,
    // image: `url(${imgMainNeck})`,
    playList: [
      {
        url: "https://www.youtube.com/watch?v=TH-Nbk-HUos&t=797s",
        title: "현재의 목과 등 상부의 긴장을 알아보는 요가 ",
        detail:
          "첫 시간입니다. 가볍게 시작해봅니다. 나의 목과 등 상부를 부드럽게 움직여, 움직임의 범위를 확인해봅니다.",
      },
      {
        url: "https://www.youtube.com/watch?v=SqjhjyWQ1TA&t=3s",
        title: "목과 등 상부에 쌓인 긴장을 풀어주는 요가",
        detail:
          "이전 수련에서 다들 목에 쌓인 뻐근함 확인하셨나요? 이번 시간에는 목과 등 상부에 쌓인 습관적인 긴장을 풀어주는 요가를 진행합니다. 호흡이 끊기지 않게 이어가봅니다.",
      },
      {
        url: "https://www.youtube.com/watch?v=Nvq0uEC3VDMA",
        title: "굳은 어깨를 자유롭게 하는 요가",
        detail:
          "이제 모든 준비는 끝났어요. 가슴과 등 상부, 목을 동시에 움직여 어깨를 자유롭게 해봅니다. ",
      },
    ],
  },
  {
    id: "spine",
    title: "Spine",
    desc: "척추를 풀어주는 요가",
    backgroundColor: "#94ACFE",
    backgroundImage: `url(${imgMainSpine})`,
  },
  {
    id: "core",
    title: "Core",
    desc: "전신을 강화하는 요가",
    backgroundColor: "#BB94FE",
    backgroundImage: `url(${imgMainCore})`,
  },
  {
    id: "hip",
    title: "Hip",
    desc: "고관절 주변을 풀어주는 요가",
    backgroundColor: "#5C9EF6",
    backgroundImage: `url(${imgMainHip})`,
  },
  {
    id: "legs",
    title: "Legs",
    desc: "햄스프링을 늘리는 요가",
    backgroundColor: "#D4CEED",
    backgroundImage: `url(${imgMainLegs})`,
  },
  // {
  //   id: "wrists",
  //   title: (
  //     <div>
  //       Hands & <br />
  //       Wrists
  //     </div>
  //   ),
  //   desc: "손목을 풀어주는 요가",
  //   backgroundColor: "#94ccfe",
  //   backgroundImage: "",
  // },
];

export default data;
