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
        // thumnail: "https://img.youtube.com/vi/OVlJOnHYVqA/mqdefault.jpg",
        thumbnail: "https://img.youtube.com/vi/TH-Nbk-HUos/maxres3.jpg",
        url: "https://youtu.be/TH-Nbk-HUos",
        title: "현재의 목과 등 상부의 긴장을 알아보는 요가 ",
        detail:
          "첫 시간입니다. 가볍게 시작해봅니다. 나의 목과 등 상부를 부드럽게 움직여, 움직임의 범위를 확인해봅니다.",
      },
      {
        thumbnail: "https://img.youtube.com/vi/SqjhjyWQ1TA/maxres3.jpg",
        url: "https://youtu.be/",
        title: "목과 등 상부에 쌓인 긴장을 풀어주는 요가",
        detail:
          "이전 수련에서 다들 목에 쌓인 뻐근함 확인하셨나요? 이번 시간에는 목과 등 상부에 쌓인 습관적인 긴장을 풀어주는 요가를 진행합니다. 호흡이 끊기지 않게 이어가봅니다.",
      },
      {
        thumbnail: "https://img.youtube.com/vi/Nvq0uEC3VDM/maxres2.jpg",
        url: "https://youtu.be/Nvq0uEC3VDM",
        title: "굳은 어깨를 자유롭게 하는 요가",
        detail:
          "이제 모든 준비는 끝났어요. 가슴과 등 상부, 목을 동시에 움직여 어깨를 자유롭게 해봅니다. ",
      },
    ],
  },
  {
    id: "spine",
    title: "Spine",
    titleDetail:
      "삶은 소유물이 아니라 순간순간의 있음이다. 영원한 것이 어디 있는가. 모두가 한때일 뿐, 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다.삶은 놀라운 신비요, 아름다움이다.",
    desc: "척추를 풀어주는 요가",
    backgroundColor: "#94ACFE",
    imageUrl: imgMainSpine,
    objectPosition: "40% 20%",
  },
  {
    id: "core",
    title: "Core",
    titleDetail:
      "삶은 소유물이 아니라 순간순간의 있음이다. 영원한 것이 어디 있는가. 모두가 한때일 뿐, 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다.삶은 놀라운 신비요, 아름다움이다.",
    desc: "전신을 강화하는 요가",
    backgroundColor: "#BB94FE",
    imageUrl: imgMainCore,
    objectPosition: "40% 76%",
  },
  {
    id: "hip",
    title: "Hip",
    titleDetail:
      "삶은 소유물이 아니라 순간순간의 있음이다. 영원한 것이 어디 있는가. 모두가 한때일 뿐, 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다.삶은 놀라운 신비요, 아름다움이다.",
    desc: "고관절 주변을 풀어주는 요가",
    backgroundColor: "#5C9EF6",
    imageUrl: imgMainHip,
    objectPosition: "50% 99%",
  },
  {
    id: "legs",
    title: "Legs",
    titleDetail:
      "삶은 소유물이 아니라 순간순간의 있음이다. 영원한 것이 어디 있는가. 모두가 한때일 뿐, 그러나 그 한때를 최선을 다해 최대한으로 살 수 있어야 한다.삶은 놀라운 신비요, 아름다움이다.",
    desc: "햄스프링을 늘리는 요가",
    backgroundColor: "#D4CEED",
    imageUrl: imgMainLegs,
    objectPosition: "60% 60%",
  },
];

export default data;
