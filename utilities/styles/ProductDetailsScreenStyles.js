import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, fontSizes, isIOS, windowHeight, windowWidth } from "../appConstant";
import { FontFamily } from "../fonts";
import { Colors } from "../colors";

export default ProductDetailsScreenStyles = StyleSheet.create({
    headerView: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: windowWidth(20), marginTop: windowHeight(isIOS ? 50 : 30)},
    leftArrowIcon: {borderRadius: 30, height: windowHeight(33), width: windowWidth(40), backgroundColor: Colors.greyScale, alignItems: 'center',
        justifyContent: 'center'}    ,
    cartIconTouch: {right: windowWidth(20)},
    productInfoView: {paddingHorizontal: windowWidth(20), marginTop: windowHeight(20)},
    brandText: {fontFamily: FontFamily.ManropeLight, fontWeight: '300', fontSize: fontSizes.FONT38, color: Colors.headingColor},
    titleText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '800', fontSize: fontSizes.FONT38, color: Colors.headingColor},
    starRatingView: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(5)},
    starStyle: {marginRight: windowWidth(5)},
    reviewText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT14, color: Colors.reviewsText, marginLeft: windowWidth(2),
        marginTop: windowHeight(2)},
    carouselView: {marginTop: windowHeight(15)},
    productLikeTouch: {position: 'absolute', alignItems: 'center', justifyContent: 'center', top: windowHeight(15), height: windowHeight(45), width: windowWidth(55),
        borderRadius: 20, backgroundColor: Colors.white, right: windowWidth(25)},
    paginationView: { position: 'absolute', bottom: 0},
    priceView: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: windowWidth(20), marginTop: windowHeight(20)},
    priceText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '700', fontSize: fontSizes.FONT16, color: Colors.primaryColor},
    discountTextView: {backgroundColor: Colors.primaryColor, borderRadius: 30, paddingVertical: windowHeight(5), paddingHorizontal: windowWidth(13),
        marginLeft: windowWidth(10)},
    discountText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '500', fontSize: fontSizes.FONT12, color: Colors.whiteScale},
    buttonsView: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: windowWidth(20), marginTop: windowHeight(20)},
    addToCartButton: {borderWidth: 1, borderColor: Colors.primaryColor, backgroundColor: Colors.white, borderRadius: 20, alignItems: 'center',
        justifyContent: 'center', width: "42%", height: windowHeight(50)},
    addToCartText: {fontFamily: FontFamily.ManropeSemiBold, fontWeight: '600', fontSize: fontSizes.FONT14, color: Colors.primaryColor},
    buyNowButton: {backgroundColor: Colors.primaryColor, borderRadius: 20, alignItems: 'center', justifyContent: 'center', width: "52%", height: windowHeight(50)},
    buyNowText: {fontFamily: FontFamily.ManropeSemiBold, fontWeight: '600', fontSize: fontSizes.FONT14, color: Colors.white},
    detailView: {paddingHorizontal: windowWidth(20), marginVertical: windowHeight(20)},
    detailText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '400', fontSize: fontSizes.FONT16, color: Colors.headingColor},
    descriptionText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT16, color: Colors.placeHolderText, marginTop: windowHeight(5)},
    paginationDotView: (index, carouselActiveIndex) => ({height: windowHeight(5), width: windowWidth(30), borderRadius: 30,
        backgroundColor: index === carouselActiveIndex ? Colors.yellow : Colors.inactiveCarousel, marginRight: windowWidth(7)}),
    loaderView: {alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Colors.white},
    carouselImageView: {alignItems: 'center', justifyContent: 'center'},
    cartCountView: {backgroundColor: Colors.yellow, borderRadius: 30, height: windowHeight(isIOS ? 16: 18), width: windowWidth(20), position: 'absolute',
        top: windowHeight(-5), right: windowWidth(-5), zIndex: 1, justifyContent: 'center', alignItems: 'center'},
    cartCountText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '600', fontSize: fontSizes.FONT12, color: Colors.white},
    imageStyle: {height: windowHeight(200), width: SCREEN_WIDTH}
});
