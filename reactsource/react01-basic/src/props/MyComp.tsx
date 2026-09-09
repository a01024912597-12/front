import { useState } from "react";
import TopComp from "../state/TopComp";

const MyComp = () => {
  const [myData, setMyData] = useState({
    frontData: ["HTML5", "CSS3", "JavaScript", "React.js"],
    backData: ["JAVA", "PYTHON", "ORACLE", "Node.js"],
  });

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    alert((e.target as HTMLLIElement).innerHTML);
  };
  return (
    <div>
      {/* {개별 컴포넌트 삽입} */}
      <h2>React - Props</h2>
      <TopComp frontData={myData.frontData} backData={myData.backData} />
      <button>Add Front</button>
      <button>Add Back</button>
    </div>
  );
};

export default MyComp;
