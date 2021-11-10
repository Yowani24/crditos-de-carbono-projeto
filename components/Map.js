import React from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  return (
    <>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: "100%", height: "100%" }}
          loadingEnabled
          initialRegion={{
            latitude: -18.55532,
            latitudeDelta: 0.1,
            longitude: -45.21109,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{
              latitude: -18.55532,
              longitude: -45.21109,
            }}
            pinColor={"red"}
            title={"Fazenda Buriti Grande"}
          />
        </MapView>
      </View>
    </>
  );
};

export default Map;
