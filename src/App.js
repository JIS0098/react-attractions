import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

    axios.get('http://api.kcisa.kr/openapi/API_CNV_060/request?serviceKey=b8ae0fc1-fe71-4c80-a5b6-111475a0a12b&numOfRows=10&pageNo=1').then((결과) => {console.log(결과)})
    .catch((error) => {console.error('Axios 요청 오류:', error);});


  return (
    <div className="App">
      <div className='header'>
      <h1>방방곡곡 여행지</h1>
      <input type='text' placeholder='원하는 지역을 검색해 주세요'/>
      <button>검색</button>
      </div>
      <h4>추천 여행지</h4>
    </div>
  );
}

export default App;