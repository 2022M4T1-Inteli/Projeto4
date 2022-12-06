#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#define BUZZER 35
#define BUTTOM_SCAN 38
#define BUTTOM_BUZZER 5
#define redLED 16
#define greenLED 15

WiFiClientSecure wifiClient;
PubSubClient mqttClient(wifiClient);
const char* ssid = "Rafael";
const char* password = "SemSenha";
char* mqttServer = "31632e1a776b4e068513a22883b3537b.s1.eu.hivemq.cloud";
int mqttPort = 8883;
void setupMQTT() {
  wifiClient.setInsecure();
  mqttClient.setServer(mqttServer, mqttPort);
  mqttClient.setCallback(callback);
}
void reconnect() {
  digitalWrite(redLED, HIGH);
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
    Serial.println("Reconnecting to MQTT Broker..");
    String clientId = "ESP32Client-";
    delay(2000);
    if (mqttClient.connect(clientId.c_str(), "Inteli-iot", "NDD7_@hNgHY2vRN")) {
      Serial.println("Connected.");
      // subscribe to topic
      mqttClient.subscribe("esp32/message");
    }
  }
}
void search() {
  Serial.println("scan start");
  // WiFi.scanNetworks will return the number of networks found
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

void buzzer() {

  while (digitalRead(BUTTOM_BUZZER) == HIGH) {

    tone(BUZZER, 1000, 100);
  }
}


void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  pinMode(BUTTOM_SCAN, INPUT_PULLUP);
  pinMode(BUTTOM_BUZZER, INPUT_PULLUP);
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
void loop() { 
  if (!mqttClient.connected()) {
    digitalWrite(redLED, HIGH);
    reconnect();
  }

  digitalWrite(redLED, LOW);
  digitalWrite(greenLED, HIGH);

  mqttClient.loop();
  long now = millis();
  long previous_time = 0;
  if (digitalRead(BUTTOM_SCAN) == LOW) {
    String rede = WiFi.macAddress();
    search();
  }
  if (digitalRead(BUTTOM_BUZZER) == LOW) {
    tone(BUZZER, 0);
    while (digitalRead(BUTTOM_BUZZER) == LOW)
      ;
  }
}
void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Callback - ");
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
  }
}
