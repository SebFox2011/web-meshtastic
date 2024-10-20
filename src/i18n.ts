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
      "ADC Multiplier Override ratio": "ADC Multiplier Override ratio",
      "Address assignment selection": "Address assignment selection",
      "IP Address": "IP Address",
      "Address of the INA219 battery monitor":
        "Address of the INA219 battery monitor",
      "Address Mode": "Address Mode",
      "Admin Key": "Admin Key",
      "Admin Settings": "Admin Settings",
      "Air Quality Enabled": "Air Quality Enabled",
      "Air Quality Update Interval": "Air Quality Update Interval",
      "Alert Message": "Alert Message",
      "Alert Bell": "Alert Bell",
      "Alert Bell Buzzer": "Alert Bell Buzzer",
      "Alert Bell Vibrate": "Alert Bell Vibrate",
      "Allow Input Source": "Allow Input Source",
      "Alert Message Buzzer": "Alert Message Buzzer",
      "Alert Message Vibrate": "Alert Message Vibrate",
      "Allow incoming device control over the insecure legacy admin channel":
        "Allow incoming device control over the insecure legacy admin channel",
      "Allow Legacy Admin": "Allow Legacy Admin",
      "Allow Position Requests": "Allow Position Requests",
      "Ambient Lighting": "Ambient Lighting",
      "Any packets you send will be echoed back to your device":
        "Any packets you send will be echoed back to your device",
      Application: "Application",
      "Approximate Location": "Approximate Location",
      Audio: "Audio",
      "Audio Settings": "Audio Settings",
      "Automatically shutdown node after this long when on battery, 0 for indefinite":
        "Automatically shutdown node after this long when on battery, 0 for indefinite",
      "Baud Rate": "Baud Rate",
      Bitrate: "Bitrate",
      "Bitrate to use for audio encoding": "Bitrate to use for audio encoding",
      BLE: "Bluetooth connection",
      blue: "blue",
      Bluetooth: "Bluetooth",
      "Broadcast Interval": "Broadcast Interval",
      Canned: "Canned Message",
      "Canned Message Settings": "Canned Message Settings",
      "Channel Settings": "Channel Settings",
      Channels: "Channels",
      "Clockwise event": "Clockwise event",
      "Codec 2 Enabled": "Codec 2 Enabled",
      Config: "Configuration",
      "Configuration options for Position messages":
        "Configuration options for Position messages",
      "Configure the external notification module":
        "Configure the external notification module",
      "Configure whether device GPS is Enabled, Disabled, or Not Present":
        "Configure whether device GPS is Enabled, Disabled, or Not Present",
      "Connect New Node": "Connect New Node",
      "Connect at least one device to get started":
        "Connect at least one device to get started",
      "Connected Devices": "Connected Devices",
      "Connecting...": "Connecting...",
      Connected: "Connected",
      Connection: "Connection",
      Contextual: "Contextual",
      "Counter Clockwise event": "Counter Clockwise event",
      "Crypto, MQTT & misc settings": "Crypto, MQTT & misc settings",
      Current: "Current",
      Debug: "Debug",
      "Default Gateway": "Default Gateway",
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
      DNS: "DNS",
      "DNS Server": "DNS Server",
      "Don't report GPS position, but a manually-specified one":
        "Don't report GPS position, but a manually-specified one",
      "Downlink Enabled": "Downlink Enabled",
      Echo: "Echo",
      Enabled: "Enabled",
      "Enable or disable the WiFi radio": "Enable or disable the WiFi radio",
      "Unable to Connect:": "Unable to Connect:",
      "Encoder Pin A": "Encoder Pin A",
      "Encoder Pin B": "Encoder Pin B",
      "Encoder Pin Press": "Encoder Pin Press",
      "Enable power saving mode": "Enable power saving mode",
      "Enable Codec 2 audio encoding": "Enable Codec 2 audio encoding",
      "Enable Debug Log API": "Enable Debug Log API",
      "Enable the up / down encoder": "Enable the up / down encoder",
      "Enable the rotary encoder": "Enable the rotary encoder",
      "Enable Canned Message": "Enable Canned Message",
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
      "Enable Smart Position": "Enable Smart Position",
      "Enable Store & Forward": "Enable Store & Forward",
      "Enable Store & Forward heartbeat": "Enable Store & Forward heartbeat",
      Encryption: "Encryption",
      "Encryption Enabled": "Encryption Enabled",
      "Enable or disable TLS": "Enable or disable TLS",
      "Enable or disable MQTT encryption. Note: All messages are sent to the MQTT broker unencrypted if this option is not enabled, even when your uplink channels have encryption keys set. This includes position data.":
        "Enable or disable MQTT encryption. Note: All messages are sent to the MQTT broker unencrypted if this option is not enabled, even when your uplink channels have encryption keys set. This includes position data.",
      "Enable or disable the Ethernet port":
        "Enable or disable the Ethernet port",
      "Enter Message": "Enter Message",
      "ESP32 Only": "ESP32 Only",
      "Ethernet Config": "Ethernet Config",
      "Ethernet port configuration": "Ethernet port configuration",
      "Ext Notif": "External Notification",
      "External Notification Settings": "External Notification Settings",
      "Factory Reset Config": "Factory Reset Config",
      "Factory Reset Device": "Factory Reset Device",
      "Fixed Position": "Fixed Position",
      "Friendly Name": "Friendly Name",
      Gateway: "Gateway",
      Generator: "Generator",
      Goto: "Goto",
      "GPS module TX pin override": "GPS module TX pin override",
      "GPS module enable pin override": "GPS module enable pin override",
      "GPIO Pin Value (1-39) For encoder port A":
        "GPIO Pin Value (1-39) For encoder port A",
      "GPIO Pin Value (1-39) For encoder port B":
        "GPIO Pin Value (1-39) For encoder port B",
      "GPIO Pin Value (1-39) For encoder Press":
        "GPIO Pin Value (1-39) For encoder Press",
      "GPIO pin to use for PTT": "GPIO pin to use for PTT",
      "GPS Update Interval": "GPS Update Interval",
      "GPS module RX pin override": "GPS module RX pin override",
      "GPS Mode": "GPS Mode",
      Green: "Green",
      "Heartbeat Enabled": "Heartbeat Enabled",
      "History return max": "History return max",
      "History return window": "History return window",
      "How long the device will be in super deep sleep for":
        "How long the device will be in super deep sleep for",
      "How long the device will be in light sleep for":
        "How long the device will be in light sleep for",
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
      "How often to send position updates":
        "How often to send position updates",
      "How often your position is sent out over the mesh":
        "How often your position is sent out over the mesh",
      "How often a GPS fix should be acquired":
        "How often a GPS fix should be acquired",
      "i2S WS": "i2S WS",
      "GPIO pin to use for i2S WS": "GPIO pin to use for i2S WS",
      "i2S SD": "i2S SD",
      "GPIO pin to use for i2S SD": "GPIO pin to use for i2S SD",
      "i2S SCK": "i2S SCK",
      "GPIO pin to use for i2S SCK": "GPIO pin to use for i2S SCK",
      "i2S DIN": "i2S DIN",
      "GPIO pin to use for i2S DIN": "GPIO pin to use for i2S DIN",
      "If not sharing precise location, position shared on channel will be accurate within this distance":
        "If not sharing precise location, position shared on channel will be accurate within this distance",
      'If true, device is considered to be "managed" by a mesh administrator via admin messages':
        'If true, device is considered to be "managed" by a mesh administrator via admin messages',
      "If you have a serial port connected to the console, this will override it.":
        "If you have a serial port connected to the console, this will override it.",
      "IP Address/Hostname": "IP Address/Hostname",
      "If the device does not receive a Bluetooth connection, the BLE radio will be disabled after this long":
        "If the device does not receive a Bluetooth connection, the BLE radio will be disabled after this long",
      Import: "Import",
      Intervals: "Intervals",
      "INA219 Address": "INA219 Address",
      "Interval to get telemetry data": "Interval to get telemetry data",
      "Interval in seconds of how often we should try to send our Neighbor Info to the mesh":
        "Interval in seconds of how often we should try to send our Neighbor Info to the mesh",
      "Interval in seconds to publish map reports":
        "Interval in seconds to publish map reports",
      IP: "IP",
      "IP Config": "IP Config",
      "IP configuration": "IP configuration",
      "JSON Enabled": "JSON Enabled",
      "LED State": "LED State",
      "Legal Information": "Legal Information",
      "Last Heard": "Last Heard",
      "Logging Settings": "Logging Settings",
      LoRa: "LoRa",
      "Light Sleep Duration": "Light Sleep Duration",
      "MAC Address": "MAC Address",
      Manage: "Manage",
      Managed: "Managed",
      "Manage, connect and disconnect devices":
        "Manage, connect and disconnect devices",
      Map: "Map",
      "Map Report Publish Interval (s)": "Map Report Publish Interval (s)",
      "Map Reporting Enabled": "Map Reporting Enabled",
      "Max number of records to return": "Max number of records to return",
      Messages: "Messages",
      "Message Interval": "Message Interval",
      "Minimum amount of time the device will stay awake for after receiving a packet":
        "Minimum amount of time the device will stay awake for after receiving a packet",
      "Minimum Broadcast Seconds": "Minimum Broadcast Seconds",
      "Minimum distance (in meters) that must be traveled before a position update is sent":
        "Minimum distance (in meters) that must be traveled before a position update is sent",
      "Minimum Wake Time": "Minimum Wake Time",
      "Minimum interval (in seconds) that must pass before a position update is sent":
        "Minimum interval (in seconds) that must pass before a position update is sent",
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
      "Network name": "Network name",
      "Network password": "Network password",
      Never: "Never",
      "New Connection": "New Connection",
      "No Devices": "No Devices",
      "New device": "New device",
      "No Connection Bluetooth Disabled": "No Connection Bluetooth Disabled",
      "No Messages": "No Messages",
      "No devices paired yet.": "No devices paired yet.",
      "No Traceroutes": "No Traceroutes",
      Nodes: "Nodes",
      "No results found.": "No results found.",
      "NTP Config": "NTP Config",
      "NTP configuration": "NTP configuration",
      "NTP Server": "NTP Server",
      "Number of records": "Number of records",
      "Number of records to store": "Number of records to store",
      "Only send position when there has been a meaningful change in location":
        "Only send position when there has been a meaningful change in location",
      Orange: "Orange",
      Output: "Output",
      "Output Buzzer": "Output Buzzer",
      "Output live debug logging over serial, view and export position-redacted device logs over Bluetooth":
        "Output live debug logging over serial, view and export position-redacted device logs over Bluetooth",
      "Output MS": "Output MS",
      "Output Vibrate": "Output Vibrate",
      "Override Console Serial Port": "Override Console Serial Port",
      Paxcounter: "Paxcounter",
      "Paxcounter Settings": "Paxcounter Settings",
      Pink: "Pink",
      "Please enter a valid bit PSK.":
        "Please enter a valid {{count}} bit PSK.",
      Position: "Position",
      "Position Flags": "Position Flags",
      "Position Settings": "Position Settings",
      Power: "Power",
      "Power Config": "Power Config",
      "Powered by ▲ Vercel": "Powered by ▲ Vercel",
      "Power Measurement Enabled": "Power Measurement Enabled",
      "Power Screen Enabled": "Power Screen Enabled",
      "Power Update Interval": "Power Update Interval",
      "Precise Location": "Precise Location",
      "pre-Shared Key": "pre-Shared Key",
      "Press event": "Press event",
      "Private Key": "Private Key",
      "Proxy to Client Enabled": "Proxy to Client Enabled",
      PSK: "PSK",
      "PTT Pin": "PTT Pin",
      "Public Key": "Public Key",
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
      "Rotary Encoder #1 Enabled": "Rotary Encoder #1 Enabled",
      "Rsyslog Config": "Rsyslog Config",
      "Rsyslog configuration": "Rsyslog configuration",
      "Rsyslog Server": "Rsyslog Server",
      "S&F": "S&F",
      "Save CSV to storage": "Save CSV to storage",
      "Schedule Reboot": "Schedule Reboot",
      "Schedule Shutdown": "Schedule Shutdown",
      "Seconds to wait before we consider your packet as 'done'":
        "Seconds to wait before we consider your packet as 'done'",
      Security: "Security",
      "Security Settings": "Security Settings",
      "Send Bell": "Send Bell",
      "Sends a bell character with each message":
        "Sends a bell character with each message",
      "Send ASCII bell with alert message":
        "Send ASCII bell with alert message",
      "Select if powered from a low-current source (i.e. solar), to minimize power consumption as much as possible.":
        "Select if powered from a low-current source (i.e. solar), to minimize power consumption as much as possible.",
      "Select Mode": "Select Mode",
      "Send messages from MQTT to the local mesh":
        "Send messages from MQTT to the local mesh",
      "Send messages from the local mesh to MQTT":
        "Send messages from the local mesh to MQTT",
      "Sent out to other nodes on the mesh to allow them to compute a shared secret key":
        "Sent out to other nodes on the mesh to allow them to compute a shared secret key",
      "Send position to channel": "Send position to channel",
      "Send precise location to channel": "Send precise location to channel",
      Serial: "Serial connection",
      "Serial Console over the Stream API":
        "Serial Console over the Stream API",
      "Serial Output Enabled": "Serial Output Enabled",
      "Serial Settings": "Serial Settings",
      "Sets LED to on or off": "Sets LED to on or off",
      "Set the GPIO pin to the RXD pin you have set up.":
        "Set the GPIO pin to the RXD pin you have set up.",
      "Settings for Logging": "Settings for Logging",
      "Settings for the power module": "Settings for the power module",
      "Settings for the Serial module": "Settings for the Serial module",
      "Settings for the Store & Forward module":
        "Settings for the Store & Forward module",
      "Settings for the Telemetry module": "Settings for the Telemetry module",
      "Settings for the Range Test module":
        "Settings for the Range Test module",
      "Settings for the Neighbor Info module":
        "Settings for the Neighbor Info module",
      "Settings for the MQTT module": "Settings for the MQTT module",
      "Settings for the Canned Message module":
        "Settings for the Canned Message module",
      "Settings for the Audio module": "Settings for the Audio module",
      "Settings for the position module": "Settings for the position module",
      "Show the Telemetry Module on the OLED":
        "Show the Telemetry Module on the OLED",
      "Settings for Admin": "Settings for Admin",
      "Settings for the Detection Sensor module":
        "Settings for the Detection Sensor module",
      "Should an alert be triggered when receiving an incoming bell?":
        "Should an alert be triggered when receiving an incoming bell?",
      "Smart Position Minimum Distance": "Smart Position Minimum Distance",
      "Smart Position Minimum Interval": "Smart Position Minimum Interval",
      SNR: "SNR",
      SSID: "SSID",
      "State Broadcast Seconds": "State Broadcast Seconds",
      "Select input event.": "Select input event.",
      "Sets the current for the LED output. Default is 10":
        "Sets the current for the LED output. Default is 10",
      "Sets the red LED level. Values are 0-255":
        "Sets the red LED level. Values are 0-255",
      "Sets the green LED level. Values are 0-255":
        "Sets the green LED level. Values are 0-255",
      "Sets the blue LED level. Values are 0-255":
        "Sets the blue LED level. Values are 0-255",
      "Shutdown on battery delay": "Shutdown on battery delay",
      "Sleep Settings": "Sleep Settings",
      "Sleep settings for the power module":
        "Sleep settings for the power module",
      "Store & Forward Settings": "Store & Forward Settings",
      Subnet: "Subnet",
      "Subnet Mask": "Subnet Mask",
      "Super Deep Sleep Duration": "Super Deep Sleep Duration",
      "Switch Node": "Switch Node",
      Telemetry: "Telemetry",
      "Telemetry Settings": "Telemetry Settings",
      "The public key authorized to send admin messages to this node":
        "The public key authorized to send admin messages to this node",
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
      Unknown: "Unknown",
      "Update Interval": "Update Interval",
      "Update Interval (seconds)": "Update Interval (seconds)",
      "Up Down enabled": "Up Down enabled",
      "Uplink Enabled": "Uplink Enabled",
      "Use I²S Pin as Buzzer": "Use I²S Pin as Buzzer",
      "Use Pullup": "Use Pullup",
      "Use PWM": "Use PWM",
      "Use TLS": "Use TLS",
      "Used for tweaking battery voltage reading":
        "Used for tweaking battery voltage reading",
      "Use the client's internet connection for MQTT (feature only active in mobile apps)":
        "Use the client's internet connection for MQTT (feature only active in mobile apps)",
      "Used to create a shared key with a remote device":
        "Used to create a shared key with a remote device",
      "Used to format the message sent to mesh, max 20 Characters":
        "Used to format the message sent to mesh, max 20 Characters",
      "Whether to send/consume JSON packets on MQTT":
        "Whether to send/consume JSON packets on MQTT",
      "[WIP] Clear Messages": "[WIP] Clear Messages",
      "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)":
        "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)",
      "Whether or not use INPUT_PULLUP mode for GPIO pin":
        "Whether or not use INPUT_PULLUP mode for GPIO pin",
      "WiFi Config": "WiFi Config",
      "WiFi radio configuration": "WiFi radio configuration",
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
      "ADC Multiplier Override ratio":
        "Ratio de remplacement du multiplicateur ADC",
      "Admin Key": "Clé d'administrateur",
      "Admin Settings": "Paramètres d'administrateur",
      "Address assignment selection": "Sélection de l'attribution d'adresse",
      "IP Address": "Adresse IP",
      "Address of the INA219 battery monitor":
        "Adresse du moniteur de batterie INA219",
      "Address Mode": "Mode d'adressage",
      "Air Quality Enabled": "Qualité de l'air activée",
      "Air Quality Update Interval":
        "Intervalle de mise à jour de la qualité de l'air",
      "Alert Message": "Message d'alerte",
      "Alert Bell": "Cloche d'alerte",
      "Alert Bell Buzzer": "Buzzer de la cloche d'alerte",
      "Alert Bell Vibrate": "Vibration de la cloche d'alerte",
      "Allow Input Source": "Autoriser la source d'entrée",
      "Allow incoming device control over the insecure legacy admin channel":
        "Autoriser le contrôle des appareils entrants sur le canal d'administration hérité non sécurisé",
      "Alert Message Buzzer": "Buzzer du message d'alerte",
      "Alert Message Vibrate": "Vibration du message d'alerte",
      "Allow Legacy Admin": "Autoriser l'administration héritée",
      "Allow Position Requests": "Autoriser les demandes de position",
      "Ambient Lighting": "Éclairage ambiant",
      "Any packets you send will be echoed back to your device":
        "Tous les paquets que vous envoyez seront renvoyés à votre appareil",
      Application: "Application",
      "Approximate Location": "Localisation approximative",
      Audio: "Audio",
      "Audio Settings": "Paramètres audio",
      "Automatically shutdown node after this long when on battery, 0 for indefinite":
        "Arrêt automatique du nœud après ce laps de temps lorsqu'il est sur batterie, 0 pour indéfini",
      "Baud Rate": "Débit en bauds",
      Bitrate: "Débit binaire",
      "Bitrate to use for audio encoding":
        "Débit binaire à utiliser pour le codage audio",
      BLE: "Connexion Bluetooth",
      blue: "bleu",
      Bluetooth: "Bluetooth",
      "Broadcast Interval": "Intervalle de diffusion",
      Canned: "Message prédéfini",
      "Canned Message Settings": "Paramètres du message prédéfini",
      "Channel Settings": "Paramètres du canal",
      Channels: "Canaux",
      "Clockwise event": "Événement dans le sens des aiguilles d'une montre",
      "Codec 2 Enabled": "Codec 2 activé",
      "Connect New Node": "Connecter un nouveau noeud",
      Config: "Configuration",
      "Configuration options for Position messages":
        "Options de configuration pour les messages de position",
      "Configure the external notification module":
        "Configurer le module de notification externe",
      "Configure whether device GPS is Enabled, Disabled, or Not Present":
        "Configurez si le GPS de l'appareil est activé, désactivé ou non présent",
      "Connect at least one device to get started":
        "Connectez au moins un appareil pour commencer",
      "Connected Devices": "Appareils connectés",
      "Connecting...": "Connexion...",
      Connected: "Connecté",
      Connection: "Connexion",
      Contextual: "Contextuel",
      "Counter Clockwise event":
        "Événement dans le sens inverse des aiguilles d'une montre",
      Current: "Courant",
      "Crypto, MQTT & misc settings": "Cryptage, MQTT et autres paramètres",
      "Device telemetry is sent over PRIMARY. Only one PRIMARY allowed":
        "Les données de télémétrie de l'appareil sont envoyées via PRIMARY. Un seul PRIMARY est autorisé",
      Debug: "Débogage",
      "Default Gateway": "Passerelle par défaut",
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
      DNS: "DNS",
      "DNS Server": "Serveur DNS",
      "Don't report GPS position, but a manually-specified one":
        "Ne signalez pas la position GPS, mais une position spécifiée manuellement",
      "Downlink Enabled": "Transmission descendante activée",
      Echo: "Écho",
      Enabled: "Activé",
      "Enable or disable the WiFi radio": "Activer ou désactiver la radio WiFi",
      "Unable to Connect:": "Impossible de se connecter :",
      "Encoder Pin A": "Broche de l'encodeur A",
      "Encoder Pin B": "Broche de l'encodeur B",
      "Encoder Pin Press": "Broche de l'encodeur Press",
      "Enable power saving mode": "Activer le mode d'économie d'énergie",
      "Enable Debug Log API": "Activer l'API de journal de débogage",
      "Enable the up / down encoder": "Activer l'encodeur haut / bas",
      "Enable Canned Message": "Activer le message prédéfini",
      "Enable External Notification": "Activer la notification externe",
      "Enable Codec 2 audio encoding": "Activer le codage audio Codec 2",
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
      "Enable Smart Position": "Activer la position intelligente",
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
      "Enable or disable the Ethernet port":
        "Activer ou désactiver le port Ethernet",
      "Enable the rotary encoder": "Activer l'encodeur rotatif",
      "Enter Message": "Entrer le message",
      Encryption: "Chiffrement",
      "Encryption Enabled": "Chiffrement activé",
      "Ethernet Config": "Configuration Ethernet",
      "Ethernet port configuration": "Configuration du port Ethernet",
      "Ext Notif": "Notification externe",
      "External Notification Settings": "Paramètres de notification externe",
      "Enable Serial output": "Activer la sortie série",
      "ESP32 Only": "ESP32 uniquement",
      "Factory Reset Config": "Réinitialiser la configuration d'usine",
      "Factory Reset Device": "Réinitialiser l'appareil aux paramètres d'usine",
      "Fixed Position": "Position fixe",
      "Friendly Name": "Nom convivial",
      Gateway: "Passerelle",
      Generator: "Générateur",
      Goto: "Aller à",
      "GPIO Pin Value (1-39) For encoder port A":
        "Valeur de la broche GPIO (1-39) pour le port A de l'encodeur",
      "GPIO Pin Value (1-39) For encoder port B":
        "Valeur de la broche GPIO (1-39) pour le port B de l'encodeur",
      "GPIO Pin Value (1-39) For encoder Press":
        "Valeur de la broche GPIO (1-39) pour l'encodeur Press",
      "GPIO pin to use for PTT": "Broche GPIO à utiliser pour PTT",
      "GPS module RX pin override":
        "Remplacement de la broche RX du module GPS",
      "GPS Mode": "Mode GPS",
      "GPS module TX pin override":
        "Remplacement de la broche TX du module GPS",
      "GPS module enable pin override":
        "Remplacement de la broche d'activation du module GPS",
      "GPS Update Interval": "Intervalle de mise à jour GPS",
      Green: "Vert",
      "Heartbeat Enabled": "Battement de coeur activé",
      "History return max": "Historique retour max",
      "History return window": "Historique retour fenêtre",
      "How long the device will be in super deep sleep for":
        "Combien de temps l'appareil sera en sommeil profond",
      "How long to wait between sending test packets":
        "Combien de temps attendre entre l'envoi des paquets de test",
      "How long the device will be in light sleep for":
        "Combien de temps l'appareil sera en sommeil léger",
      "How long to wait between sending paxcounter packets":
        "Combien de temps attendre entre l'envoi des paquets de paxcounter",
      "How often to send Air Quality data over the mesh":
        "Fréquence d'envoi des données de qualité de l'air sur le maillage",
      "How often to send Metrics over the mesh":
        "Fréquence d'envoi des métriques sur le maillage",
      "How often to send Power data over the mesh":
        "Fréquence d'envoi des données de puissance sur le maillage",
      "How often to send position updates":
        "Fréquence d'envoi des mises à jour de position",
      "How often your position is sent out over the mesh":
        "Fréquence à laquelle votre position est envoyée sur le maillage",
      "How often a GPS fix should be acquired":
        "Fréquence à laquelle un fix GPS doit être acquis",
      "i2S WS": "i2S WS",
      "GPIO pin to use for i2S WS": "Broche GPIO à utiliser pour i2S WS",
      "i2S SD": "i2S SD",
      "GPIO pin to use for i2S SD": "Broche GPIO à utiliser pour i2S SD",
      "i2S SCK": "i2S SCK",
      "GPIO pin to use for i2S SCK": "Broche GPIO à utiliser pour i2S SCK",
      "i2S DIN": "i2S DIN",
      "GPIO pin to use for i2S DIN": "Broche GPIO à utiliser pour i2S DIN",
      "If not sharing precise location, position shared on channel will be accurate within this distance":
        "Si la localisation précise n'est pas partagée, la position partagée sur le canal sera précise dans cette distance",
      'If true, device is considered to be "managed" by a mesh administrator via admin messages':
        "Si vrai, l'appareil est considéré comme \"géré\" par un administrateur de maillage via des messages d'administration",
      "If you have a serial port connected to the console, this will override it.":
        "Si vous avez un port série connecté à la console, cela le remplacera.",
      "IP Address/Hostname": "Adresse IP/Nom d'hôte",
      "If the device does not receive a Bluetooth connection, the BLE radio will be disabled after this long":
        "Si l'appareil ne reçoit pas de connexion Bluetooth, la radio BLE sera désactivée après ce laps de temps",
      Import: "Importer",
      "INA219 Address": "Adresse INA219",
      Intervals: "Intervalles",
      "Interval to get telemetry data":
        "Intervalle pour obtenir les données de télémétrie",
      "Interval in seconds of how often we should try to send our Neighbor Info to the mesh":
        "Intervalle en secondes de la fréquence à laquelle nous devrions essayer d'envoyer nos informations de voisinage au maillage",
      "Interval in seconds to publish map reports":
        "Intervalle en secondes pour publier les rapports de carte",
      IP: "IP",
      "IP Config": "Configuration IP",
      "IP configuration": "Configuration IP",
      "JSON Enabled": "JSON activé",
      "Last Heard": "Dernière connexion",
      "LED State": "État de la LED",
      "Legal Information": "Informations légales",
      "Logging Settings": "Paramètres de journalisation",
      LoRa: "LoRa",
      "Light Sleep Duration": "Durée du sommeil léger",
      "MAC Address": "Adresse MAC",
      Manage: "Gérer",
      Managed: "Géré",
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
      "Minimum amount of time the device will stay awake for after receiving a packet":
        "Durée minimale pendant laquelle l'appareil restera éveillé après avoir reçu un paquet",
      "Minimum Broadcast Seconds": "Secondes de diffusion minimales",
      "Minimum distance (in meters) that must be traveled before a position update is sent":
        "Distance minimale (en mètres) qui doit être parcourue avant qu'une mise à jour de position ne soit envoyée",
      "Minimum Wake Time": "Temps de réveil minimum",
      "Minimum interval (in seconds) that must pass before a position update is sent":
        "Intervalle minimum (en secondes) qui doit s'écouler avant qu'une mise à jour de position ne soit envoyée",
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
      "Network name": "Nom du réseau",
      "Network password": "Mot de passe du réseau",
      Never: "Jamais",
      "New Connection": "Nouvelle connexion",
      "New device": "Nouvel appareil",
      "No Connection Bluetooth Disabled":
        "Pas de connexion Bluetooth désactivée",
      "No Devices": "Aucun appareil",
      Nodes: "Noeuds",
      "Monitor Pin": "Broche de surveillance",
      "No Messages": "Aucun message",
      "No Traceroutes": "Aucun traceroute",
      "No devices paired yet.": "Aucun appareil appairé pour le moment.",
      "No results found.": "Aucun résultat trouvé.",
      "NTP Config": "Configuration NTP",
      "NTP configuration": "Configuration NTP",
      "NTP Server": "Serveur NTP",
      "Number of records": "Nombre d'enregistrements",
      "Number of records to store": "Nombre d'enregistrements à stocker",
      "Only send position when there has been a meaningful change in location":
        "Envoyer la position uniquement lorsqu'il y a eu un changement significatif de position",
      Orange: "Orange",
      Output: "Sortie",
      "Output Buzzer": "Buzzer de sortie",
      "Output live debug logging over serial, view and export position-redacted device logs over Bluetooth":
        "Journalisation de débogage en direct sur la sortie série, affichage et exportation des journaux d'appareils caviardés par position via Bluetooth",
      "Output MS": "Sortie MS",
      "Output Vibrate": "Vibration de sortie",
      "Override Console Serial Port": "Remplacer le port série de la console",
      Paxcounter: "Paxcounter",
      "Paxcounter Settings": "Paramètres de Paxcounter",
      Pink: "Rose",
      "Please enter a valid bit PSK.":
        "Veuillez entrer un PSK valide de {{count]} bits.",
      Position: "Position",
      "Position Flags": "Drapeaux de position",
      "Position Settings": "Paramètres de position",
      Power: "Alimentation",
      "Power Config": "Configuration de l'alimentation",
      "Powered by ▲ Vercel": "Propulsé par ▲ Vercel",
      "Power Measurement Enabled": "Mesure de puissance activée",
      "Power Screen Enabled": "Affichage de la puissance activé",
      "Power Update Interval": "Intervalle de mise à jour de la puissance",
      "Precise Location": "Localisation précise",
      "pre-Shared Key": "Clé pré-partagée",
      "Press event": "Événement de pression",
      "Private Key": "Clé privée",
      "Proxy to Client Enabled": "Proxy to Client Enabled",
      PSK: "PSK",
      "PTT Pin": "Broche PTT",
      "Public Key": "Clé publique",
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
      "Rsyslog Config": "Configuration Rsyslog",
      "Rsyslog configuration": "Configuration Rsyslog",
      "Rsyslog Server": "Serveur Rsyslog",
      Role: "Rôle",
      "Root topic": "Sujet racine",
      "Rotary Encoder #1 Enabled": "Encodeur rotatif #1 activé",
      "S&F": "S&F",
      "Save CSV to storage": "Enregistrer le CSV dans le stockage",
      "Schedule Reboot": "Planifier le redémarrage",
      "Schedule Shutdown": "Planifier l'arrêt",
      "Seconds to wait before we consider your packet as 'done'":
        "Secondes à attendre avant de considérer votre paquet comme 'terminé'",
      Security: "Sécurité",
      "Security Settings": "Paramètres de sécurité",
      "Send ASCII bell with alert message":
        "Envoyer une cloche ASCII avec un message d'alerte",
      "Select if powered from a low-current source (i.e. solar), to minimize power consumption as much as possible.":
        "Sélectionnez si alimenté par une source de faible courant (par exemple solaire), pour minimiser la consommation d'énergie autant que possible.",
      "Select Mode": "Sélectionner le mode",
      "Select input event.": "Sélectionner l'événement d'entrée.",
      "Send Bell": "Envoyer une cloche",
      "Sends a bell character with each message":
        "Envoie un caractère de cloche avec chaque message",
      "Send messages from MQTT to the local mesh":
        "Envoyer des messages de MQTT au maillage local",
      "Send messages from the local mesh to MQTT":
        "Envoyer des messages du maillage local à MQTT",
      "Sent out to other nodes on the mesh to allow them to compute a shared secret key":
        "Envoyé à d'autres nœuds sur le maillage pour leur permettre de calculer une clé secrète partagée",
      "Send position to channel": "Envoyer la position au canal",
      "Send precise location to channel":
        "Envoyer la localisation précise au canal",
      Serial: "Connexion série",
      "Serial Console over the Stream API": "Console série via l'API de flux",
      "Serial Output Enabled": "Sortie série activée",
      "Serial Settings": "Paramètres série",
      "Sets LED to on or off": "Définit la LED sur marche ou arrêt",
      "Sets the red LED level. Values are 0-255":
        "Définit le niveau de la LED rouge. Les valeurs sont de 0 à 255",
      "Sets the green LED level. Values are 0-255":
        "Définit le niveau de la LED verte. Les valeurs sont de 0 à 255",
      "Sets the blue LED level. Values are 0-255":
        "Définit le niveau de la LED bleue. Les valeurs sont de 0 à 255",
      "Sets the current for the LED output. Default is 10":
        "Définit le courant pour la sortie LED. La valeur par défaut est 10",
      "Set the GPIO pin to the RXD pin you have set up.":
        "Définissez la broche GPIO sur la broche RXD que vous avez configurée.",
      "Settings for Logging": "Paramètres de journalisation",
      "Settings for Admin": "Paramètres pour l'administrateur",
      "Settings for the power module":
        "Paramètres pour le module d'alimentation",
      "Settings for the Serial module": "Paramètres du module série",
      "Settings for the position module":
        "Paramètres pour le module de position",
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
      "Settings for the Canned Message module":
        "Paramètres du module de message prédéfini",
      "Settings for the Audio module": "Paramètres du module audio",
      "Show the Telemetry Module on the OLED":
        "Afficher le module de télémétrie sur l'OLED",
      "Should an alert be triggered when receiving an incoming bell?":
        "Un alerte doit-elle être déclenchée lors de la réception d'une cloche entrante ?",
      "Shutdown on battery delay": "Arrêt sur délai de batterie",
      "Sleep Settings": "Paramètres de veille",
      "Sleep settings for the power module":
        "Paramètres de veille pour le module d'alimentation",
      "Smart Position Minimum Distance":
        "Distance minimale de la position intelligente",
      "Smart Position Minimum Interval":
        "Intervalle minimum de la position intelligente",
      SNR: "SNR",
      "State Broadcast Seconds": "Secondes de diffusion d'état",
      "Store & Forward Settings": "Paramètres de stockage et de transmission",
      Subnet: "Sous-réseau",
      "Subnet Mask": "Masque de sous-réseau",
      "Super Deep Sleep Duration": "Durée de sommeil super profond",
      SSID: "SSID",
      "Switch Node": "Changer de noeud",
      Telemetry: "Télémétrie",
      "Telemetry Settings": "Paramètres de télémétrie",
      "The public key authorized to send admin messages to this node":
        "La clé publique autorisée à envoyer des messages d'administration à ce nœud",
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
      "Up Down enabled": "Haut Bas activé",
      Unknown: "Inconnu",
      "Uplink Enabled": "Transmission montante activée",
      "Use I²S Pin as Buzzer": "Utiliser la broche I²S comme buzzer",
      "Used for tweaking battery voltage reading":
        "Utilisé pour ajuster la lecture de la tension de la batterie",
      "Use Pullup": "Utiliser le pullup",
      "Use PWM": "Utiliser le PWM",
      "Use TLS": "Utiliser TLS",
      "Use the client's internet connection for MQTT (feature only active in mobile apps)":
        "Utiliser la connexion Internet du client pour MQTT (fonctionnalité uniquement active dans les applications mobiles)",
      "Used to format the message sent to mesh, max 20 Characters":
        "Utilisé pour formater le message envoyé au maillage, max 20 caractères",
      "Used to create a shared key with a remote device":
        "Utilisé pour créer une clé partagée avec un appareil distant",
      "Whether to send/consume JSON packets on MQTT":
        "Envoyer/consommer des paquets JSON sur MQTT",
      "Whether or not the GPIO pin state detection is triggered on HIGH (1), otherwise LOW (0)":
        "Détermine si la détection de l'état de la broche GPIO est déclenchée sur HIGH (1), sinon LOW (0)",
      "Whether or not use INPUT_PULLUP mode for GPIO pin":
        "Utiliser ou non le mode INPUT_PULLUP pour la broche GPIO",
      "WiFi Config": "Configuration WiFi",
      "WiFi radio configuration": "Configuration de la radio WiFi",
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
