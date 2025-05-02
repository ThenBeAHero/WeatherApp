# Dokumentacioni i API-së për WeatherApp

WeatherApp është një aplikacion i thjeshtë për motin që përdor [OpenWeatherMap API] (https://openweathermap.org) për të marrë të dhëna në kohë reale mbi motin, parashikimet dhe cilësinë e ajrit bazuar në qytetin e zgjedhur nga përdoruesi.

# Autentifikimi

- Një çelës API është i nevojshëm për të përdorur OpenWeatherMap.
- Për të marrë një çelës unik duhet regjistruar këtu: https://home.openweathermap.org/users/sign_up
- Çelësi i API-së shtohet si parametër në kërkesë: `&appid=f160cc3e68db509860c45ece941f8e51`

# Endpoint-et e përdorura

| Funksioni             | Metoda | Endpoint |
|-----------------------|--------|----------|
| Current Weather       | GET    | `https://api.openweathermap.org/data/2.5/weather` |
| 5-day forecast        | GET    | `https://api.openweathermap.org/data/2.5/forecast` |
| Air pollution         | GET    | `https://api.openweathermap.org/data/2.5/air_pollution` |
| Reverse geocoding     | GET    | `http://api.openweathermap.org/geo/1.0/reverse` |
| Direct geo            | GET    | `http://api.openweathermap.org/geo/1.0/direct` |


# Shembull i request
Poshtë është një request GET, ku me shtypjen e SEND na kthen si response 200 OK dhe të dhënat e duhura
```
GET https://api.openweathermap.org/data/2.5/weather
    ?lat=48.8566
    &lon=2.3522
    &units=metric
    &appid=f160cc3e68db509860c45ece941f8e51
```

# Shembull i response
Poshtë kemi response kur kërkojnë të dhënat për motin aktual
```json
{
    "coord": {
        "lon": 2.3494,
        "lat": 48.8558
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 17.94,
        "feels_like": 17.54,
        "temp_min": 16.16,
        "temp_max": 20.43,
        "pressure": 1017,
        "humidity": 67,
        "sea_level": 1017,
        "grnd_level": 1007
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.03,
        "deg": 350
    },
    "clouds": {
        "all": 0
    },
    "dt": 1746141128,
    "sys": {
        "type": 1,
        "id": 6540,
        "country": "FR",
        "sunrise": 1746160098,
        "sunset": 1746212802
    },
    "timezone": 7200,
    "id": 6455259,
    "name": "Paris",
    "cod": 200
}
```

# Si e përdor WeatherApp API-në

- **Kërkimi i qytetit**: përdor endpoint-in `geo/direct` për të marrë koordinatat nga emri i qytetit
- **Moti aktual**: përdor endpoint-in `weather` për të marrë temperaturën, përshkrimin dhe ikonën
- **Parashikimi 5-ditor**: përdor `forecast` për të shfaqur parashikimin 5 ditor dhe çdo 3 orësh
- **Cilësia e ajrit**: përdor `air_pollution` për AQI, PM2.5, SO2, NO2 dhe O3
- **Gjeokodimi i kundërt**: përdor `geo/reverse` për të konvertuar koordinatat në emër qyteti


# Prova me Postman

Një koleksion Postman është gati për të testuar endpoint-et: (./weatherapp-openweathermap.postman_collection.json).
Si dhe linku i Postman: https://app.getpostman.com/join-teaminvite_code=8bd79f7642ebaaddae9a162509d39dc16a8f4f50f36665e08437572c55650c2a&target_code=b70d5e1e6797905bfb00e04fab51a7cc


# Si ta përdorni:
1. Importoni skedarin `.json` në Postman
2. Vendosni vlerën e `API_KEY` në koleksion ose në ambient
3. Dërgoni kërkesa dhe eksploroni përgjigjet nga OpenWeatherMap

