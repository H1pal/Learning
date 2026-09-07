import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

// 날씨에 따른 아이콘 이름
const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Rain: "rain",
  Snow: "snow",
  Drizzle: "rains",
  ThunderStorm: "lihgtning",
  Atmosphere: "cloudy-gusts",
};

export default function App() {
  const [city, setCity] = useState(null);
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission.status !== "granted") {
      console.log("Permission to access location was denied");
      setOk(false);
      return;
    }

    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    [latitude, longitude] = [37.56, 126.97];
    // (에뮬레이터 설정하기 귀찮아서 값 직접 넣음)

    const location = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const json = await response.json();

    const filteredList = json.list.filter(({ dt_txt }) =>
      dt_txt.endsWith("00:00:00"),
    );
    console.log(JSON.stringify(filteredList, null, 2));

    setDays(filteredList);
  };

  useEffect(() => {
    getPermission();
  }, []);

  let text = "Waiting...";
  if (!ok) {
    text = "Permission to access location was denied";
  } else if (city) {
    text = city;
  }

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{text}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{ marginTop: 10 }}
            ></ActivityIndicator>
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "aliceblue",
                  }}
                >
                  {day.dt_txt.split(" ")[0]}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.temp}>
                  {parseFloat(day.main.temp).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main] ?? ""}
                  size={50}
                  color="white"
                />
              </View>

              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={{ ...styles.tinyText, marginTop: -10 }}>
                {day.weather[0].description}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  temp: {
    marginTop: 50,
    fontSize: 128,
    fontWeight: 500,
    color: "white",
  },
  description: {
    marginTop: -20,
    fontSize: 45,
    fontWeight: 500,
  },
  tinyText: {
    fontSize: 28,
  },
});
