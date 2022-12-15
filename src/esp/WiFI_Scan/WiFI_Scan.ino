// Definindo acoplamentos e incluindo bibliotecas

#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include <string>
#define BUZZER 35
#define BUTTOM_SCAN 38
#define redLED 16
#define greenLED 15
#define TOPIC_SUBSCRIBE ""

// Definindo login da rede WiFi e nosso servidor MQTT
WiFiClientSecure wifiClient;
PubSubClient mqttClient(wifiClient);
const char* ssid = "Inteli-COLLEGE"; // Nome WiFi
const char* password = "QazWsx@123"; // Senha WiFi
char* mqttServer = "31632e1a776b4e068513a22883b3537b.s1.eu.hivemq.cloud"; // Servidor MQTT
int mqttPort = 8883; // Porta padrao do servidor MQTT

void callback(char* topic, byte* message, unsigned int length);

// Configurando o MQTT
void setupMQTT() {
  
  wifiClient.setInsecure(); // Definindo a conexao como uma conexao sem seguranca
  mqttClient.setServer(mqttServer, mqttPort); // Definindo nosso servidor no Cliente MQTT
  mqttClient.setCallback(callback);
}


// Funcao de reconectar na rede caso o servidor MQTT seja desconectado
void reconnect() {
  digitalWrite(redLED, HIGH);
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
    Serial.println("Reconnecting to MQTT Broker..");
    String clientId = "ESP32Client-";
    delay(2000);
    if (mqttClient.connect(clientId.c_str(), "Inteli-iot", "NDD7_@hNgHY2vRN")) { // Informacoes do nosso cliente do servidor MQTT
      Serial.println("Connected.");
    }
  }
}

// Funcao de procurar por redes de internet proximas
void search() {

  int value = analogRead(1); // Pegamos a porcentagem da bateria do ESP
  float voltage = value*(5.00/1023.00)*2; // Conta para recebermos a porcentagem de bateria correta

  Serial.println("scan start");
  int n = WiFi.scanNetworks(); //Fazendo a busca por redes
  Serial.println("scan done");

  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    String signalsInfo = "[";
    for (int i = 0; i < n; ++i) { //Passando as informacoes da rede(sinal, forca, etc)
      signalsInfo += "{ \"macAddress\": \"" + WiFi.BSSIDstr(i) + "\", \"strength\": \"" + WiFi.RSSI(i) + "\"}";
      if (i != n - 1) {
        signalsInfo += ",";
      }
    }
    Serial.println("vezes: " + n); // Vendo quantas vezes rodou
    signalsInfo += "]";
    String rede = WiFi.macAddress();
    // Pegando as informacoes sobre quais roteadores teve contato e a bateria do ESP
    String payload = "{\"deviceId\": \"" + rede + "\", \"signals\": " + signalsInfo + "," + "\"room\": 7, \"battery\": " + voltage + "}";
    int tamanho = payload.length();
    // Passando as informacoes para o servidor
    mqttClient.beginPublish("/location", tamanho, false);
    mqttClient.print(payload);
    mqttClient.endPublish();
    Serial.println(payload.c_str());
    delay(50);
  };
}

// Funcao de tocar o buzzer
void buzzer() {
  tone(BUZZER, 1000, 2000);
}

// Configurando Serial e complementos do ESP e pedindo para o WiFi iniciar
void setup() {
  Serial.begin(115200); // Valor BAUD da serial
  WiFi.begin(ssid, password); // Iniciando o WiFi
  pinMode(BUTTOM_SCAN, INPUT_PULLUP);
  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  // Enquanto o WiFi estiver desconectado...
  while (WiFi.status() != WL_CONNECTED) {
    delay(5000);
    Serial.print(".");
  }
  // Quando conectar...
  Serial.println("");
  Serial.println("Connected to Wi-Fi");
  setupMQTT(); // Configurando o servidor MQTT
}
void loop() {
  // Enquanto o servidor MQTT estiver desconectado...
  if (!mqttClient.connected()) {
    digitalWrite(redLED, HIGH); // led vermelho liga
    reconnect(); // Executa a funcao de reconexao para tentar reconectar
    delay(5000);
    if(!mqttClient.connected()){
      ESP.restart(); // Se continuar desconectado, reiniciar
    }
  }

  digitalWrite(redLED, LOW);
  digitalWrite(greenLED, HIGH); // Quando conectar desliga o led vermelho e liga o led verde

  mqttClient.loop(); // Faz com que o servidor MQTT continue rodando e não se desconecte
  long now = millis(); // Conta quantos milisegundos o ESP esta em execucao
  long previous_time = 0;
  
  // Quando o botao for apertado, ele procura pelas redes
  if (digitalRead(BUTTOM_SCAN) == LOW) {
    String rede = WiFi.macAddress();
    search();
  }
}


// Funcao de callback para sempre sabermos o que ocorre no servidor.
void callback(char* topic, byte* message, unsigned int length) {
  String mac = WiFi.macAddress();
  String topicoESP = "/buzzer/" + mac;
  String topicStr = topic;
  if (topicStr == topicoESP) { // Se a requisicao recebida de tocar um som tiver o mesmo endereco mac do que o ESP, o buzzer toca
    buzzer(); // Toca o buzzer quando isso acontece.
  }

  Serial.println("topic: " + *topic);
  Serial.println("topic: " + topicoESP);
  Serial.print("Callback - ");
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
  }
}
