import * as React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, CardItem, Body, Accordion } from "native-base";

const dataArray = [
    {
      title: "Why do we invest?",
      content: `Personal finance involves managing your Income, Spending, Insurance, Savings and Investments.
If you are reading this now, you are probably looking to invest to grow your money.
With the core inflation rate at 1.9% in Singapore on average, investing sounds more attractive than the meagre 0.05% interest earned in your savings account.`,
    },
    {
      title: "Introduction to types of investments.",
      content:
      "In this introduction, we will bring you through some of the basic investment products, some of which you might have already heard of, below."
    },
    {
      title: "1.\t Singapore Savings Bonds",
      content:
      <Text>
        <Text style={{ fontStyle: "italic" }}>For: Risk free; Individuals who are risk-averse and want high liquidity.{'\n'}{'\n'}</Text>
        The Singapore Savings Bonds (SSB) is one of the more common options for Singaporeans to invest their money in as it usually offers a higher return as compared to bank fixed deposits.{'\n'}{'\n'}
        SSB are Singapore goverment-backed bonds and they can be redempt on a monthly basis, hence giving it significant assurance and liquidity to any retail investor.{'\n'}{'\n'}
        It is thus considered one of the easier ways for risk-averse investors to combat the prevailing inflation rate (1.9%) with low barrier of entry.{'\n'}{'\n'}
        Due to their higher returns vis-a-vis with traditional savings account, it is suitable even to risky investors who are looking to park their extra funds aside while awaiting opportunities.{'\n'}{'\n'}
        Do note however that the downside relys heavily on the state of the economy and interest rates policies.{'\n'}{'\n'}
        SSB are offered by MAS on a monthly basis. More information on SSB and prevailing rates for respective issue month can be found on <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://www.mas.gov.sg/bonds-and-bills/Singapore-Savings-Bonds')}>MAS website</Text>.
      </Text>,
    },
    {
      title: "2.\t Exchange Traded Funds",
      content: 
      <Text>
        <Text style={{ fontStyle: "italic" }}>For: Medium risk; Individuals who want to diversify at lower costs.{'\n'}{'\n'}</Text>
        An ETF, or exchange-traded fund, is an investment that commonly tracks the performance of an underlying index.{'\n'}{'\n'}
        By investing in an ETF, investors can get access to a range of companies within the ETF and is more cost-effective instead of trying to pick individual companies. They are traded on a stock exchange and can be purchase the same way you would for any stock.{'\n'}{'\n'}
        Due to the nature of such funds, they are also highly diversified and can bring down the overall risk exposure to the investor.{'\n'}{'\n'}
        There are many different types of funds but the STI ETF and Nikko AM ETF are two popular ones that tracks the Straits Times Index (STI), which consists of 30 blue chip components traded on SGX.{'\n'}{'\n'}
        These ETFs are a great way for investors looking to invest into a pool of different blue chip companies with good return and diversication.
      </Text>,
    },
    {
      title: "3.\t Equity Stocks",
      content: 
      <Text>
        <Text style={{ fontStyle: "italic" }}>For: High Risk; Individuals who are risk-seeking and want more than just to beat inflation.{'\n'}{'\n'}</Text>
        <Text style={{ fontWeight: "bold" }}>
        Common Myth: “High Risk, High Returns”?{'\n'}
        Truth: High Risks ≠ High Returns.{'\n'}{'\n'}
        </Text>
        Higher risks can POTENTIALLY give you higher returns, but know that it is not always an equal sign. The potential for upside returns is also the potential for downside returns.{'\n'}{'\n'}
        Be prepared that your capital can turn to zero if the company goes bust. But of course, if it goes well, your initial capital can also grow to a lot more.{'\n'}{'\n'}
        <Text style={{ fontWeight: "bold" }}>
        What Are Stocks?{'\n'}{'\n'}
        </Text>
        Stocks (also known as shares or equities) are a type of investment available on the stock market that gives you part ownership of a listed company.{'\n'}{'\n'}
        ..........explanation is too long, i will just stop here.....
      </Text>
      ,
    },
    {
      title: "4.\t REITs",
      content: "Real Estate Investment Trusts......",
    },
    {
      title: "5.\t Alternative Investments",
      content: "Cryto, gold, jewellery, luxury watches, alcohol, etc........",
    },
   ];

function HomeHomeScreen() {
 return (
  <ScrollView>
   <View style={styles.container}>
     <Text style={styles.titleText}>Investment Beginner 101</Text>
     <Card>
       <CardItem>
         <Body>
           <Text style={styles.cardText}>
             Investment Beginner 101 is a beginner's guide to investment that introduces you to some of the basic investment products, what they & how they work.
           </Text>
         </Body>
       </CardItem>
       <CardItem cardBody>
         <Image source={require('./images/homepage.jpg')}
           style={{ height: 200, width: null, flex: 1 }}
         />
       </CardItem>
     </Card>
     <Accordion
             dataArray={dataArray}
             expanded={0}
           />
   </View>
   </ScrollView>
 );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
 return (
   <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeHomeScreen} />
   </Stack.Navigator>
 );
}

const styles = StyleSheet.create({
 container: {
   padding: 10,
 },
 titleText: {
   fontSize: 30,
   fontWeight: "bold",
   textAlign: "center",
   marginBottom: 12,
 },
 cardText: {
   fontSize: 18,
   marginBottom: 12,
 },
});