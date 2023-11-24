import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, fontSizes, isIOS, windowHeight, windowWidth } from "../appConstant";
import { FontFamily } from "../fonts";
import { Colors } from "../colors";

export default HomeScreenStyle = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: Colors.white},
    headerView: {backgroundColor: Colors.primaryColor, paddingHorizontal: windowWidth(20)},
    subHeaderView: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(isIOS ? 50 : 30)},
    userTitle: {fontFamily: FontFamily.ManropeMedium, fontWeight: '600', fontSize: fontSizes.FONT22, color: Colors.greyScale},
    cartIconView: {position: 'absolute', right: 0, padding: 5},
    inputView: {flexDirection: 'row', alignItems: 'center', paddingHorizontal: windowWidth(20), paddingVertical: windowHeight(isIOS ? 13 : 7),
      backgroundColor: Colors.primaryDarkColor, borderRadius: 30, width: "100%", marginTop: windowHeight(30)},
    input: {fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT14, color: Colors.white, marginLeft: windowWidth(10),
      width: SCREEN_WIDTH*.7},
    subHeaderTwoView: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(20), marginBottom: windowHeight(10)},
    subHeaderTwoSubView: {position: 'absolute', right: 0},
    subHeadingTwoText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '800', fontSize: fontSizes.FONT11, color: Colors.secondaryColor},
    addressTextView: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(4)},
    addressText: {fontFamily: FontFamily.ManropeMedium, fontWeight: '500', fontSize: fontSizes.FONT14, color: Colors.greyScale, marginRight: windowWidth(7)},
    listView: {flexDirection: 'row', marginTop: windowHeight(30), marginLeft: windowWidth(20)},
    recommendedText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT30, color: Colors.headingColor,
      marginTop: windowHeight(30), marginLeft: windowWidth(20)},
    productListView: {flexDirection: 'row', marginTop: windowHeight(20), marginLeft: windowWidth(20), marginBottom: windowHeight(75)},
    listItemView: (index) => ({borderRadius: 16, height: windowHeight(110), backgroundColor: index ? Colors.yellowDim: Colors.yellow, flexDirection: 'row',
      width: "75%", marginRight: windowWidth(20), alignItems: 'center', justifyContent: 'space-around'}),
    listItemText: {fontFamily: FontFamily.ManropeLight, fontWeight: '300', fontSize: fontSizes.FONT20, color: Colors.white},
    listItemTextTwo: {fontFamily: FontFamily.ManropeMedium, fontWeight: '800', fontSize: fontSizes.FONT26, color: Colors.white},
    listItemTextThree: {fontFamily: FontFamily.ManropeLight, fontWeight: '300', fontSize: fontSizes.FONT13, color: Colors.white},
    listItemTextFour: {fontFamily: FontFamily.ManropeBold, fontWeight: '500'},
    productListItemView: {backgroundColor: Colors.greyScale, height: windowHeight(isIOS ? 170 : 180), width: "44%", borderRadius: 12, marginRight: windowWidth(20),
      marginBottom: windowHeight(20)},
    likeIconView: {alignSelf: 'flex-start', marginTop: windowHeight(5), marginLeft: windowWidth(10), padding: 5},
    imageStyle: {height: windowHeight(73), width: windowWidth(73), borderRadius: 12, alignSelf: 'center'},
    itemInfoView: {flexDirection: 'row', alignItems: 'center', marginLeft: windowWidth(15), marginTop: windowHeight(20)},
    itemPrice: {fontFamily: FontFamily.ManropeSemiBold, fontWeight: '600', fontSize: fontSizes.FONT14, color: Colors.headingColor},
    itemTitle: {fontFamily: FontFamily.ManropeMedium, fontWeight: '400', fontSize: fontSizes.FONT12, color: Colors.itemTitle,
      width: windowWidth(100)},
    addIconTouch: {position: 'absolute', right: windowWidth(15)},
    loadingText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '400', fontSize: fontSizes.FONT20, color: Colors.headingColor},
    bottomTabView: {position: 'absolute', justifyContent: 'space-evenly', width: SCREEN_WIDTH, flexDirection: 'row', borderTopLeftRadius: 30,
      borderTopRightRadius: 30, backgroundColor: Colors.bottomBar, zIndex: 1, bottom: 0, paddingBottom: windowHeight(20), paddingTop: windowHeight(15)},
    bottomTabIconView: {alignItems: 'center'},
    homeIconView: {position: 'absolute', borderRadius: 30, alignItems: 'center', justifyContent: 'center', top: windowHeight(-25), zIndex: 1},
    bottomTabIconText: {fontFamily: FontFamily.ManropeRegular, fontWeight: '500', fontSize: fontSizes.FONT11, color: Colors.placeHolderText},
    });
    
    
    
    
    
    
    
    
    
    
    
    