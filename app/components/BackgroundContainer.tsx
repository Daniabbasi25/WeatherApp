import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';

import { getWidth } from 'lib';
import { AppliedTheme } from 'themes';

interface Props {
  children: React.ReactNode;
}

const BackgroundContainer: FC<Props> = ({ children }) => {
  const theme = AppliedTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background.containerBackground }]}>
      {children}
    </View>
  );
};

export default BackgroundContainer;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignSelf: 'center',
    width: getWidth(90),
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
