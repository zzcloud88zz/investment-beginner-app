import * as React from "react";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Lu ShengRong",
    title: "Founder",
    company: "The Investment Mojo",
    pic: require("./images/profilepic.jpg"),
  },
  {
    name: "Edward Lee",
    title: "Co-founder",
    company: "The Investment Mojo",
    pic: require("./images/profilepic_2.jpg"),
  },
];

export default function ContactScreen() {
  return (
    <Container>
      <Content>
        <List>
          {contactsData.map((item) => (
            <ListItem avatar key={item.name}>
              <Left>
                <Thumbnail source={item.pic} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>
                  {item.title}, {item.company}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}