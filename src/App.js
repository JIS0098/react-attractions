import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 엔드포인트 및 API 키
    const apiUrl = 'https://apis.data.go.kr/1140100/minAnalsInfoView6/minAddrClsfDocCnt';
    const apiKey = '4cHbWWlGO6rsWOyF%2FPsAWz%2FMgAbJevBhS8jPcAkxn6v9Xz5G4ctkJ7YDT%2FoAwTMpnUVlLodxgFVpleWcj78D3A%3D%3D'; // 본인의 서비스 키로 대체

    // 요청할 파라미터
    const params = {
      serviceKey: apiKey,
      target: '여자',
      dateFrom: '20000101',
      dateTo: '20230915',
    };

    // Axios 요청 설정
    axios.get('https://apis.data.go.kr/1140100/minAnalsInfoView6/minAddrClsfDocCnt?serviceKey=4cHbWWlGO6rsWOyF%252FPsAWz%252FMgAbJevBhS8jPcAkxn6v9Xz5G4ctkJ7YDT%252FoAwTMpnUVlLodxgFVpleWcj78D3A%253D%253D&target=%EC%97%AC%EC%9E%90&dateFrom=20000101&dateTo=20230915').then((결과) => {console.log(결과)})
      .catch((error) => {console.error('Axios 요청 오류:', error);});
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div className="App">
      <h1>API 데이터</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>데이터 로딩 중...</p>
      )}
    </div>
  );
}

export default App;