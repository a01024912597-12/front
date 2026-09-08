import React, { useState } from "react";

const Nickname = () => {
  const [nickname, setNickname] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="">닉네임</label>
        <input type="text" onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">입력된 닉네임</label>
        <input type="text" value={nickname} />
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "숨기기" : "보이기"}</button>
      {isVisible && <p>안녕하세요!!</p>}
    </div>
  );
};

export default Nickname;
