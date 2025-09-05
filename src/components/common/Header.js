// src/components/common/Header.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, FONT_SIZES} from '../../styles/colors';

const Header = ({
  title,
  showBackButton = false,
  showRightButton = false,
  onBackPress,
  onRightPress,
  rightButtonIcon = '⚙️',
  rightButtonText,
  backgroundColor = COLORS.white,
  titleColor = COLORS.text,
  style,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <View style={[
        styles.container, 
        {paddingTop: insets.top + 16, backgroundColor}, 
        style
      ]}>
        <View style={styles.content}>
          {/* Left Side - Back Button */}
          <View style={styles.leftContainer}>
            {showBackButton && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={onBackPress}
                activeOpacity={0.7}>
                <Text style={styles.backIcon}>←</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Center - Title */}
          <View style={styles.centerContainer}>
            <Text style={[styles.title, {color: titleColor}]} numberOfLines={1}>
              {title}
            </Text>
          </View>

          {/* Right Side - Action Button */}
          <View style={styles.rightContainer}>
            {showRightButton && (
              <TouchableOpacity
                style={styles.rightButton}
                onPress={onRightPress}
                activeOpacity={0.7}>
                {rightButtonText ? (
                  <Text style={styles.rightButtonText}>{rightButtonText}</Text>
                ) : (
                  <Text style={styles.rightIcon}>{rightButtonIcon}</Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: COLORS.text,
  },
  rightButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    fontSize: 18,
    color: COLORS.text,
  },
  rightButtonText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default Header;

// ================================
// USAGE EXAMPLES:
// ================================

// 1. Simple header with just title
// <Header title="Home" />

// 2. Header with back button
// <Header 
//   title="Product Details" 
//   showBackButton={true}
//   onBackPress={() => navigation.goBack()}
// />

// 3. Header with back and right button
// <Header 
//   title="Profile" 
//   showBackButton={true}
//   showRightButton={true}
//   onBackPress={() => navigation.goBack()}
//   onRightPress={() => handleEdit()}
//   rightButtonIcon="✏️"
// />

// 4. Header with text button
// <Header 
//   title="Settings" 
//   showRightButton={true}
//   onRightPress={() => handleSave()}
//   rightButtonText="Save"
// />

// 5. Custom styled header
// <Header 
//   title="Welcome" 
//   backgroundColor={COLORS.primary}
//   titleColor={COLORS.white}
// />