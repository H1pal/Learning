import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  // locaion에서 도시 이름 정보만 추출하여 상태 관리
  const [city, setCity] = useState(null);
  // const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);

  // 사용자의 location을 가져오는 함수
  // API값으로 promise를 반환하므로 비동기로 처리 (async, await)
  const getPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    // 사용자가 위치 권한 설정에 요청을 보내고 반응값을 불러옴
    // console.log(permission);
    if (permission.status !== "granted") {
      // 만약 접근 권한이 허용되지 않는다면
      console.log("Permission to access location was denied");
      setOk(false);
      return;
    }

    // 현재 위치 좌표 가져오기
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    // 해당 좌표값의 지역 정보 가져오기
    const location = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    // console.log(location);
    setCity(location[0].city);
  };

  useEffect(() => {
    getPermission();
  }, []);
  // dep: (빈 배열) mount 시에만 사용자 권한 요청 보내기

  // 화면에 띄울 text
  let text = "Waiting...";
  if (!ok) {
    text = "Permission to access location was denied";
  } else if (city) {
    text = city;
  }

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        {/* location의 내용을 화면에 출력 */}
        <Text style={styles.cityName}>{text}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
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
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
