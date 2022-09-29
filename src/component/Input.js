function Input({ labelText, value }) {
  // props로 내려받은 값 확인 => 객체 형태임
  // console.log(value)
  // input 속성 부분에 있던 걸 spread operator 로 그냥 풀어준 것

  return (
    <div className="name-input">
      <label>{labelText}</label>
      <input {...value} type="text" />
      {/* <input value={value} onChange={handleInputChange} type="text" /> */}
    </div>
  );
}

export default Input;
