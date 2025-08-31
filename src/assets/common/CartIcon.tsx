import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CartIcon = ({ color }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M7 18C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18Z" fill="#FFA463" />
        <Path d="M17 18C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 18.4477 16.4477 18 17 18Z" fill="#FFA463" />
        <Path d="M3 3H5.8L7.6 15.6C7.6 15.8209 7.77909 16 8 16H18C18.2209 16 18.4 15.8209 18.4 15.6L19.2 8H6.8" stroke={color} strokeWidth="2" />
        <Path d="M19.2 8H6.8L3 3H5.8L7.6 15.6L18.4 15.6L19.2 8Z" fill={color} fillOpacity="0.2" />
    </Svg>
);

export default CartIcon;
