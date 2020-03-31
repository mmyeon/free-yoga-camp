import React from "react";

const data = [
  {
    id: "neck",
    title: <div>Neck & Shoulder</div>,
    disc: "목을 풀어주는 요가",
    backgroundColor: "#94ccfe",
    backgroundImage: "",
    playList: [
      { url: "http://roie", title: "목운동1" },
      { url: "http://roie", title: "목운동1" }
    ]
  },
  {
    id: "lowerback",
    title: "Lower Back",
    disc: "허리를 풀어주는 요가",
    backgroundColor: "#94ACFE",
    backgroundImage: ""
  },
  {
    id: "core",
    title: "Core",
    backgroundColor: "#BB94FE",
    backgroundImage: ""
  },
  {
    id: "hipflexor",
    title: "Hip Flexor",
    backgroundColor: "#5C9EF6",
    backgroundImage: ""
  },
  {
    id: "hampstring",
    title: "Hamstrings",
    backgroundColor: "#D4CEED",
    backgroundImage: ""
  },
  {
    id: "wrists",
    title: (
      <div>
        Hands & <br />
        Wrists
      </div>
    ),
    backgroundColor: "#94ccfe",
    backgroundImage: ""
  }
];

export default data;
