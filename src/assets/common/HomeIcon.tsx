import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ color }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M12 2L2 12H5V21H19V12H22L12 2ZM7 19V12.7L12 7.7L17 12.7V19H7Z" fill={color} />
    </Svg>
);

export default HomeIcon;