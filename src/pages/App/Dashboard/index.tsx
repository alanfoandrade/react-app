import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

export const Dashboard: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </Container>
  );
};
