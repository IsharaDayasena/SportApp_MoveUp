import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import Card from '../../components/Card';
import { useRoute } from '@react-navigation/native';
import { useCustomContext } from '@/contexts/Context';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  type RouteParams = {
    username?: string;
  };

  const route = useRoute();
  const { username } = route.params as RouteParams;

  const { count } = useCustomContext();

  const SPORTS_API_KEY = '4db0f25d56444bd4a901d6ecda5d3528';
  const API_URL = `https://api.football-data.org/v4/competitions`;

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'X-Auth-Token': SPORTS_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.competitions || []); 
        setLoading(false);  
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/MoveUp.png")}
        />

        <View>
          <Text style={styles.textMain}>Hello, {username}</Text>
          <Text style={styles.textSec}>Welcome to MoveUp</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View 
        style={{ 
          position: 'absolute', 
          bottom: 10, 
          right: 10, 
          backgroundColor: '#003174', 
          padding: 5, 
          borderRadius: 10, 
          paddingHorizontal: 20 
        }}
      >
        <Text style={styles.floating}>
          {count}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    margin: 20,
   
  },
  textMain: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
    color:"#000"
  },
  textSec: { 
    fontSize: 20,
    color:"#545454"
  },
  floating: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
    color: '#ffffff',
  },
});

export default HomePage;
