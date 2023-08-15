import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  IconComent,
  IconHeart,
  IconSave,
  IconShare,
  IconTitikTiga,
  Image4,
  Profile,
} from '../../../Assets';
import {Gap} from '../../atoms';

export type Props = {
  image: string;
  title: string;
  type: 'secondary' | 'relative';
  post: string;
  caption: string;
  date: string;
};

const CardFeed: FC<Props> = ({image, title, type, post, caption, date}) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.feedProfileView}>
          <View style={styles.feedProfile}>
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
            <Text style={styles.titleNameFeed}>{title}</Text>
          </View>
          <IconTitikTiga />
        </View>
      </View>
      <Gap height={20} width={0} />
      <View>
        <Image source={post} alt="/" style={styles.image} />
      </View>
      <Gap height={15} width={0} />
      <View style={styles.contentButtomFeedView}>
        <View style={styles.contentButtomFeed}>
          <IconHeart />
          <Gap height={0} width={20} />
          <IconComent />
          <Gap height={0} width={20} />
          <IconShare />
        </View>
        <IconSave />
      </View>
      <Gap height={20} width={0} />
      <View style={styles.contentUsersLike}>
        <Image source={Image4} alt="/" style={styles.usersPhotoLike} />
        <Text style={styles.titleLike}>
          Liked by <Text style={styles.titleLikeBold}>grachelasupit</Text> and{' '}
          <Text style={styles.titleLikeBold}>others</Text>
        </Text>
      </View>
      <Gap height={15} width={0} />
      <View style={styles.contentCaption}>
        <Text style={styles.titleNameFeed}>{title}</Text>
        <Text style={styles.titleCaption}>{caption}</Text>
      </View>
      <Gap height={15} width={0} />
      <View style={styles.contentComment}>
        <Image source={Profile} alt="/" style={styles.usersPhotoLike} />
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          placeholderTextColor={'#FFFFFF'}
        />
      </View>
      <Gap height={2} width={0} />
      <View style={styles.contentDate}>
        <Text style={styles.titleDate}>{date}</Text>
      </View>
    </>
  );
};

export default CardFeed;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 15,
  },
  bgStory: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleNameFeed: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  bg2Story: {
    backgroundColor: '#000000',
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  images: {
    width: 30,
    height: 30,
    borderRadius: 30,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 550,
  },
  contentButtomFeedView: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentButtomFeed: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentUsersLike: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  usersPhotoLike: {
    width: 30,
    height: 30,
  },
  titleLike: {
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  titleLikeBold: {
    fontWeight: 'bold',
  },
  contentCaption: {
    flexDirection: 'row',
    width: '100%',
  },
  titleCaption: {
    fontSize: 15,
    color: '#FFFFFF',
    marginLeft: 10,
  },
  input: {
    marginLeft: 10,
  },
  contentComment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  contentDate: {
    paddingHorizontal: 15,
  },
  titleDate: {
    fontSize: 13,
    color: '#DBDBDB',
  },
});
