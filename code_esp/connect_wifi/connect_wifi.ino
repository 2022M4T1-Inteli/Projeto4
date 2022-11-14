#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#define LED_VERDE 17
#define buzzer
#define button_buzzer
WiFiClientSecure wifiClient;
PubSubClient mqttClient(wifiClient);
const char* ssid = "Inteli-COLLEGE";
const char* password = "QazWsx@123";
char* mqttServer = "31632e1a776b4e068513a22883b3537b.s1.eu.hivemq.cloud";
int mqttPort = 8883;
void setupMQTT() {
  wifiClient.setInsecure();
  mqttClient.setServer(mqttServer, mqttPort);
  mqttClient.setCallback(callback);
}
void reconnect() {
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
    Serial.println("Reconnecting to MQTT Broker..");
    String clientId = "ESP32Client-";
    delay(2000);
    if (mqttClient.connect(clientId.c_str(), "Inteli-iot-teste", "V.5!RHz4a@3UGct")) {
      Serial.println("Connected.");
      // subscribe to topic
      mqttClient.subscribe("esp32/message");
    }
  }
}
void buzzer(){
  if (mqttClient.connect()){
    freq_buzzer = 1000;
    tone(buzzer, freq_buzzer, 100);
  }
}
void buzzer_off(){
  if (digitalRead(button_buzzer) == LOW){
    noTone(buzzer);
  }
   while(digitalRead(button_buzzer) == LOW) {}
}
noTone(buzzer)
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Connected to Wi-Fi");
  setupMQTT();
}
void loop() {
  if (!mqttClient.connected())
    reconnect();
  mqttClient.loop();
  long now = millis();
  long previous_time = 0;
}
void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Callback - ");
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
  }
}