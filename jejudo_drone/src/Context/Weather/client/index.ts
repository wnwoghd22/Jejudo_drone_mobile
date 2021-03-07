const weather_key = 'jD8WKBFaFy1n7Cbc435XbqP3H9dsN991K7X1M71E4iR1h3uuxaNGjYTZ%2BAg%2BfROO8qTrnPYq%2FIS0c3vSdenp8g%3D%3D';
const jejudo_drone_pos = {
    nx: 51,
    ny: 32,
}

/*
----------------------초단기 실황 조회 url---------------------------
http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20151201&base_time=0600&nx=55&ny=127

----------------------초단기 예보 조회 url---------------------------
http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20151201&base_time=0630&nx=55&ny=127

----------------------동네 예보 조회 url---------------------------
http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst
?serviceKey=인증키&numOfRows=10&pageNo=1
&base_date=20151021&base_time=0230&nx=55&ny=127

*/

const fetchWeather = () : IWeather => {
    let service = {
        ultra: 'getUltraSrtFcst',
        vilage: 'getVilageFcst',
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    console.log("time " + minutes)
    if(minutes < 30){
        // 30분보다 작으면 한시간 전 값
        hours = hours - 1;
        if(hours < 0){
            // 자정 이전은 전날로 계산
            today.setDate(today.getDate() - 1);
            dd = today.getDate();
            mm = today.getMonth()+1;
            yyyy = today.getFullYear();
            hours = 23;
        }
    }
    let yStr = yyyy.toString();
    let hStr, mStr, dStr;
    if(hours<10) {
        hStr = '0' + hours;
    } else { hStr = hours.toString(); }

    if(mm<10) {
        mStr ='0' + mm;
    } else { mStr = mm.toString(); }

    if(dd<10) {
        dStr = '0' + dd;
    } else { dStr = dd.toString(); }

    let weather_url = `http://apis.data.go.kr/1360000/VilageFcstInfoService/${service.vilage}?serviceKey=${weather_key}&dataType=JSON&numOfRows=10&pageNo=1&base_date=${yStr}${mStr}${dStr}&base_time=1700&nx=${jejudo_drone_pos.nx}&ny=${jejudo_drone_pos.ny}`;

    fetch(weather_url).then(response => {
        console.log(response);
        response.json().then(result => {
            console.log(result);
        })
    })

    return {}
};

export { fetchWeather }