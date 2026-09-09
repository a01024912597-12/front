import React, { useState } from "react";

export type Form = {
  username: string;
  email: string;
};

const Signup = () => {
  //   const onSubmit = (e) => {
  //     // submit 중지
  //     e.preventDefault();

  //     // formData 모두 가져오기
  //     const formData = new FormData(e.currentTarget);
  //     const username = formData.get("username");
  //     const email = formData.get("email");
  //     console.log(username, email);
  //   };

  const [form, setForm] = useState<Form>({
    username: "",
    email: "",
  });

  const {username, email} = form;


  // input 값이 변경될 때 실행
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // submit
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 확인

    // 서버 보내기
  };

  return (
    <div>
      <h1>Change 이벤트</h1>

      <form action="" method="post" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="이름"
          className="border"
          value={form.username}
          onChange={onChange}
        />

        <input
          type="email"
          name="email"
          placeholder="이메일"
          className="border"
          value={form.email}
          onChange={onChange}
        />

        <button className="mx-1 bg-orange-400 p-3" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Signup;
