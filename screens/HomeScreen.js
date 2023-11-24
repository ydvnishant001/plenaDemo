import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TextInput, ScrollView, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import { Icons } from '../utilities/icons';
import { isIOS, windowHeight, windowWidth } from '../utilities/appConstant';
import HomeScreenStyles from '../utilities/styles/HomeScreenStyles';
import { Colors } from '../utilities/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, productLiked, updateProducts } from '../utilities/redux/slices/productsSlice';
import { AddedToCartKey, AddressKey, CategoriesKey, DeliveryToKey, FavouriteKey, FetchProductsURL, HomeKey, InputPlaceholderKey, LoadingKey, MoreKey,
OneHourKey, ProductDetailsKey, RecommendedKey, ShoppingCartKey, UserTitleKey, WithinKey } from '../utilities/keys';
import FastImage from 'react-native-fast-image';
import ProductDetailsScreenStyles from '../utilities/styles/ProductDetailsScreenStyles';

const HomeScreen = ({navigation}) => {
  const allProductsData = useSelector(state => state.products.allProducts)
  const likedProductsData = useSelector(state => state.products.likedProducts)
  const shoppingCart = useSelector(state => state.products.shoppingCart)
  const dispatch = useDispatch()
  
  const [searchText, setSearchText] = useState("")

  const getAllProducts = async () => {
    try {
      const response = await fetch(FetchProductsURL);
      const json = await response.json();
      
      if(json.products.length) dispatch(updateProducts({allProducts: json.products}))
    } catch (error) {
      console.error(error);
    }
  };

  const onProductLike = (index) => {
    let likeStatus = likedProductsData[index].liked
    dispatch(productLiked({index: index, liked: !likeStatus}))
  }

  const onAddToCart = (msg, index) => {
    if(isIOS) Alert.alert(msg);
    ToastAndroid.show(msg, ToastAndroid.SHORT)

    dispatch(addToCart({index: index}))
  }

  const getCartCount = () => {
    return (shoppingCart.filter(item => item.count).length || "")
}

  const renderList = ({_, index}) => {
    return(
      <View style={HomeScreenStyles.listItemView(index)}>
        <Icons.PlaceholderImageWhiteSvg height={windowHeight(73)} width={windowWidth(73)}/>
        <View>
          <Text style={HomeScreenStyles.listItemText}>Get</Text>
          <Text style={HomeScreenStyles.listItemTextTwo}>50% OFF</Text>
          <Text style={HomeScreenStyles.listItemTextThree}>On first <Text style={HomeScreenStyles.listItemTextFour}>03</Text> order</Text>
        </View>
      </View>
    )
  }

  const renderProducts = ({item, index}) => {
    return(
      <TouchableOpacity onPress={() => navigation.navigate(ProductDetailsKey, {productDetails: item, productIndex: index})}
      style={HomeScreenStyles.productListItemView}>
        <TouchableOpacity onPress={() => onProductLike(index)} style={HomeScreenStyles.likeIconView}>
          {
          likedProductsData[index]?.liked ?
          <Icons.LikeFilledSvg height={windowHeight(14)} width={windowWidth(14)}/> : <Icons.LikeSvg height={windowHeight(14)} width={windowWidth(14)}/>
          }
        </TouchableOpacity>
        
        <FastImage style={HomeScreenStyles.imageStyle} resizeMode={FastImage.resizeMode.cover} source={{uri: item.thumbnail, priority: FastImage.priority.high}}/>
        
        <View style={HomeScreenStyles.itemInfoView}>
          <View>
            <Text style={HomeScreenStyles.itemPrice}>{"$" + item.price}</Text>
            <Text numberOfLines={1} style={HomeScreenStyles.itemTitle}>{item.title}</Text>
          </View>

          <TouchableOpacity style={HomeScreenStyles.addIconTouch} onPress={() => onAddToCart(AddedToCartKey, index)}>
            <Icons.AddSvg height={windowHeight(24)} width={windowWidth(24)}/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
      <View style={HomeScreenStyles.mainView}>
        
        <View style={HomeScreenStyles.bottomTabView}>  
          <View style={HomeScreenStyles.bottomTabIconView}>
              <View style={HomeScreenStyles.homeIconView}><Icons.HomeSelectedSvg height={windowHeight(56)} width={windowWidth(56)}/></View>
            <Text style={HomeScreenStyles.bottomTabIconText}>{HomeKey}</Text>
          </View>
          
          <View style={HomeScreenStyles.bottomTabIconView}>
            <Icons.CategorySvg height={windowHeight(24)} width={windowWidth(24)}/>
            <Text style={HomeScreenStyles.bottomTabIconText}>{CategoriesKey}</Text>
          </View>
          
          <View style={HomeScreenStyles.bottomTabIconView}>
            <Icons.HeartSvg height={windowHeight(24)} width={windowWidth(24)}/>
            <Text style={HomeScreenStyles.bottomTabIconText}>{FavouriteKey}</Text>
          </View>
          
          <View style={HomeScreenStyles.bottomTabIconView}>
            <Icons.MoreSvg height={windowHeight(24)} width={windowWidth(24)}/>
            <Text style={HomeScreenStyles.bottomTabIconText}>{MoreKey}e</Text>
          </View>
        </View>

        <ScrollView style={HomeScreenStyles.mainView}>
        
        <View style={HomeScreenStyles.headerView}>
          <View style={HomeScreenStyles.subHeaderView}>
            <Text style={HomeScreenStyles.userTitle}>{UserTitleKey}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ShoppingCartKey)} style={HomeScreenStyles.cartIconView}>
              {shoppingCart.some(item => item.count) ?//items are present in cart
              <View style={ProductDetailsScreenStyles.cartCountView}>
              <Text style={ProductDetailsScreenStyles.cartCountText}>{getCartCount()}</Text>  
              </View> : null
              }
              <Icons.CartBagWhiteSvg height={windowHeight(18)} width={windowWidth(18)}/>
            </TouchableOpacity>
          </View>
          
          <View style={HomeScreenStyles.inputView}>
            <Icons.SearchSvg height={windowHeight(18)} width={windowWidth(18)}/>
            <TextInput placeholder={InputPlaceholderKey} value={searchText} placeholderTextColor={Colors.placeHolderText}
            style={HomeScreenStyles.input} onChangeText={setSearchText}/>
          </View>

          <View style={HomeScreenStyles.subHeaderTwoView}>
            <View>
              <Text style={HomeScreenStyles.subHeadingTwoText}>{DeliveryToKey}</Text>
              <View style={HomeScreenStyles.addressTextView}>
                <Text style={HomeScreenStyles.addressText}>{AddressKey}</Text>
                <Icons.DownArrowSvg height={windowHeight(4)} width={windowWidth(10)}/>
              </View>
            </View>

            <View style={HomeScreenStyles.subHeaderTwoSubView}>
              <Text style={HomeScreenStyles.subHeadingTwoText}>{WithinKey}</Text>
              <View style={HomeScreenStyles.addressTextView}>
                <Text style={HomeScreenStyles.addressText}>{OneHourKey}</Text>
                <Icons.DownArrowSvg height={windowHeight(4)} width={windowWidth(10)}/>
              </View>
            </View>
          </View>
        </View>

        <View style={HomeScreenStyles.listView}>
          <FlatList data={[0, 1]} numColumns={2} scrollEnabled={false} keyExtractor={(_, index) => index.toString()} renderItem={renderList}/>
        </View>

        <Text style={HomeScreenStyles.recommendedText}>{RecommendedKey}</Text>

        <View style={HomeScreenStyles.productListView}>
          {
          allProductsData.length ?
          <FlatList data={allProductsData} numColumns={2} keyExtractor={(_, index) => index.toString()} renderItem={renderProducts}/>
          :
          <Text style={HomeScreenStyles.loadingText}>{LoadingKey}</Text>
          }
        </View>
        
        </ScrollView>
      </View>
    );
  }

export default HomeScreen