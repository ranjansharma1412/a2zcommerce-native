import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CategoryIcon = ({ color }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M10 3H3V10H10V3Z" fill={color} />
        <Path d="M21 3H14V10H21V3Z" fill={color} />
        <Path d="M10 14H3V21H10V14Z" fill={color} />
        <Path d="M21 14H14V21H21V14Z" fill="#FFA463" fillOpacity="0.3" />
    </Svg>
);

export default CategoryIcon;
