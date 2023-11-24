import React from 'react'
import HomeScreenStyles from '../utilities/styles/HomeScreenStyles'
import { FlatList, LayoutAnimation, Text, TouchableOpacity, View } from 'react-native'
import { Icons } from '../utilities/icons'
import { windowHeight, windowWidth } from '../utilities/appConstant'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../utilities/redux/slices/productsSlice'
import ShoppingCartScreenStyles from '../utilities/styles/ShoppingCartScreenStyles'
import { CartEmptyKey, CartEmptyTwoKey, DeliveryKey, EditKey, LoadingKey, ProceedToCheckoutKey, Shopping_CartKey, SubTotalKey, TotalKey,
TwoDollarKey } from '../utilities/keys'
import FastImage from 'react-native-fast-image'

const ShoppingCartScreen = ({navigation}) => {
    const shoppingCart = useSelector(state => state.products.shoppingCart)
    const dispatch = useDispatch()

    const layoutAnimConfig = {//config for animation
        duration: 300,
        update: { type: LayoutAnimation.Types.easeInEaseOut },
        delete: { duration: 300, type: LayoutAnimation.Types.easeInEaseOut, property: LayoutAnimation.Properties.opacity },
      };

    const onRemoveProduct = (index) => {
        dispatch(removeFromCart({index: index}))
        if(shoppingCart[index].count === 1) LayoutAnimation.configureNext(layoutAnimConfig)//animate when last item is removed
    }

    const getSubTotal = () => {
        return shoppingCart.filter(item => item.count).reduce((prev, next) => (next.product.price * next.count) + prev, 0)
    }

    const getHeader = () => {
        return Shopping_CartKey + " " + (shoppingCart.filter(item => item.count).length ? `(${shoppingCart.filter(item => item.count).length})` : "")
    }

    const renderCart = ({item, index}) => {
        if(item.count){
            return(
                <View>
                    <View style={ShoppingCartScreenStyles.cartItemView}>
                        <FastImage style={ShoppingCartScreenStyles.imageStyle} resizeMode={FastImage.resizeMode.cover}
                        source={{uri: item.product.thumbnail, priority: FastImage.priority.high}}/>
                        
                        <View style={ShoppingCartScreenStyles.infoView}>
                            <Text numberOfLines={2} style={ShoppingCartScreenStyles.titleText}>{item.product.title}</Text>
                            <Text style={ShoppingCartScreenStyles.priceText}>{"$" + item.product.price}</Text>
                        </View>

                        <View style={ShoppingCartScreenStyles.cartActionView}>
                            <TouchableOpacity onPress={() => onRemoveProduct(index)}>
                                <Icons.RemoveWhiteSvg height={windowHeight(40)} width={windowWidth(40)}/>
                            </TouchableOpacity>
                            
                            <Text style={ShoppingCartScreenStyles.itemCountText}>{item.count}</Text>
                            
                            <TouchableOpacity onPress={() => dispatch(addToCart({index: index}))}>
                                <Icons.AddWhiteSvg height={windowHeight(40)} width={windowWidth(40)}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={ShoppingCartScreenStyles.separatorView}/>
                </View>
            )
        }
    }

    return(
        <View style={HomeScreenStyles.mainView}>
            
            <View style={ShoppingCartScreenStyles.checkoutView}>
                <View style={ShoppingCartScreenStyles.checkoutItemTextView}>
                    <Text style={ShoppingCartScreenStyles.checkoutItemText}>{SubTotalKey}</Text>
                    <View style={ShoppingCartScreenStyles.checkoutItemTextViewTwo}>
                        <Text style={ShoppingCartScreenStyles.checkoutItemTextTwo}>{"$" + getSubTotal()}</Text>
                    </View>
                </View>

                <View style={ShoppingCartScreenStyles.checkoutItemTextView}>
                    <Text style={ShoppingCartScreenStyles.checkoutItemText}>{DeliveryKey}</Text>
                    <View style={ShoppingCartScreenStyles.checkoutItemTextViewTwo}>
                        <Text style={ShoppingCartScreenStyles.checkoutItemTextTwo}>{TwoDollarKey}</Text>
                    </View>
                </View>

                <View style={ShoppingCartScreenStyles.checkoutItemTextView}>
                    <Text style={ShoppingCartScreenStyles.checkoutItemText}>{TotalKey}</Text>
                    <View style={ShoppingCartScreenStyles.checkoutItemTextViewTwo}>
                        <Text style={ShoppingCartScreenStyles.totalText}>{"$" + (getSubTotal() + 2)}</Text>
                    </View>
                </View>
            
                {shoppingCart.some(item => item.count) ?
                <TouchableOpacity disabled={true} style={ShoppingCartScreenStyles.checkoutTouch}>
                    <Text style={ShoppingCartScreenStyles.proceedToCheckoutText}>{ProceedToCheckoutKey}</Text>
                </TouchableOpacity> : null
                }
            </View>

            <View style={ShoppingCartScreenStyles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={ShoppingCartScreenStyles.backTouch}>
                    <Icons.LeftArrowSvg height={windowHeight(7)} width={windowWidth(13)}/>
                </TouchableOpacity>

                <Text style={ShoppingCartScreenStyles.shoppingCartText}>{getHeader()}</Text> 
            </View>

            {
            !shoppingCart.some(item => item.count) ?//if cart empty
                <View style={ShoppingCartScreenStyles.loaderView}>
                    <Text style={HomeScreenStyles.loadingText}>{CartEmptyKey}</Text>
                    <Text style={ShoppingCartScreenStyles.cartEmptyText}>{CartEmptyTwoKey}</Text>
                </View>
                :
                <>
                    <View style={ShoppingCartScreenStyles.cartListView}>
                        <FlatList showsVerticalScrollIndicator={false} data={shoppingCart} keyExtractor={(_, index) => index.toString()} renderItem={renderCart}/>
                    </View>
                    <View style={ShoppingCartScreenStyles.editTextView}>
                        <Text style={ShoppingCartScreenStyles.editText}>{EditKey}</Text>
                    </View>
                </>
            }

        </View>
    )
}

export default ShoppingCartScreen