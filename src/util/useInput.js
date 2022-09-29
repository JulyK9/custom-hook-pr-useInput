//이 곳에 input custom hook을 만들어 보세요.
//return 해야 하는 값은 배열 형태의 값이어야 합니다.

import { useState } from "react";

// useInput을 쓸때 초기값을 인자로 받아와서 쓰는 형태
function useInput(initialValue) {
  // useState로 값의 상태 관리
  const [value, setValue] = useState(initialValue);

  // 값을 초기화 시키는 기능의 함수도 내장시켜줌
  const reset = () => {
    return setValue(initialValue);
  };

  // value와 onChange 를 binding 해주는게 핵심
  // (내생각) binding 해준 이유는 모듈로 뺀 input에 들어가는 속성애 value와 onChange 가 공통으로 묶여있기 때문

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value)
  };

  // return [value, reset, bind];
  return [reset, bind];
}

export default useInput;
