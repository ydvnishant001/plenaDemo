import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, fontSizes, isIOS, windowHeight, windowWidth } from "../appConstant";
import { FontFamily } from "../fonts";
import { Colors } from "../colors";

export default ShoppingCartScreenStyles = StyleSheet.create({
    headerView: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: windowWidth(20), marginTop: windowHeight(isIOS ? 50 : 30)},
    backTouch: {borderRadius: 30, height: windowHeight(33), width: windowWidth(40), backgroundColor: Colors.greyScale, alignItems: 'center',
        justifyContent: 'center'},
    shoppingCartText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '400', fontSize: fontSizes.FONT16, color: Colors.headingColor, marginLeft: windowWidth(20)},
    cartListView: {alignItems: 'center', paddingHorizontal: windowWidth(20), marginTop: windowHeight(30), maxHeight: "45%"},
    checkoutView: {backgroundColor: Colors.greyScale, borderTopLeftRadius: 30, borderTopRightRadius: 30,
        width: SCREEN_WIDTH*.93, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(15), paddingBottom: windowHeight(20), position: 'absolute', bottom: 0, zIndex: 1},
    checkoutItemTextView: {flexDirection: 'row', alignItems: 'center', marginBottom: windowHeight(20), width: SCREEN_WIDTH*.7},
    checkoutItemText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '400', fontSize: fontSizes.FONT14, color: Colors.itemTitle},
    totalText: {fontFamily: FontFamily.ManropeSemiBold, fontWeight: '600', fontSize: fontSizes.FONT14, color: Colors.headingColor},
    checkoutItemTextViewTwo: {position: 'absolute', right: 0},
    checkoutItemTextTwo: {fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT14, color: Colors.headingColor},
    checkoutTouch: {marginTop: windowHeight(15), backgroundColor: Colors.primaryColor, borderRadius: 20, alignItems: 'center', justifyContent: 'center',
        height: windowHeight(50), width: SCREEN_WIDTH*.8},
    proceedToCheckoutText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '600', fontSize: fontSizes.FONT14, color: Colors.white},
    cartItemView: {flexDirection: 'row', alignItems: 'center', width: SCREEN_WIDTH*.85},
    imageStyle: {height: windowHeight(30), width: windowWidth(35)},
    infoView: {marginLeft: windowWidth(25)},
    titleText: {width: windowWidth(150), fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT14, color: Colors.headingColor},
    priceText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT14, color: Colors.headingColor},
    cartActionView: {position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center'},
    itemCountText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT14, color: Colors.headingColor,
        marginHorizontal: windowWidth(10)},
    separatorView: {backgroundColor: Colors.separator, height: windowHeight(1), width: SCREEN_WIDTH*.85, marginVertical: windowHeight(15)},
    loaderView: {alignItems: 'center', marginTop: windowHeight(100), flex: 1, backgroundColor: Colors.white},
    cartEmptyText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT12, color: Colors.placeHolderText},
    editTextView: {position: 'absolute', bottom: windowHeight(isIOS ? 230 : 240), width: SCREEN_WIDTH*.9},
    editText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT12, color: Colors.primaryColor, alignSelf: 'flex-end'}
});
