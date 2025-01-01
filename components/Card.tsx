import { useCustomContext } from '@/contexts/Context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  item: any; 
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { name, area, emblem, currentSeason } = item;
  const imageUrl = emblem ? emblem : '';

  const startDate = currentSeason?.startDate ? new Date(currentSeason.startDate).toLocaleDateString() : 'N/A';
  const endDate = currentSeason?.endDate ? new Date(currentSeason.endDate).toLocaleDateString() : 'N/A';
  const currentMatchday = currentSeason?.currentMatchday ? currentSeason.currentMatchday : 'N/A';
  const winner = currentSeason?.winner ? currentSeason.winner.name : 'N/A';

  const { increment } = useCustomContext();


  const [isDisabled, setIsDisabled] = useState(false);

  const handlePress = () => {
    increment(); 
    setIsDisabled(true); 
  };

  return (
    
    <View style={styles.card}>
      
      <Text style={styles.title}>{name}</Text>
      {emblem ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text>No Emblem</Text>
      )}
      
      
      <Text style={styles.region}>Region: {area.name}</Text>
      
      <Text style={styles.seasonDetails}>
        Season: {startDate} - {endDate}
      </Text>

      <Text style={styles.matchday}>Current Matchday: {currentMatchday}</Text>
      
      <Text style={styles.winner}>Winner: {winner}</Text>

      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        onPress={handlePress}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>{isDisabled ? 'Added' : 'Add'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  region: {
    fontSize: 14,
    color: '#757575',
  },
  seasonDetails: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 8,
  },
  matchday: {
    fontSize: 12,
    color: '#757575',
  },
  winner: {
    fontSize: 12,
    color: '#757575',
  },
  button: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#003174',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#757575', 
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Card;
