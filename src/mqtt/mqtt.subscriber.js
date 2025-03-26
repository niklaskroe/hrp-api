import logging from "logging";
import mqtt from "mqtt";
import process from "node:process";
import dotenv from "dotenv";

const logger = logging.default('MQTTSubscriber');
dotenv.config();

let mqttClient;

(function connect() {
    mqttClient = mqtt.connect(process.env.MQTT_BROKER, {
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD
    });

    mqttClient.on('connect', () => {
        logger.info("Connected to MQTT server.");
        subscribe();
    });

    mqttClient.on('error', (error) => {
        logger.error("Error connecting to MQTT server: ", error);
    });

    mqttClient.on('close', () => {
        logger.warn("MQTT connection closed.");
    });

    if (!process.env.MQTT_TOPIC || !process.env.MQTT_TOPIC.trim()) {
        logger.error("Environment variable MQTT_TOPIC is not defined!");
    }
})();

function subscribe() {
    if (!mqttClient) {
        logger.error("MQTT client is not initialized.");
        return;
    }

    mqttClient.subscribe(`${process.env.MQTT_TOPIC}/items`, (error) => {
        if (error) {
            logger.error(`Error subscribing to MQTT topic: `, error);
        } else {
            logger.info(`🔔 Subscribed to ${process.env.MQTT_TOPIC}/items`);
        }
    });

    mqttClient.on("message", (topic, message) => {
        logger.info(`📩 Message received on ${topic}: ${message.toString()}`);
    });
}