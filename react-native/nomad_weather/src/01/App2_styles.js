import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

// Dimensions API를 통해 화면의 너비와 높이를 불러올 수 있음
const { width: SCREEN_WIDTH } = Dimensions.get("window");
// window.width를 SCREEN_WIDTH라는 이름으로 받아들인다는 의미

export default function App() {
  return (
    <View
      style={
        styles.container
        /*{ flex: 1, backgroundColor: "tomato"}*/
      }
    >
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        // indicatorStyle="white"
        // persistentScrollbar
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
      {/* React Native는 컴포넌트로 이루어져 있기 때문에 
      다른 플랫폼과 다르게 화면에 아이템이 초과하여도 
      자동으로 스크롤 되지 않음 */}
      {/* => ScrollView 컴포넌트를 통해 스크롤을 해결 */}
      {/* ScrollView:
      horizontal: 좌우로 스크롤
      pagingEnabled: 요소 자체의 크기를 기준으로 페이지 동작을 자연스럽게 함
      showsHorizontalScrollIndicator: 스크롤 표시바 표시 유무
      indicatorStyle: (iOS 전용) 스크롤 표시바 색상
      persistentScrollbar: (Android 전용) 스크롤 표시바가 항상 유지되게 함
       */}
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
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    // flex: 3,
    // backgroundColor: "blue",
  },
  day: {
    width: SCREEN_WIDTH,
    // flex: 1,
    // backgroundColor: "teal",
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
