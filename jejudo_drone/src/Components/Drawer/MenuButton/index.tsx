import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import Styled from 'styled-components/native';

const Button = Styled.TouchableOpacity``;

const MenuButton = (navigation) => {
    return (
        <Button
            label = '메뉴'
            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
        />
    );
}

export default MenuButton;