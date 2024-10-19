import type { DeviceValidation } from "@app/validation/config/device.tsx";
import { DynamicForm } from "@components/Form/DynamicForm.tsx";
import { useDevice } from "@core/stores/deviceStore.ts";
import { Protobuf } from "@meshtastic/js";

export const Device = (): JSX.Element => {
  const { config, setWorkingConfig } = useDevice();

  const onSubmit = (data: DeviceValidation) => {
    setWorkingConfig(
      new Protobuf.Config.Config({
        payloadVariant: {
          case: "device",
          value: data,
        },
      }),
    );
  };

  return (
    <DynamicForm<DeviceValidation>
      onSubmit={onSubmit}
      defaultValues={config.device}
      fieldGroups={[
        {
          label: "Device Settings",
          description: "Settings for the device",
          fields: [
            {
              type: "select",
              name: "role",
              label: "Role",
              description: "What role the device performs on the mesh",
              properties: {
                enumValue: {
                  Client: Protobuf.Config.Config_DeviceConfig_Role.CLIENT,
                  "Client Mute":
                    Protobuf.Config.Config_DeviceConfig_Role.CLIENT_MUTE,
                  Router: Protobuf.Config.Config_DeviceConfig_Role.ROUTER,
                  Repeater: Protobuf.Config.Config_DeviceConfig_Role.REPEATER,
                  Tracker: Protobuf.Config.Config_DeviceConfig_Role.TRACKER,
                  Sensor: Protobuf.Config.Config_DeviceConfig_Role.SENSOR,
                  TAK: Protobuf.Config.Config_DeviceConfig_Role.TAK,
                  "Client Hidden":
                    Protobuf.Config.Config_DeviceConfig_Role.CLIENT_HIDDEN,
                  "Lost and Found":
                    Protobuf.Config.Config_DeviceConfig_Role.LOST_AND_FOUND,
                  "TAK Tracker":
                    Protobuf.Config.Config_DeviceConfig_Role.TAK_TRACKER,
                },
                formatEnumName: true,
              },
            },
            {
              type: "number",
              name: "buttonGpio",
              label: "Button Pin",
              description: "Button pin override",
            },
            {
              type: "number",
              name: "buzzerGpio",
              label: "Buzzer Pin",
              description: "Buzzer pin override",
            },
            {
              type: "select",
              name: "rebroadcastMode",
              label: "Rebroadcast Mode",
              description: "How to handle rebroadcasting",
              properties: {
                enumValue: Protobuf.Config.Config_DeviceConfig_RebroadcastMode,
                formatEnumName: true,
              },
            },
            {
              type: "number",
              name: "nodeInfoBroadcastSecs",
              label: "Node Info Broadcast Interval",
              description: "How often to broadcast node info",
              properties: {
                suffix: "Seconds",
              },
            },
            {
              type: "toggle",
              name: "doubleTapAsButtonPress",
              label: "Double Tap as Button Press",
              description: "Treat double tap as button press",
            },
            {
              type: "toggle",
              name: "disableTripleClick",
              label: "Disable Triple Click",
              description: "Disable triple click",
            },
          ],
        },
      ]}
    />
  );
};
