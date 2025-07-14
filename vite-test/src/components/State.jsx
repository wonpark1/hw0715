import React, { useState } from "react";

function State() {
  const [likelion, setLikelion] = useState(true);
  return (
    <div>
      {likelion ? <h1>멋사 안녕</h1> : <h1>누구세요</h1>}
      <button onClick={() => setLikelion(!likelion)}>상태변경</button>
    </div>
  );
}
export default State;
