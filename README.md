# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Nome do Projeto 
Localizador de dispositivos do IPT

## Nome do Grupo
iPoint

## Integrantes: 
* João Pedro Carazzato
* Rafael Cabral
* Lyorrei Quintão
* Sophia Dias
* Yves Levi
* Cristiane Coutinho

## Descrição
O principal objetivo do desenvolvimento é permitir que qualquer pessoa, funcionária ou não do IPT, consiga localizar e utilizar a IoT, tanto o hardware quanto o software para localizar dispositivos. Portanto, o sistema desenvolvido deve fornecer a localização com o mínimo de erro possível e ser de fácil usabilidade.
Em segundo plano, visando a funcionalidade do equipamento desenvolvido para o IPT, o dispositivo deve ter baixo custo de manutenção e, preferencialmente, sem atualizações recorrentes, visando a diminuição de custos da empresa.

## Como funciona?
O dispositivo Esp que estará acoplado a cada objeto que o IPT deseja localizar mandará periodicamente todos os sinais wifi que ele está próximo. Logo depois, uma inteligência artificial deve rodar para prever, com base na potência dos sinais, em qual prédio, andar e sala o dispositivo está. Dessa forma, nosso frontend consegue mostrar toda essa informação de forma extremamente simples e intuitiva.



## Tecnologias utilizadas

### Frontend
React, Nextjs, Styled Components, Axios, Three Js, React Three Fiber, Chart.js, Framer Motion, React Hook Form, Yup, Prettier, Material UI, entre outras.

### Backend
Node, Express.js, Bcryptjs, Json Web Token, Cookie Parser, Cors, Mongoose, MQTT, Validator, entre outras.

### Código embarcado
Wifi.h, PubSubClient.h, WiFiClientSecure.h, MQTT



## 📁 Estrutura de pastas


|--> documentos<br>
  &emsp;| --> outros <br>
  &emsp;| T1_G4_V5_IoT_Document.pdf<br>
  &emsp;| T1_G2_V5_IoT_Document.docx<br>
  &emsp;| T1_G4_V5_Instruction_Manual.pdf<br>
  &emsp;| T1_G4_V5_Instruction_Manual.docx<br>
|--> src<br>
  &emsp;|--> Backend<br>
  &emsp;|--> Circuito<br>
  &emsp;|--> Frontend<br>
| readme.md<br>

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estão todos os documentos do projeto, incluindo o manual de instruções. Há também uma pasta denominada <b>outros</b> onde estão presentes outros documentos complementares.

- <b>src</b>: todo o código fonte criado para o desenvolvimento do projeto, incluindo os blocos de código do circuito, backend e frontend se aplicáveis.

## 💻 Execução do projeto

Um guia para a execução desse projeto pode ser encontrado no conteúdo do documento "Manual de Instruções", dentro da pasta "documentos".

Se preferir, também é possível acessá-lo a partir do seguinte link:

https://github.com/2022M4T1-Inteli/iPoint/blob/main/documentos/T1_G4_V5_Instruction_Manual.pdf

## Informação importante
Para rodar o frontend e o backend, é necessária a existência de um arquivo .env nas roots de cada pasta. <br/>

Na pasta frontend, deve existir um arquivo com o nome .env.local com as variáveis de ambiente. <br/>

Na pasta backend, deve existir um arquivo com o nome .env também com as váriaveis de ambiente necessárias para a execução do servidor. <br/> <br/>


## 💻 Configuração para Desenvolvimento

### .env Frontend
  
   * NEXT_PUBLIC_APP_URL // variável que armazena a url da aplicação no frontend

### .env Backend
   * CLIENT_URL // variável que armazena a url da aplicação frontend
   * NODE_ENV // variável que armazena o ambiente de desenvolvimento, podendo ser "development" ou "production"
   * DB_URL // variável que seleciona a conexão com o MongoDB.
   * JWT_SECRET // variável que armazena um código que será utilizado para criptografar e descriptografar informação
   * MQTT_USERNAME // variável com o user para conexão com o protocolo MQTT 
   * MQTT_PASSWORD // variável com a senha para conexão com o protocolo MQTT
   * MQTT_HOST // variável que seleciona o host de qual serviço de MQTT o projeto irá utilizar

## Fluxo do projeto
<ol>
    <li>Criação de dados de treinamento (o cliente deve colocar o código embarcado do arquivo WiFi_Scan.ino localizado na pasta esp em um esp e realizar o preenchimento da tabela locationsTrainingData do banco de dados com dados com a resposta (coluna room)</li>
    <li>Depois, a inteligência artificial deve ser treinada com os dados dessa tabela para conseguir prever qual sala cada dispositivo está</li>
    <li>Periodicamente, um esp enviará a informação de todos os sinais que estão próximas para a nossa backend, que irá armazenar no banco de dados</li>
    <li>Após isso, a inteligência artificial predict_room deve rodar para prever qual sala o dispositivo está e armazenar essa informação no banco de dados</li>
    <li>Dessa forma, o nosso front conseguirá mostrar a informação de todos os dispositivos que já mandaram a localização e em qual sala eles estão</li>
</ol>

## Como rodar o projeto
Entrar na pasta backend e rodar o comando npm install e npm start <br/>
Em outro terminal, entrar na pasta frontend e rodar o comando npm install e npm run dev
<br/>
Depois, é só entrar no endereço <a href="http://localhost:3000/login">http://localhost:3000/login</a>.



## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">



<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="#">iPoint</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="#">Inteli, João Pedro Carazzato, Rafael Cabral, Lyorrei Quintão, Sophia Dias, Yves Levi, Cristiane Coutinho</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>


