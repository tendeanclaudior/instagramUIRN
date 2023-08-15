import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap} from '../../atoms';
import {IconAddStory, Profile} from '../../../Assets';

export type Props = {
  image: string;
  title: string;
  user?: boolean;
  users?: boolean;
  type: 'secondary' | 'relative';
};

const CardStory: FC<Props> = ({image, title, user, users, type}) => {
  return (
    <View style={styles.page}>
      {user && (
        <>
          <View style={styles.bgUser}>
            <View style={styles.bg2Story} />
            <Image alt="/" source={Profile} style={styles.images} />
            <View style={styles.IconAddStory}>
              <IconAddStory />
            </View>
          </View>
          <Gap height={10} width={0} />
          <Text style={styles.titleStory}>{title}</Text>
        </>
      )}
      {users && (
        <>
          <LinearGradient
            colors={
              type === 'secondary'
                ? ['#D300C5', '#FE3F31', '#FFCE00']
                : ['#DBDBDB', '#DBDBDB', '#DBDBDB']
            }
            style={styles.bgStory}>
            <View style={styles.bg2Story} />
            <Image alt="/" source={image} style={styles.images} />
          </LinearGradient>
          <Gap height={10} width={0} />
          <Text style={styles.titleStory}>{title}</Text>
        </>
      )}
    </View>
  );
};

export default CardStory;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    marginLeft: 20,
  },
  bgUser: {
    backgroundColor: '#DBDBDB',
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgStory: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconAddStory: {
    position: 'absolute',
    bottom: 5,
    right: -5,
  },
  bg2Story: {
    backgroundColor: '#000000',
    width: 95,
    height: 95,
    borderRadius: 95,
  },
  images: {
    width: 90,
    height: 90,
    borderRadius: 90,
    position: 'absolute',
  },
  titleStory: {
    fontSize: 15,
    color: '#FFFFFF',
  },
});
