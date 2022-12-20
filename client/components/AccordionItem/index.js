import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {toggleAnimation} from '../../animations/toggleAnimation';
// import PropTypes from 'prop-types';

const AccordionItem = ({title, bodyText}) => {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
              <MaterialIcons
                name={'keyboard-arrow-right'}
                size={30}
              />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={styles.body}>
          <Text>{bodyText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '2%',
    borderRadius: 12,
    backgroundColor: 'white',
    marginBottom: '2%',
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: '2%',
    paddingVertical: '3%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

// AccordionItem.propTypes = {
//   customBody: PropTypes.func,
//   customTitle: PropTypes.func,
//   customIcon: PropTypes.func,
//   containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   animationDuration: PropTypes.number,
//   isRTL: PropTypes.bool,
// };

// AccordionItem.defaultProps = {
//   customBody: null,
//   customTitle: null,
//   customIcon: null,
//   containerStyle: null,
//   animationDuration: 300,
//   isRTL: false,
// };

export default AccordionItem;
