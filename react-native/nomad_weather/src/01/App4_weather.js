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

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
// console.log(WEATHER_API_KEY);

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

    /* weather API */
    // API 불러오기
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    const json = await response.json(); // json -> 배열로 파싱
    // console.log(json);

    const filteredList = json.list.filter(
      ({ dt_txt }) => dt_txt.endsWith("00:00:00"), // 0시의 데이터만 추출(하루 간격)
    );
    // console.log(JSON.stringify(filteredList, null, 2));

    // 3~4일 간격의 0시 날씨 데이터 리스트를 최종적으로 days에 저장
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
        {/* 날씨 데이터 값이 없다면 ActivityIndicator (로딩 로고) 표시 
        그게 아니라면 화면에 날씨 리스트 출력
        */}
        {days.length === 0 ? (
          // ActivityIndicator: 움직이는 로딩 원 (컬러와 크기 등 조정가능)
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              size="large"
              style={{ marginTop: 10 }}
            ></ActivityIndicator>
          </View>
        ) : (
          // days에 저장된 날씨 데이터를 기반으로 화면에 띄움
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.temp}>
                {parseFloat(day.main.temp).toFixed(1)}
              </Text>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
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
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 137,
    fontWeight: 600,
    color: "beige",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    fontWeight: 500,
  },
  tinyText: {
    fontSize: 28,
  },
});
