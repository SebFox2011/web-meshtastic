import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { BLE } from "./components/PageComponents/Connect/BLE";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "256, 128, or 8 bit PSKs allowed": "256, 128, or 8 bit PSKs allowed",
      "| Meshtastic® is a registered trademark of Meshtastic LLC. |":
        "| Meshtastic® is a registered trademark of Meshtastic LLC. |",
      "A unique name for the channel <12 bytes, leave blank for default":
        "A unique name for the channel <12 bytes, leave blank for default",
      "Accent Color": "Accent Color",
      Active: "Active",
      "Air Quality Enabled": "Air Quality Enabled",
      "Air Quality Update Interval": "Air Quality Update Interval",
      "Alert Message": "Alert Message",
      "Alert Bell": "Alert Bell",
      "Alert Bell Buzzer": "Alert Bell Buzzer",
      "Alert Bell Vibrate": "Alert Bell Vibrate",
      "Alert Message Buzzer": "Alert Message Buzzer",
      "Alert Message Vibrate": "Alert Message Vibrate",
      "Allow Position Requests": "Allow Position Requests",
      "Ambient Lighting": "Ambient Lighting",
      "Any packets you send will be echoed back to your device":
        "Any packets you send will be echoed back to your device",
      Application: "Application",
      "Approximate Location": "Approximate Location",
      Audio: "Audio",
      "Baud Rate": "Baud Rate",
      BLE: "Bluetooth connection",
      blue: "blue",
      Bluetooth: "Bluetooth",
      Canned: "Canned Message",
      "Channel Settings": "Channel Settings",
      Channels: "Channels",
      Config: "Configuration",
      "Configure the external notification module":
        "Configure the external notification module",
      "Connect New Node": "Connect New Node",
      "Connect at least one device to get started":
        "Connect at least one device to get started",
      "Connected Devices": "Connected Devices",
      Connection: "Connection",
      Contextual: "Contextual",
      "Crypto, MQTT & misc settings": "Crypto, MQTT & misc settings",
      Debug: "Debug",
      "Designate I²S Pin as Buzzer Output":
        "Designate I²S Pin as Buzzer Output",
      "Detection Sensor": "Detection Sensor",
      "Detection Sensor Settings": "Detection Sensor Settings",
      "Detection Triggered High": "Detection Triggered High",
      Device: "Device",
      "Device telemetry is sent over PRIMARY. Only one PRIMARY allowed":
        "Device telemetry is sent over PRIMARY. Only one PRIMARY allowed",
      Disconnect: "Disconnect",
      Display: "Display",
      "Display Fahrenheit": "Display Fahrenheit",
      "Display temp in Fahrenheit": "Display temp in Fahrenheit",
      "Displayed on Screen": "Displayed on Screen",
      "Downlink Enabled": "Downlink Enabled",
      Echo: "Echo",
      Enabled: "Enabled",
      "Enable External Notification": "Enable External Notification",
      "Enable or disable map reporting": "Enable or disable map reporting",
      "Enable or disable Neighbor Info Module":
        "Enable or disable Neighbor Info Module",
      "Enable or disable MQTT": "Enable or disable MQTT",
      "Enable Paxcounter": "Enable Paxcounter",
      "Enable Range Test": "Enable Range Test",
      "Enable Serial output": "Enable Serial output",
      "Enable the Air Quality Telemetry": "Enable the Air Quality Telemetry",
      "Enable the Environment Telemetry": "Enable the Environment Telemetry",
      "Enable the Power Telemetry Screen": "Enable the Power Telemetry Screen",
      "Enable the Power Measurement Telemetry":
        "Enable the Power Measurement Telemetry",
      "Enable or disable Detection Sensor Module":
        "Enable or disable Detection Sensor Module",
      "Enable Store & Forward": "Enable Store & Forward",
      "Enable Store & Forward heartbeat": "Enable Store & Forward heartbeat",
      Encryption: "Encryption",
      "Encryption Enabled": "Encryption Enabled",
      "Enable or disable TLS": "Enable or disable TLS",
      "Enable or disable MQTT encryption. Note: All messages are sent to the MQTT broker unencrypted if this option is not enabled, even when your uplink channels have encryption keys set. This includes position data.":
        "Enable or disable MQTT encryption. Note: All messages are sent to the MQTT broker unencrypted if this option is not enabled, even when your uplink channels have encryption keys set. This includes position data.",
      "ESP32 Only": "ESP32 Only",
      "Ext Notif": "External Notification",
      "External Notification Settings": "External Notification Settings",
      "Factory Reset Config": "Factory Reset Config",
      "Factory Reset Device": "Factory Reset Device",
      "Friendly Name": "Friendly Name",
      Generator: "Generator",
      Goto: "Goto",
      Green: "Green",
      "Heartbeat Enabled": "Heartbeat Enabled",
      "History return max": "History return max",
      "History return window": "History return window",
      "How long to wait between sending test packets":
        "How long to wait between sending test packets",
      "How long to wait between sending paxcounter packets":
        "How long to wait between sending paxcounter packets",
      "How often to send Air Quality data over the mesh":
        "How often to send Air Quality data over the mesh",
      "How often to send Metrics over the mesh":
        "How often to send Metrics over the mesh",
      "How often to send Power data over the mesh":
        "How often to send Power data over the mesh",
      "If not sharing precise location, position shared on channel will be accurate within this distance":
        "If not sharing precise location, position shared on channel will be accurate within this distance",
      "If you have a serial port connected to the console, this will override it.":
        "If you have a serial port connected to the console, this will override it.",
      Import: "Import",
      "Interval to get telemetry data": "Interval to get telemetry data",
      "Interval in seconds of how often we should try to send our Neighbor Info to the mesh":
        "Interval in seconds of how often we should try to send our Neighbor Info to the mesh",
      "Interval in seconds to publish map reports":
        "Interval in seconds to publish map reports",
      "JSON Enabled": "JSON Enabled",
      "Legal Information": "Legal Information",
      "Last Heard": "Last Heard",
      LoRa: "LoRa",
      "MAC Address": "MAC Address",
      Manage: "Manage",
      "Manage, connect and disconnect devices":
        "Manage, connect and disconnect devices",
      Map: "Map",
      "Map Report Publish Interval (s)": "Map Report Publish Interval (s)",
      "Map Reporting Enabled": "Map Reporting Enabled",
      "Max number of records to return": "Max number of records to return",
      Messages: "Messages",
      "Message Interval": "Message Interval",
      "Minimum Broadcast Seconds": "Minimum Broadcast Seconds",
      Mode: "Mode",
      Model: "Model",
      "Module Enabled": "Module Enabled",
      "Monitor Pin": "Monitor Pin",
      MQTT: "MQTT",
      "MQTT Password": "MQTT Password",
      "MQTT password to use for default/custom servers":
        "MQTT password to use for default/custom servers",
      "MQTT root topic to use for default/custom servers":
        "MQTT root topic to use for default/custom servers",
      "MQTT Server Address": "MQTT Server Address",
      "MQTT server address to use for default/custom servers":
        "MQTT server address to use for default/custom servers",
      "MQTT Settings": "MQTT Settings",
      "MQTT Username": "MQTT Username",
      "MQTT username to use for default/custom servers":
        "MQTT username to use for default/custom servers",
      "Nag Timeout": "Nag Timeout",
      Name: "Name",
      "Neighbor Info": "Neighbor Info",
      "Neighbor Info Settings": "Neighbor Info Settings",
      network: "Network connection",
      Never: "Never",
      "New Connection": "New Connection",
      "No Devices": "No Devices",
      Nodes: "Nodes",
      "No results found.": "No results found.",
      "Number of records": "Number of records",
      "Number of records to store": "Number of records to store",
      Orange: "Orange",
      Output: "Output",
      "Output Buzzer": "Output Buzzer",
      "Output MS": "Output MS",
      "Output Vibrate": "Output Vibrate",
      "Override Console Serial Port": "Override Console Serial Port",
      Paxcounter: "Paxcounter",
      "Paxcounter Settings": "Paxcounter Settings",
      Pink: "Pink",
      Position: "Position",
      Power: "Power",
      "Powered by ▲ Vercel": "Powered by ▲ Vercel",
      "Power Measurement Enabled": "Power Measurement Enabled",
      "Power Screen Enabled": "Power Screen Enabled",
      "Power Update Interval": "Power Update Interval",
      "Precise Location": "Precise Location",
      "pre-Shared Key": "pre-Shared Key",
      "Proxy to Client Enabled": "Proxy to Client Enabled",
      Purple: "Purple",
      "Query Interval": "Query Interval",
      "QR Code": "QR Code",
      "Range Test": "Range Test",
      "Range Test Settings": "Range Test Settings",
      "Receive Pin": "Receive Pin",
      Reconfigure: "Reconfigure",
      Red: "Red",
      Remove: "Remove",
      "Reset Nodes": "Reset Nodes",
      Role: "Role",
      "Root topic": "Root topic",
      "S&F": "S&F",
      "Save CSV to storage": "Save CSV to storage",
      "Schedule Reboot": "Schedule Reboot",
      "Schedule Shutdown": "Schedule Shutdown",
      "Seconds to wait before we consider your packet as 'done'":
        "Seconds to wait before we consider your packet as 'done'",
      Security: "Security",
      "Send Bell": "Send Bell",
      "Send ASCII bell with alert message":
        "Send ASCII bell with alert message",
      "Select Mode": "Select Mode",
      "Send messages from MQTT to the local mesh":
        "Send messages from MQTT to the local mesh",
      "Send messages from the local mesh to MQTT":
        "Send messages from the local mesh to MQTT",
      "Send position to channel": "Send position to channel",
      "Send precise location to channel": "Send precise location to channel",
      Serial: "Serial connection",
      "Serial Settings": "Serial Settings",
      "Set the GPIO pin to the RXD pin you have set up.":
        "Set the GPIO pin to the RXD pin you have set up.",
      "Settings for the Serial module": "Settings for the Serial module",
      "Settings for the Store & Forward module":
        "Settings for the Store & Forward module",
      "Settings for the Telemetry module": "Settings for the Telemetry module",
      "Settings for the Range Test module":
        "Settings for the Range Test module",
      "Settings for the Neighbor Info module":
        "Settings for the Neighbor Info module",
      "Settings for the MQTT module": "Settings for the MQTT module",
      "Show the Telemetry Module on the OLED":
        "Show the Telemetry Module on the OLED",
      "Settings for the Detection Sensor module":
        "Settings for the Detection Sensor module",
      "Should an alert be triggered when receiving an incoming bell?":
        "Should an alert be triggered when receiving an incoming bell?",
      SNR: "SNR",
      "State Broadcast Seconds": "State Broadcast Seconds",
      "Store & Forward Settings": "Store & Forward Settings",
      "Switch Node": "Switch Node",
      Telemetry: "Telemetry",
      "Telemetry Settings": "Telemetry Settings",
      "The serial baud rate": "The serial baud rate",
      "This feature is not implemented yet":
        "This feature is not implemented yet",
      "The interval in seconds of how often we can send a message to the mesh when a state change is detected":
        "The interval in seconds of how often we can send a message to the mesh when a state change is detected",
      "The interval in seconds of how often we should send a message to the mesh with the current state regardless of changes":
        "The interval in seconds of how often we should send a message to the mesh with the current state regardless of changes",
      "The GPIO pin to monitor for state changes":
        "The GPIO pin to monitor for state changes",
      Timeout: "Timeout",
      "TLS Enabled": "TLS Enabled",
      "Toggle Dark Mode": "Toggle Dark Mode",
      "Transmit Pin": "Transmit Pin",
      "Update Interval": "Update Interval",
      "Update Interval (seconds)": "Update Interval (seconds)",
      "Uplink Enabled": "Uplink Enabled",
      "Use I²S Pin as Buzzer": "Use I²S Pin as Buzzer",
      "Use Pullup": "Use Pullup",
      "Use PWM": "Use PWM",
      "Use the client's internet connection for MQTT (feature only active in mobile apps)":
        "Use the client's internet connection for MQTT (feature only active in mobile apps)",
      "Used to format the message sent to mesh, max 20 Characters":
        "Used to format the message sent to mesh, max 20 Characters",
      "Whether to send/consume JSON packets on MQTT":
        "Whether to send/consume JSON packets on MQTT",
      "[WIP] Clear Messages": "[WIP] Clear Messages",
      "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)":
        "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)",
        "Whether or not use INPUT_PULLUP mode for GPIO pin": "Whether or not use INPUT_PULLUP mode for GPIO pin",
      "Within feet": "Within {{value}} feet",
      "Within miles": "Within {{value}} miles",
      "Within m": "Within {{value}} m",
      "Within km": "Within {{value}} km",
      Yellow: "Yellow",
    },
  },
  fr: {
    translation: {
      "256, 128, or 8 bit PSKs allowed": "256, 128, ou 8 bits PSK autorisés",
      "| Meshtastic® is a registered trademark of Meshtastic LLC. |":
        "| Meshtastic® est une marque déposée de Meshtastic LLC. |",
      "A unique name for the channel <12 bytes, leave blank for default":
        "Un nom unique pour le canal <12 octets, laisser vide pour le défaut",
      "Accent Color": "Couleur d'accentuation",
      Active: "Actif",
      "Air Quality Enabled": "Qualité de l'air activée",
      "Air Quality Update Interval":
        "Intervalle de mise à jour de la qualité de l'air",
      "Alert Message": "Message d'alerte",
      "Alert Bell": "Cloche d'alerte",
      "Alert Bell Buzzer": "Buzzer de la cloche d'alerte",
      "Alert Bell Vibrate": "Vibration de la cloche d'alerte",
      "Alert Message Buzzer": "Buzzer du message d'alerte",
      "Alert Message Vibrate": "Vibration du message d'alerte",
      "Allow Position Requests": "Autoriser les demandes de position",
      "Ambient Lighting": "Éclairage ambiant",
      "Any packets you send will be echoed back to your device":
        "Tous les paquets que vous envoyez seront renvoyés à votre appareil",
      Application: "Application",
      "Approximate Location": "Localisation approximative",
      Audio: "Audio",
      "Baud Rate": "Débit en bauds",
      BLE: "Connexion Bluetooth",
      blue: "bleu",
      Bluetooth: "Bluetooth",
      Canned: "Message prédéfini",
      "Channel Settings": "Paramètres du canal",
      Channels: "Canaux",
      "Connect New Node": "Connecter un nouveau noeud",
      Config: "Configuration",
      "Configure the external notification module":
        "Configurer le module de notification externe",
      "Connect at least one device to get started":
        "Connectez au moins un appareil pour commencer",
      "Connected Devices": "Appareils connectés",
      Connection: "Connexion",
      Contextual: "Contextuel",
      "Crypto, MQTT & misc settings": "Cryptage, MQTT et autres paramètres",
      "Device telemetry is sent over PRIMARY. Only one PRIMARY allowed":
        "Les données de télémétrie de l'appareil sont envoyées via PRIMARY. Un seul PRIMARY est autorisé",
      Debug: "Débogage",
      "Designate I²S Pin as Buzzer Output":
        "Désigner la broche I²S comme sortie de buzzer",
      "Detection Sensor": "Capteur de détection",
      "Detection Sensor Settings": "Paramètres du capteur de détection",
      "Detection Triggered High": "Détection déclenchée haute",
      Device: "Appareil",
      Disconnect: "Déconnecter",
      Display: "Affichage",
      "Display Fahrenheit": "Affichage Fahrenheit",
      "Display temp in Fahrenheit": "Affichage de la température en Fahrenheit",
      "Displayed on Screen": "Affiché à l'écran",
      "Downlink Enabled": "Transmission descendante activée",
      Echo: "Écho",
      Enabled: "Activé",
      "Enable External Notification": "Activer la notification externe",
      "Enable or disable map reporting":
        "Activer ou désactiver le rapport de carte",
      "Enable or disable TLS": "Activer ou désactiver TLS",
      "Enable or disable Neighbor Info Module":
        "Activer ou désactiver le module d'informations voisins",
      "Enable or disable MQTT encryption. Note: All messages are sent to the MQTT broker unencrypted if this option is not enabled, even when your uplink channels have encryption keys set. This includes position data.":
        "Activer ou désactiver le chiffrement MQTT. Remarque : Tous les messages sont envoyés au courtier MQTT non chiffrés si cette option n'est pas activée, même lorsque vos canaux de liaison montante ont des clés de chiffrement définies. Cela inclut les données de position.",
      "Enable or disable MQTT": "Activer ou désactiver MQTT",
      "Enable Paxcounter": "Activer Paxcounter",
      "Enable Range Test": "Activer le test de portée",
      "Enable the Air Quality Telemetry":
        "Activer la télémétrie de la qualité de l'air",
      "Enable the Environment Telemetry":
        "Activer la télémétrie de l'environnement",
      "Enable the Power Telemetry Screen":
        "Activer l'écran de télémétrie de puissance",
      "Enable the Power Measurement Telemetry":
        "Activer la télémétrie de mesure de puissance",
      "Enable Store & Forward": "Activer le stockage et la transmission",
      "Enable Store & Forward heartbeat":
        "Activer le battement de coeur de stockage et de transmission",
      "Enable or disable Detection Sensor Module":
        "Activer ou désactiver le module de capteur de détection",
      Encryption: "Chiffrement",
      "Encryption Enabled": "Chiffrement activé",
      "Ext Notif": "Notification externe",
      "External Notification Settings": "Paramètres de notification externe",
      "Enable Serial output": "Activer la sortie série",
      "ESP32 Only": "ESP32 uniquement",
      "Factory Reset Config": "Réinitialiser la configuration d'usine",
      "Factory Reset Device": "Réinitialiser l'appareil aux paramètres d'usine",
      "Friendly Name": "Nom convivial",
      Generator: "Générateur",
      Goto: "Aller à",
      Green: "Vert",
      "Heartbeat Enabled": "Battement de coeur activé",
      "History return max": "Historique retour max",
      "History return window": "Historique retour fenêtre",
      "How long to wait between sending test packets":
        "Combien de temps attendre entre l'envoi des paquets de test",
      "How long to wait between sending paxcounter packets":
        "Combien de temps attendre entre l'envoi des paquets de paxcounter",
      "How often to send Air Quality data over the mesh":
        "Fréquence d'envoi des données de qualité de l'air sur le maillage",
      "How often to send Metrics over the mesh":
        "Fréquence d'envoi des métriques sur le maillage",
      "How often to send Power data over the mesh":
        "Fréquence d'envoi des données de puissance sur le maillage",
      "If not sharing precise location, position shared on channel will be accurate within this distance":
        "Si la localisation précise n'est pas partagée, la position partagée sur le canal sera précise dans cette distance",
      "If you have a serial port connected to the console, this will override it.":
        "Si vous avez un port série connecté à la console, cela le remplacera.",
      Import: "Importer",
      "Interval to get telemetry data":
        "Intervalle pour obtenir les données de télémétrie",
      "Interval in seconds of how often we should try to send our Neighbor Info to the mesh":
        "Intervalle en secondes de la fréquence à laquelle nous devrions essayer d'envoyer nos informations de voisinage au maillage",
      "Interval in seconds to publish map reports":
        "Intervalle en secondes pour publier les rapports de carte",
      "JSON Enabled": "JSON activé",
      "Last Heard": "Dernière connexion",
      "Legal Information": "Informations légales",
      LoRa: "LoRa",
      "MAC Address": "Adresse MAC",
      Manage: "Gérer",
      "Manage, connect and disconnect devices":
        "Gérer, connecter et déconnecter les appareils",
      Map: "Carte",
      "Map Reporting Enabled": "Rapport de carte activé",
      "Map Report Publish Interval (s)":
        "Intervalle de publication du rapport de carte (s)",
      "Max number of records to return":
        "Nombre maximal d'enregistrements à retourner",
      Messages: "Messages",
      "Message Interval": "Intervalle de message",
      "Minimum Broadcast Seconds": "Secondes de diffusion minimales",
      Mode: "Mode",
      Model: "Modèle",
      "Module Enabled": "Module activé",
      MQTT: "MQTT",
      "MQTT Password": "Mot de passe MQTT",
      "MQTT password to use for default/custom servers":
        "Mot de passe MQTT à utiliser pour les serveurs par défaut/personnalisés",
      "MQTT root topic to use for default/custom servers":
        "Sujet racine MQTT à utiliser pour les serveurs par défaut/personnalisés",
      "MQTT Server Address": "Adresse du serveur MQTT",
      "MQTT server address to use for default/custom servers":
        "Adresse du serveur MQTT à utiliser pour les serveurs par défaut/personnalisés",
      "MQTT Settings": "Paramètres MQTT",
      "MQTT Username": "Nom d'utilisateur MQTT",
      "MQTT username to use for default/custom servers":
        "Nom d'utilisateur MQTT à utiliser pour les serveurs par défaut/personnalisés",
      "Nag Timeout": "Délai d'attente",
      Name: "Nom",
      "Neighbor Info": "Informations voisins",
      "Neighbor Info Settings": "Paramètres des informations voisins",
      network: "Connexion réseau",
      Never: "Jamais",
      "New Connection": "Nouvelle connexion",
      "No Devices": "Aucun appareil",
      Nodes: "Noeuds",
      "Monitor Pin": "Broche de surveillance",
      "No results found.": "Aucun résultat trouvé.",
      "Number of records": "Nombre d'enregistrements",
      "Number of records to store": "Nombre d'enregistrements à stocker",
      Orange: "Orange",
      Output: "Sortie",
      "Output Buzzer": "Buzzer de sortie",
      "Output MS": "Sortie MS",
      "Output Vibrate": "Vibration de sortie",
      "Override Console Serial Port": "Remplacer le port série de la console",
      Paxcounter: "Paxcounter",
      "Paxcounter Settings": "Paramètres de Paxcounter",
      Pink: "Rose",
      Position: "Position",
      Power: "Alimentation",
      "Powered by ▲ Vercel": "Propulsé par ▲ Vercel",
      "Power Measurement Enabled": "Mesure de puissance activée",
      "Power Screen Enabled": "Affichage de la puissance activé",
      "Power Update Interval": "Intervalle de mise à jour de la puissance",
      "Precise Location": "Localisation précise",
      "pre-Shared Key": "Clé pré-partagée",
      "Proxy to Client Enabled": "Proxy to Client Enabled",
      Purple: "Violet",
      "Query Interval": "Intervalle de requête",
      "QR Code": "QR Code",
      "Range Test": "Test de portée",
      "Range Test Settings": "Paramètres du test de portée",
      "Receive Pin": "Broche de réception",
      Reconfigure: "Reconfigurer",
      Red: "Rouge",
      Remove: "Supprimer",
      "Reset Nodes": "Réinitialiser les noeuds",
      Role: "Rôle",
      "Root topic": "Sujet racine",
      "S&F": "S&F",
      "Save CSV to storage": "Enregistrer le CSV dans le stockage",
      "Schedule Reboot": "Planifier le redémarrage",
      "Schedule Shutdown": "Planifier l'arrêt",
      "Seconds to wait before we consider your packet as 'done'":
        "Secondes à attendre avant de considérer votre paquet comme 'terminé'",
      Security: "Sécurité",
      "Send ASCII bell with alert message":
        "Envoyer une cloche ASCII avec un message d'alerte",
      "Select Mode": "Sélectionner le mode",
      "Send Bell": "Envoyer une cloche",
      "Send messages from MQTT to the local mesh":
        "Envoyer des messages de MQTT au maillage local",
      "Send messages from the local mesh to MQTT":
        "Envoyer des messages du maillage local à MQTT",
      "Send position to channel": "Envoyer la position au canal",
      "Send precise location to channel":
        "Envoyer la localisation précise au canal",
      Serial: "Connexion série",
      "Serial Settings": "Paramètres série",
      "Set the GPIO pin to the RXD pin you have set up.":
        "Définissez la broche GPIO sur la broche RXD que vous avez configurée.",
      "Settings for the Serial module": "Paramètres du module série",
      "Settings for the Store & Forward module":
        "Paramètres du module de stockage et de transmission",
      "Settings for the Telemetry module": "Paramètres du module de télémétrie",
      "Settings for the Range Test module":
        "Paramètres du module de test de portée",
      "Settings for the Neighbor Info module":
        "Paramètres du module d'informations voisins",
      "Settings for the MQTT module": "Paramètres du module MQTT",
      "Settings for the Detection Sensor module":
        "Paramètres du module de capteur de détection",
      "Show the Telemetry Module on the OLED":
        "Afficher le module de télémétrie sur l'OLED",
      "Should an alert be triggered when receiving an incoming bell?":
        "Un alerte doit-elle être déclenchée lors de la réception d'une cloche entrante ?",
      SNR: "SNR",
      "State Broadcast Seconds": "Secondes de diffusion d'état",
      "Store & Forward Settings": "Paramètres de stockage et de transmission",
      "Switch Node": "Changer de noeud",
      Telemetry: "Télémétrie",
      "Telemetry Settings": "Paramètres de télémétrie",
      "The serial baud rate": "Le débit en bauds série",
      "The interval in seconds of how often we can send a message to the mesh when a state change is detected":
        "L'intervalle en secondes de la fréquence à laquelle nous pouvons envoyer un message au maillage lorsqu'un changement d'état est détecté",
      "The interval in seconds of how often we should send a message to the mesh with the current state regardless of changes":
        "L'intervalle en secondes de la fréquence à laquelle nous devrions envoyer un message au maillage avec l'état actuel, indépendamment des changements",
      "This feature is not implemented yet":
        "Cette fonctionnalité n'est pas encore implémentée",
      "The GPIO pin to monitor for state changes":
        "La broche GPIO à surveiller pour les changements d'état",
      Timeout: "Délai d'attente",
      "TLS Enabled": "TLS activé",
      "Toggle Dark Mode": "Basculer le mode sombre/clair",
      "Transmit Pin": "Broche de transmission",
      "Update Interval": "Intervalle de mise à jour",
      "Update Interval (seconds)": "Intervalle de mise à jour (secondes)",
      "Uplink Enabled": "Transmission montante activée",
      "Use I²S Pin as Buzzer": "Utiliser la broche I²S comme buzzer",
      "Use Pullup": "Utiliser le pullup",
      "Use PWM": "Utiliser le PWM",
      "Use the client's internet connection for MQTT (feature only active in mobile apps)":
        "Utiliser la connexion Internet du client pour MQTT (fonctionnalité uniquement active dans les applications mobiles)",
      "Used to format the message sent to mesh, max 20 Characters":
        "Utilisé pour formater le message envoyé au maillage, max 20 caractères",
      "Whether to send/consume JSON packets on MQTT":
        "Envoyer/consommer des paquets JSON sur MQTT",
      "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)":
        "Détermine si la détection de l'état de la broche GPIO est déclenchée sur HIGH (1), sinon LOW (0)",
        "Whether or not use INPUT_PULLUP mode for GPIO pin": "Utiliser ou non le mode INPUT_PULLUP pour la broche GPIO",
      "Within feet": "Dans un rayon de {{value}} pieds",
      "Within miles": "Dans un rayon de {{value}} mi les",
      "Within m": "Dans un rayon de {{value}} m",
      "Within km": "Dans un rayon de {{value}} km",
      "[WIP] Clear Messages": "[WIP] Effacer les messages",
      Yellow: "Jaune",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
