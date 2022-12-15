# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# Nome do Projeto 

## Nome do Grupo

## Integrantes: 
* João Pedro Carazzato
* Rafael Cabral
* Lyorrei Quintão
* Sophia Dias
* Yves Levi
* Cristiane Coutinho

## Descrição
Como principal objetivo do desenvolvimento é permitir que qualquer pessoa, funcionária ou não do IPT, consiga localizar e utilizar a IoT, tanto o hardware quanto o software. Portanto, o localizador desenvolvido aos equipamentos do IPT devem fornecer a localização com o mínimo de erro possível, ser acessível para pessoas com deficiência visual ou auditiva e de fácil usabilidade.
Em segundo plano, visando a funcionalidade do equipamento desenvolvido para o IPT, o dispositivo deve ter baixo custo de manutenção e, preferencialmente, sem atualizações necessárias, visando a diminuição de custos da empresa.

## 🛠 Estrutura de pastas

**|-->** documentos<br>
**|-->** src<br>
**|-->** readme.md<br>
**|-->** .gitignore<br>


Dentre os arquivos presentes na raiz do projeto, definem-se:

**readme.md**: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

**.gitignore**: arquivo que faz com que o github ignore o que não precisa.

**documentos**: aqui estarão o IoTDoc e Manual de Instruções do projeto.

**src**: nesta pasta encontra-se todo o código fonte dos embarcados, front-end e back-end.

***.env***: módulo de dependência zero que carrega variáveis de ambiente de um .env arquivo em process.env.

## 💻 Configuração para Desenvolvimento

### .env Frontend
   * JWT_SECRET // variável que armazena um web token para a aplicação
   * NEXT_PUBLIC_APP_URL // variável que armazena a url local da aplicação no frontend

### .env Backend
   * CLIENT_URL // variável que armazena a url local da aplicação no backend
   * NODE_ENV // variável que armazena o ambiente de desenvolvimento, podendo ser "development" ou "production"
   * DB_URL // variável que seleciona a conexão com o MongoDB.
   * JWT_SECRET // variável que armazena um web token para a aplicação
   * MQTT_USERNAME // variável com o user para conexão com o protocolo MQTT 
   * MQTT_PASSWORD // variável com a senha para conexão com o protocolo MQTT
   * MQTT_HOST // variável que seleciona o host de qual serviço de MQTT o projeto irá utilizar

## 🗃 Histórico de lançamentos

A cada atualização os detalhes devem ser lançados aqui.

* 0.0.1 - 19/10/2022
    * Descrição
* 0.0.2 - 19/11/2022
    * Atualizações no README e Documentação da Sprint 3 adicionadas.
* 0.0.3 - 14/12/2022
    * Inserção de novo arquivo na raíz do projeto.

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Spidus/Teste_Final_1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.yggbrasil.com.br/vr">INTELI, VICTOR BRUNO ALEXANDER ROSETTI DE QUIROZ</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. 
