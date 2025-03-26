import mqtt from "mqtt";
import dotenv from "dotenv";
import process from "node:process";
import logging from "logging";

dotenv.config();

const logger = logging.default("MQTTService");

let connectionStatus = false;
let mqttClient;

function connect() {
    logger.info("Connecting to MQTT");

    mqttClient = mqtt.connect(process.env.MQTT_BROKER, {
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD
    });

    mqttClient.on("connect", () => {
        connectionStatus = true;
        logger.info("Connected to MQTT server.");
    });

    mqttClient.on("error", (error) => {
        logger.error("Error connecting to MQTT server: ", error);
    });

    mqttClient.on("offline", () => {
        connectionStatus = false;
        logger.warn("MQTT client went offline.");
    });

    if (!process.env.MQTT_TOPIC || !process.env.MQTT_TOPIC.trim()) {
        logger.error("Environment variable MQTT_TOPIC is not defined!");
    }
}

function isConnected() {
    return connectionStatus;
}

function publish(subtopic, operation, url, data) {
    const messageString = JSON.stringify({
        operation: operation,
        url: url,
        data: data
    });

    logger.info(messageString);

    mqttClient.publish(`${process.env.MQTT_TOPIC}/${subtopic}`, messageString, (error) => {
        if (error) {
            logger.error("Error publishing message: ", error);
        } else {
            logger.info(`Published request to ${subtopic}`);
        }
    });
}

export default {connect: connect, publish, isConnected};