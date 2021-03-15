import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      console.log("Fetched Location Successfully", latitude, longitude);
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
