import mqtt from "mqtt";
import process from "node:process";
import logging from "logging";

const logger = logging.default("MQTTService");

logger.info("Connecting to MQTT server...");

let mqttClient;

async function connect() {
    mqttClient = await mqtt.connectAsync(process.env.MQTT_BROKER, {
        username: process.env.MQTT_USER,
        password: process.env.MQTT_PASSWORD
    });

    if (!process.env.MQTT_TOPIC || !process.env.MQTT_TOPIC.trim()) {
        throw new Error("Environment variable MQTT_TOPIC is not defined!");
    }

    mqttClient.on('connect', () => {
        logger.info('Connected to MQTT server');
    });
}

await mqttClient.subscribeAsync(process.env.MQTT_TOPIC);

export default {connect};