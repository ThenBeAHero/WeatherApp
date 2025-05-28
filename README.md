#  WeatherApp

WeatherApp është një aplikacion i thjeshtë, elegant për motin që shfaq të dhëna të azhurnuara të motit për qytete të ndryshme. Ai përdor OpenWeatherMap API për të marrë të dhëna në kohë reale si temperatura, cilësia e ajrit, oraret e lindjes dhe perëndimit të diellit, dhe parashikimin për 5 ditë dhe çdo 3 orë.

# Funksionalitetet

- Kërko qytetin për të parë motin aktual dhe parashikimin.
- Shfaq temperaturën aktuale dhe ndjesinë termike.
- Shfaq përshkrimin e motit dhe ikonën përkatëse.
- Shfaq erën, lagështinë, shtypjen atmosferike dhe dukshmërinë.
- Shfaq të dhënat e ndotjes së ajrit (PM2.5, SO₂, NO₂, O₃).
- Parashikim çdo 3 orë dhe 5-ditor.
- Mbështet përdorimin e lokacionit aktual.


# Testimi

WeatherApp përfshin testim me [Jest](https://jestjs.io/), duke përfshirë:

- Teste njësie për `module.js` (funksione ndihmëse të kohës dhe cilësisë së ajrit)
- Teste njësie për `api.js` (ndërtimi i URL-ve dhe kërkesat me `fetch`)
- Test integrimi për `app.js` (përpunimi i të dhënave dhe manipulimi i DOM-it)

Për të ekzekutuar testet:
```bash
npm test
```
ose 

```bash
npx jest assests/tests
```

---

# API Dokumentacioni

WeatherApp përdor OpenWeatherMap API.

[Shiko dokumentacionin API ](./API_DOC.md)  
[Koleksioni Postman me requests](./weatherio-openweathermap.postman_collection.json)


# Si të përdorni

1. Merr një çelës API nga [OpenWeather](https://home.openweathermap.org/api_keys)
2. Ruaje çelësin tënd në aplikacion ose vendos si variabël në Postman
3. Ekzekuto aplikacionin lokal ose hap `index.html` në shfletues
4. Kërko për një qytet për të parë motin


# Teknologjitë e përdorura

- HTML + CSS
- JavaScript (Vanilla)
- OpenWeatherMap API
- Jest (për testime)
- Postman (për dokumentim dhe testim API)


# Struktura e projektit

```
assests/
├── css/
│   └── style.css
├── font/
├── images/
├── js/
│   ├── app.js
│   ├── api.js
│   ├── module.js
│   └── route.js
├── tests/
│   ├── module.test.js
│   ├── api.test.js
│   └── integration.test.js
index.html
```

---

# Licenca

Ky projekt është për qëllime mësimore dhe akademike.

