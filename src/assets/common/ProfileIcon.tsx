import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ color }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill={color} />
        <Path d="M20 22C20 18.134 16.4183 15 12 15C7.58172 15 4 18.134 4 22H20Z" fill={color} />
        <Path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#FFA463" strokeWidth="2" />
        <Path d="M20 22C20 18.134 16.4183 15 12 15C7.58172 15 4 18.134 4 22" stroke="#FFA463" strokeWidth="2" />
    </Svg>
);

export default ProfileIcon;
