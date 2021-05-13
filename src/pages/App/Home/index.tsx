import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigate('Dashboard')}>
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
    </Container>
  );
};
