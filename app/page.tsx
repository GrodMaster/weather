async function getData() {
  // const res = await fetch('https://api.weather.yandex.ru/v2/informers?&X-Yandex-API-Key=9e13767e-c4fa-4e22-8203-3dfb4942eeb3');
const key = '9e13767e-c4fa-4e22-8203-3dfb4942eeb3';
let url = 'https://api.weather.yandex.ru/v2/forecast?lat=51.442398&lon=36.11241&extra=false&limit=1'
 const res = await fetch(url,{
    headers:{ 'X-Yandex-API-Key': key}
 })
  return res.json();
}



 
export default async function Home() {

  const data = await getData();
  // console.log(data);
  let pogoda;
  switch(data.fact.condition){
    case 'clear':
       pogoda = 'Ясно' 
       break;
    case 'partly-cloudy':
      pogoda = 'Малооблачно'
      break;
    case 'cloudy':
      pogoda = 'Облачно с прояснениями'
      break;
    case 'overcast':
      pogoda = 'Пасмурно'
       break;
    case 'drizzle':
       pogoda = 'Морось'
       break;
    case 'light-rain':
      pogoda = 'Небольшой дождь'
      break;

    case 'rain':
      pogoda = 'Дождь'
      break;

    case 'moderate-rain':
      pogoda = 'Умеренно сильный дождь'
      break;

    case 'heavy-rain':
      pogoda = 'Сильный дождь'
      break;

    case 'continuous-heavy-rain':
      pogoda = 'Длительный сильный дождь'
      break;

    case 'showers':
      pogoda = 'Ливень'
      break;

    case 'wet-snow':
      pogoda = 'Дождь со снегом'
      break;

    case 'light-snow':
      pogoda = 'Небольшой снег'
      break;

    case 'snow':
      pogoda = 'Снег'
      break;

    case 'snow-showers':
      pogoda = 'Снегопад'
      break;

    case 'hail':
      pogoda = 'Град'
      break;
    
    case 'thunderstorm':
      pogoda = 'Гроза'
      break;

    case 'thunderstorm-with-rain':
      pogoda = 'Дождь с грозой'
      break;

    case 'thunderstorm-with-hail':
      pogoda = 'Гроза с градом'
      break;
    }

    let naprovlenie;
    switch (data.fact.wind_dir) {
    case 'n':
      naprovlenie = 'Северное'
      break;
    case 'ne':
      naprovlenie = 'Северо-восточное'
      break;
    case 'nw':
      naprovlenie = 'Северо-заподное'
      break;
    case 'e':
      naprovlenie = 'Восточное'
      break;
    case 'se':
      naprovlenie = 'Юго-Восточное'
      break;
    case 's':
      naprovlenie = 'Южное'
      break;
    case 'sw':
      naprovlenie = 'Юго-заподное'
      break;
    case 'w':
      naprovlenie = 'Заподное'
      break;
    case 'c':
      naprovlenie = 'Штиль'
      break;
    }

    function setCoordinates(number: number) : string {
    
      return switch(number)
      {
   1:'',
   _:''
      }
    }


  return <main>
    <h3>{data.geo_object.province.name}</h3>
    <div className="column">
      <select id="id" onChange={()=>{
        
      }}>
        <option value={}>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <div>Температура: <b>{data.fact.temp}</b></div>
      <div>Ощущается: <b>{data.fact.feels_like}</b></div>
      <div>Погода: <b>{pogoda}</b></div>
      <div>Скорость ветра в секунду: <b>{data.fact.wind_speed}</b></div>
      <div>Направление ветра: <b>{naprovlenie}</b></div>
      <div>Давление в мм. рт. ст.: <b>{data.fact.pressure_mm}</b></div>
    </div>
  </main>;
}