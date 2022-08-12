## Resumo: 

Aplicação web com as informações do Clima desenvolvida em ReactJs. Foi utilizada a <a href="https://openweathermap.org/api">OpenWeather</a> para obter as informações necessárias. 

## Rodando o projeto:

* git clone https://github.com/pvcapuano/WeatherApp.git
* cd weather-app
* npm i (instala todas as dependências)
* npm start (inicia o projeto)

## Projeto

![previsaodotempo jpg](https://user-images.githubusercontent.com/10540844/184405952-431124f1-280c-4aee-926b-8f85ef5c388c.PNG)
<sub>Visão geral do projeto</sub>

![Capturar](https://user-images.githubusercontent.com/10540844/184405599-871708ab-5a91-41a6-af8d-33757403c50c.JPG)
<sub>Reducer</sub>

## Projeto em produção:

<p>
 <a href="weather-app-pvcapuano.vercel.app" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

* ReactJs
* React-Router-Dom
* React Hooks
* Axios
* Redux
* Redux-Saga
* Styled Components

## Objetivo:

Aprender sobre Redux e estudar mais sobre o consumo de APIs.

## Atividades realizadas:

* O projeto foi separado em 3 componentes: Weather, Card e MinMax. 
* A API foi consumida via axios. 
* No App.js foram criadas as rotas da aplicação, juntamente com o Provider do Redux. 
* O Weather é o component onde renderiza as informações. Dentro dele tem o componente Card, onde lista as informações da API.
* O componente MinMax irá renderizar somente as informações clicadas na tela anterior.  

