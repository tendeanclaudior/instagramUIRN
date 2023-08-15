import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  IconAdd,
  IconHeart,
  IconHome,
  IconMesaanger,
  IconReels,
  IconSearch,
  Image1,
  Image2,
  Image3,
  Image4,
  Post1,
  Post2,
  Profile,
  UserProfile,
  fonts,
} from '../../Assets';
import {CardFeed, CardStory, Gap} from '../../components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.containerView}>
            <Text style={styles.titleInstagram}>Instagram</Text>
            <View style={styles.contentIcon}>
              <IconHeart />
              <Gap height={0} width={20} />
              <IconMesaanger />
            </View>
          </View>
          <Gap height={25} width={0} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardStory
              user={true}
              image={''}
              title={'Your Story'}
              type={'relative'}
            />
            <CardStory
              users={true}
              image={Image1}
              title={'velanisabrigita'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={UserProfile}
              title={'dissadis'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={UserProfile}
              title={'chseon_'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={Image2}
              title={'yuditpamungkas'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={UserProfile}
              title={'quenshekembuan'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={Image4}
              title={'grachelasupit'}
              type={'secondary'}
            />
            <CardStory
              users={true}
              image={Image3}
              title={'fy.glorif'}
              type={'relative'}
            />
          </ScrollView>
        </View>
        <Gap height={30} width={0} />
        <CardFeed
          type={'secondary'}
          title={'velanisabrigita'}
          image={Image1}
          post={Post1}
          caption={'i SEA u🏖️'}
          date={'JULY 22 2023'}
        />
        <Gap height={30} width={0} />
        <CardFeed
          type={'relative'}
          title={'fy.glorif'}
          image={Image3}
          post={Post2}
          caption={
            'do something today that your future self will thank you for'
          }
          date={'MARCH 15 2023'}
        />
      </ScrollView>
      {/* Buttom */}
      <View style={styles.bottom}>
        <IconHome />
        <IconSearch />
        <IconAdd />
        <IconReels />
        <Image alt="/" source={Profile} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    paddingHorizontal: 15,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleInstagram: {
    fontSize: 35,
    fontFamily: fonts.Jaqueline.jaqueline,
    color: '#FFFFFF',
  },
  contentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#000000',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
});
