import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import {COLORS, FONT_SIZES} from '../styles/colors';
import {MOCK_REVIEWS} from '../utils/constants';

const {width} = Dimensions.get('window');

const ProductDetailsScreen = ({route, navigation}) => {
  const {product} = route.params;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleAddToBag = () => {
    Alert.alert(
      'Added to Bag',
      `${product.title} has been added to your bag!`,
      [{text: 'OK', style: 'default'}]
    );
  };

  const handleShare = () => {
    Alert.alert('Share', 'Share functionality would be implemented here');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Text key={i} style={styles.star}>⭐</Text>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Text key={i} style={styles.star}>⭐</Text>);
      } else {
        stars.push(<Text key={i} style={styles.starEmpty}>☆</Text>);
      }
    }
    return stars;
  };

  const renderReview = ({item}) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Image source={{uri: item.avatar}} style={styles.reviewAvatar} />
        <View style={styles.reviewInfo}>
          <Text style={styles.reviewName}>{item.name}</Text>
          <View style={styles.reviewRating}>
            {renderStars(item.rating)}
          </View>
        </View>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="" 
        showBackButton={true}
        showRightButton={true}
        onBackPress={() => navigation.goBack()}
        onRightPress={() => handleShare()}
        rightButtonIcon="↗"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        </View>

        {/* Product Info */}
        <View style={styles.contentContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          
          <Text style={styles.productDescription}>{product.description}</Text>

          <View style={styles.ratingContainer}>
            <View style={styles.starsContainer}>
              {renderStars(product.rating)}
            </View>
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>

          <Text style={styles.soldBy}>Sold By: Essence</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>${product.price}</Text>
            {product.discountPercentage > 0 && (
              <Text style={styles.originalPrice}>
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </Text>
            )}
          </View>

          <Button
            title="Add to Bag"
            onPress={handleAddToBag}
            style={styles.addToBagButton}
          />

          {/* Highlights */}
          <View style={styles.highlightsContainer}>
            <Text style={styles.sectionTitle}>Highlights</Text>
            <View style={styles.highlightGrid}>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Height</Text>
                <Text style={styles.highlightValue}>10.3</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Weight</Text>
                <Text style={styles.highlightValue}>15 KG</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Warranty</Text>
                <Text style={styles.highlightValue}>1 month</Text>
              </View>
              <View style={styles.highlightItem}>
                <Text style={styles.highlightLabel}>Shipping</Text>
                <Text style={styles.highlightValue}>In 1-2 business days</Text>
              </View>
            </View>
          </View>

          {/* Reviews */}
          <View style={styles.reviewsContainer}>
            <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
            {MOCK_REVIEWS.map((review) => (
              <View key={review.id}>
                {renderReview({item: review})}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
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
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    fontSize: 18,
    color: COLORS.text,
  },
  imageContainer: {
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    paddingVertical: 40,
  },
  productImage: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  productTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 12,
  },
  productDescription: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  star: {
    fontSize: 16,
    color: COLORS.star,
  },
  starEmpty: {
    fontSize: 16,
    color: COLORS.starEmpty,
  },
  ratingText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '600',
  },
  soldBy: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  currentPrice: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  originalPrice: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.textSecondary,
    textDecorationLine: 'line-through',
    marginLeft: 12,
  },
  addToBagButton: {
    backgroundColor: COLORS.primary,
    marginBottom: 32,
  },
  highlightsContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  highlightItem: {
    width: '48%',
    backgroundColor: COLORS.backgroundLight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  highlightLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  highlightValue: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text,
  },
  reviewsContainer: {
    marginBottom: 20,
  },
  reviewCard: {
    backgroundColor: COLORS.backgroundLight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewName: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  reviewRating: {
    flexDirection: 'row',
  },
  reviewComment: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
});

export default ProductDetailsScreen;