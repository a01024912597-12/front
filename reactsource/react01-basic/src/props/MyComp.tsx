import FrontComp from "./FrontComp";
import BackComp from "./BackComp";

const MyComp = () => {
  const frontData = ["HTML5", "CSS3", "JavaScript", "React.js"];
  const backData: string[] = ["JAVA", "PYTHON", "ORACLE", "Node.js"];

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    alert((e.target as HTMLLIElement).innerHTML);
  };
  return (
    <div>
      {/* {개별 컴포넌트 삽입} */}
      <h2>React - Props</h2>
      <ol>
        <FrontComp frontData={frontData} frTitle={"프론트엔드"} onClick={handleClick} />
        <BackComp backData={backData} baTitle={"백엔드"} />
      </ol>
    </div>
  );
};

export default MyComp;
