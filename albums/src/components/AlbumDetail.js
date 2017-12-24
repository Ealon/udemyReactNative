import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { 
    title,
    artist,
    thumbnail_image,
    image,
  } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        {/* <Button onPress={console.log(title)}>Buy Now</Button> NOTICE: will automatically executes when mounting*/}
        <Button onPress={() => console.log(title)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  // a trick to stretch image
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
};

export default AlbumDetail;
