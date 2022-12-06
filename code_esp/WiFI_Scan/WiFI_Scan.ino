#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#define BUZZER 35
#define redLED 16
#define greenLED 15

//Configurações do Broker
WiFiClientSecure wifiClient;
PubSubClient mqttClient(wifiClient);

//Conexões WiFi e link da nuvem para acesso ao Broker
const char* ssid = "Inteli-COLLEGE";
const char* password = "QazWsx@123";
char* mqttServer = "31632e1a776b4e068513a22883b3537b.s1.eu.hivemq.cloud";
int mqttPort = 8883;

//Função que acessa o Broker
void setupMQTT() {
  wifiClient.setInsecure();
  mqttClient.setServer(mqttServer, mqttPort);
  mqttClient.setCallback(callback);
}

//Função para reconectar ao Broker com os dados de Login
void reconnect() {
  digitalWrite(redLED, HIGH);
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
    Serial.println("Reconnecting to MQTT Broker..");
    String clientId = "ESP32Client-";
    delay(2000);
    if (mqttClient.connect(clientId.c_str(), "Inteli-iot", "NDD7_@hNgHY2vRN")) {
      Serial.println("Connected.");
    }
  }
}

//Função para buncar todas as redes WiFi por perto e retornar o Macaddress e a potência do sinal
void search() {
  Serial.println("scan start");
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    String signalsInfo = "[";
    for (int i = 0; i < n; ++i) {
      signalsInfo += "{ \"macAddress\": \"" + WiFi.BSSIDstr(i) + "\", \"strength\": \"" + WiFi.RSSI(i) + "\"}";
      if (i != n - 1) {
        signalsInfo += ",";
      }
    }
    Serial.println("vezes: " + n);
    signalsInfo += "]}";
    String rede = WiFi.macAddress();
    String payload = "{\"deviceId\": \"" + rede + "\", \"signals\": " + signalsInfo;
    int tamanho = payload.length();
    mqttClient.beginPublish("/location", tamanho, false);
    mqttClient.print(payload);
    mqttClient.endPublish();
    Serial.println(payload.c_str());
    delay(50);
  };
}

//Definições iniciais do ESP32-S3
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Connected to Wi-Fi");
  setupMQTT();
}

//Função que chama todas as outras em um loop
void loop() {
  //mantém a conexão WiFi
  if (!mqttClient.connected()) {
    digitalWrite(redLED, HIGH);
    reconnect();
  }

  digitalWrite(redLED, LOW);
  digitalWrite(greenLED, HIGH);

  //Conecta ao Broker
  mqttClient.loop();
  long now = millis();
  long previous_time = 0;

  String rede = WiFi.macAddress();
  search();
  delay(1.800.000);
  
}

//Função que verifica no server se há uma função a ser executada
void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Callback - ");
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
  }
}
