import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hi, this is my First Application for Mobile Applications.</Text>
      <Text> My name is Joshua Reynoso, and over the summer I had alot of fun with my family and played a lot of video games. My favorite mobile application is TikTok or YouTube, because I doomscroll alot on there. The videos can be educational or just funny, but it is still very cool to see a bit of an entire culture of the internet on your phone like that. </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#416b6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
