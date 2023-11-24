import React, { useCallback, useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, ScrollView, Alert, ToastAndroid} from 'react-native'
import HomeScreenStyles from '../utilities/styles/HomeScreenStyles'
import { SCREEN_WIDTH, isIOS, windowHeight, windowWidth } from '../utilities/appConstant'
import { Icons } from '../utilities/icons'
import StartRating from 'react-native-star-rating'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, productLiked } from '../utilities/redux/slices/productsSlice'
import { useFocusEffect } from '@react-navigation/native'
import { AddToCartKey, AddedToCartKey, BuyNowKey, DetailsKey, LoadingKey, ReviewsKey, ShoppingCartKey } from '../utilities/keys'
import ProductDetailsScreenStyles from '../utilities/styles/ProductDetailsScreenStyles'
import FastImage from 'react-native-fast-image'

const ProductDetailsScreen = ({navigation, route}) => {
    const {productDetails, productIndex} = route.params
    const likedProductsData = useSelector(state => state.products.likedProducts)
    const shoppingCart = useSelector(state => state.products.shoppingCart)
    const dispatch = useDispatch()
    
    const [showLoader, setShowLoader] = useState(true)
    const [currentProductLiked, setCurrentProductLiked] = useState(likedProductsData[productIndex].liked)
    const [carouselActiveIndex, setCarouselActiveIndex] = useState(0)

    const getProductImages = () => {
        if(productDetails.images.length > 3 ) return productDetails.images.slice(2)
        else return productDetails.images
    }

    const onProductLike = () => {
        setCurrentProductLiked(prev => !prev)
    }

    const onAddToCart = (msg) => {
        if(isIOS) Alert.alert(msg);
        ToastAndroid.show(msg, ToastAndroid.SHORT)
        
        dispatch(addToCart({index: productIndex}))
    }

    const onBuy = () => {
        if(!shoppingCart[productIndex].count) onAddToCart(AddedToCartKey)//if open product not added
        navigation.navigate(ShoppingCartKey)
    }

    const getCartCount = () => {
        return (shoppingCart.filter(item => item.count).length || "")
    }

    const renderImages = ({item}) => {
        return(
            <View style={ProductDetailsScreenStyles.carouselImageView}>
                <FastImage style={ProductDetailsScreenStyles.imageStyle} resizeMode={FastImage.resizeMode.cover}
                source={{uri: item, priority: FastImage.priority.high}}/>
            </View>    
        )
    }

    const renderDots = () => {
        return(
            getProductImages().map((_, index) => <View style={ProductDetailsScreenStyles.paginationDotView(index, carouselActiveIndex)}/>)
        )
    }

    useEffect(() => {
        dispatch(productLiked({index: productIndex, liked: currentProductLiked}))
    }, [currentProductLiked, currentProductLiked])

    useFocusEffect(//for faster navigation
        useCallback(() => {
            setTimeout(() => {
                setShowLoader(false)
            }, 400);
        }, [])
    )
    
    if(showLoader){
        return(
            <View style={ProductDetailsScreenStyles.loaderView}>
                <Text style={HomeScreenStyles.loadingText}>{LoadingKey}</Text>
            </View>
        )
    }
    
    return(
        <View style={HomeScreenStyles.mainView}>
            <ScrollView style={HomeScreenStyles.mainView}>
            
            <View style={ProductDetailsScreenStyles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={ProductDetailsScreenStyles.leftArrowIcon}>
                    <Icons.LeftArrowSvg height={windowHeight(7)} width={windowWidth(13)}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate(ShoppingCartKey)}
                style={[HomeScreenStyles.cartIconView, ProductDetailsScreenStyles.cartIconTouch]}>
                    {shoppingCart.some(item => item.count) ?//items are present in cart
                    <View style={ProductDetailsScreenStyles.cartCountView}>
                    <Text style={ProductDetailsScreenStyles.cartCountText}>{getCartCount()}</Text>  
                    </View> : null
                    }
                    <Icons.CartBagSvg height={windowHeight(18)} width={windowWidth(18)}/>
                </TouchableOpacity>
            </View>

            <View style={ProductDetailsScreenStyles.productInfoView}>
                <Text numberOfLines={1} style={ProductDetailsScreenStyles.brandText}>{productDetails.brand}</Text>
                <Text numberOfLines={2} style={ProductDetailsScreenStyles.titleText}>{productDetails.title}</Text>
                <View style={ProductDetailsScreenStyles.starRatingView}>
                    <StartRating fullStar={Icons.fullStarPng} halfStar={Icons.halfStarPng} maxStars={productDetails.rating} rating={productDetails.rating}
                    halfStarEnabled={true} starSize={20} disabled={true} starStyle={ProductDetailsScreenStyles.starStyle}/>
                    <Text style={ProductDetailsScreenStyles.reviewText}>{ReviewsKey}</Text>
                </View>
            </View>

            <View style={ProductDetailsScreenStyles.carouselView}>
                <Carousel onSnapToItem={(activeIndex) => setCarouselActiveIndex(activeIndex)} data={getProductImages()} renderItem={renderImages}
                sliderWidth={SCREEN_WIDTH} scrollEnabled={true} itemWidth={SCREEN_WIDTH} enableSnap={true}/>
                
                <TouchableOpacity onPress={() => onProductLike(productIndex)} style={ProductDetailsScreenStyles.productLikeTouch}>
                    {
                    currentProductLiked ?
                    <Icons.LikeFilledSvg height={windowHeight(24)} width={windowWidth(24)}/> : <Icons.LikeSvg height={windowHeight(24)} width={windowWidth(24)}/>
                    }
                </TouchableOpacity>

                <View style={ProductDetailsScreenStyles.paginationView}>
                    <Pagination dotsLength={productDetails.images.length} renderDots={renderDots}/>
                </View>
            </View>

            <View style={ProductDetailsScreenStyles.priceView}>
                <Text style={ProductDetailsScreenStyles.priceText}>{"$" + productDetails.price}</Text>
                <View style={ProductDetailsScreenStyles.discountTextView}>
                    <Text style={ProductDetailsScreenStyles.discountText}>{"$" + productDetails.discountPercentage + " OFF"}</Text>
                </View>
            </View>

            <View style={ProductDetailsScreenStyles.buttonsView}>
                <TouchableOpacity onPress={() => onAddToCart(AddedToCartKey)} style={ProductDetailsScreenStyles.addToCartButton}>
                    <Text style={ProductDetailsScreenStyles.addToCartText}>{AddToCartKey}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onBuy()} style={ProductDetailsScreenStyles.buyNowButton}>
                    <Text style={ProductDetailsScreenStyles.buyNowText}>{BuyNowKey}</Text>
                </TouchableOpacity>
            </View>

            <View style={ProductDetailsScreenStyles.detailView}>
                <Text style={ProductDetailsScreenStyles.detailText}>{DetailsKey}</Text>
                <Text style={ProductDetailsScreenStyles.descriptionText}>{productDetails.description}</Text>
            </View>

            </ScrollView>
        </View>
    )
}

export default ProductDetailsScreen