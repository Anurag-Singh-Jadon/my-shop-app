import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';
import ProductsOverviewScreen from '../screens/shops/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shops/ProductDetailScreen';
import CartScreen from '../screens/shops/CartScreen';
import OrdersScreen from '../screens/shops/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOptions = {
    headerStyle:{
       backgroundColor:Platform.OS=== 'android'? Colors.primary: ''
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans'
    },
    headerTintColor:Platform.OS=== 'android'? 'white' : Colors.primary
};


const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
    
},{
    navigationOptions:{
        drawerIcon: drawerConfig => 
        <Ionicons
         name={Platform.OS==='android' ? 'md-cart': 'ios-cart'}
         size={23}
         color={drawerConfig.tintColor}
        />
    },
   defaultNavigationOptions:defaultStackNavOptions 
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},{
     navigationOptions:{
         drawerIcon: drawerConfig => 
         <Ionicons
          name={Platform.OS==='android' ? 'md-list': 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
         />
     },
    defaultNavigationOptions:defaultStackNavOptions 
}
);

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
},{
     navigationOptions:{
         drawerIcon: drawerConfig => 
         <Ionicons
          name={Platform.OS==='android' ? 'md-create': 'ios-create'}
          size={23}
          color={drawerConfig.tintColor}
         />
     },
    defaultNavigationOptions:defaultStackNavOptions 
}
);

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
},
{
  contentOptions:{
      activeTintColor: Colors.primary
  }
});

export default createAppContainer(ShopNavigator);