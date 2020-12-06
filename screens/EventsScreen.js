import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Container,
    Content,
    List,
    ListItem,
    Left,
    Thumbnail,
    Body,
    Text,
    View,
    Button,
  } from "native-base";

  const eventsData = [
    {
      event: "Finance 101 Workshop",
      speaker: "Mr. Tay Xiang You",
      date: "25/12/2020",
      time: "1 pm",
      venue: "SMU School of Finance L1R2",
      pic: require("./images/finance101.jpg"),
      title: "Finance 101 Introduction",
      intro: "Take part in this Finance 101 workshop conducted by Mr. Tay Xiang You, where he will be speaking with you on personal financial management, common finance terminology used, latest news on digitalization (blockchain) and more." + "\n" +
      "Mr. Tay is an avid investor with more than 10 years of experience with established banks such as StandChart and OCBC, holding roles such as senior relationship manager, personal financial consultant, and credit analyst." + "\n" +
      "Seats are limited to 10 so sign up now!"
    },
    {
        event: "Data Analytics",
        speaker: "Mr. Ken Tang",
        date: "01/01/2021",
        time: "11 am",
        venue: "Singapore Polytechnic Business Block L3",
        pic: require("./images/datanalyatics.jpg"),
        title: "Introduction to Data Analytics",
        intro: "Fall into the web of massive data and learn to manipulate them to gain insight to relevant industry ........"
      },
  ];

function EventsHomeScreen({ navigation }) {
    return (
    <Container>
      <Content>
        <List>
          {eventsData.map((item) => (
            <ListItem avatar key={item.event} onPress={() => navigation.navigate("Event Details")} title="Event Details">
              <Left>
                <Thumbnail source={item.pic} />
              </Left>
              <Body>
                <Text>{item.event}</Text>
                <Text note>
                  By: {item.speaker}{'\n'}
                  Date: {item.date}{'\n'}
                  Time: {item.time}{'\n'}
                  Venue: {item.venue}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
    );
}

function EventsDetailScreen({ navigation }) {
    return (
        <View>
          {eventsData.map((item) => (
            <ListItem avatar key={item.event}>
              <Left>
                <Thumbnail source={item.pic} />
              </Left>
              <Body>
                <Text>{item.event}</Text>
                <Text note>
                  By: {item.speaker}{'\n'}
                  Date: {item.date}{'\n'}
                  Time: {item.time}{'\n'}
                  Venue: {item.venue}
                </Text>
              </Body>
            </ListItem>
            ))}
          {eventsData.map((item) => (<Text style={styles.titleText}>{item.title}</Text>))}
          {eventsData.map((item) => (<Text>{item.intro}</Text>))}
            <Button style={styles.button} onPress={() => navigation.navigate("Sign Up Page")}><Text>Sign Up Now!</Text></Button>
        </View>
    );
}

const Stack = createStackNavigator()

export default function EventsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Events" component={EventsHomeScreen} />
            <Stack.Screen name="Event Details" component={EventsDetailScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "left",
      marginTop: 12,
      marginBottom: 12,
      textDecorationLine: "underline",
    },
    button: {
      alignSelf: "center",
      marginTop: 50,
    },
   });