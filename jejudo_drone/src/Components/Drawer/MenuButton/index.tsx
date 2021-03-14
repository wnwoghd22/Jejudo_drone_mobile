import React from 'react';
//import { Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image``;

interface Props {
    navigation;
    style? : object;
}

const MenuButton = ({navigation, style}: Props) => {

    const onPress = () => navigation.dispatch(DrawerActions.openDrawer());

    return (
        <Container
            style = {style}
            onPress = {() => {
                if ( onPress && typeof onPress === 'function') {
                    onPress();
                }
            }}
        >
            <Icon source = {require('@src/Assets/Images/ic_menu.png')}/>
        </Container>
    );
}
/*****************for test****************
const MenuButton = ({onPress}: Props) => {
    return (
        <Button
            title = '메뉴'
            onPress = {onPress}
        />
    );
}
*****************************************/

export default MenuButton;