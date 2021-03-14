import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import {
    DrawerContentScrollView,
    DrawerContentOptions,
    DrawerContentComponentProps,
    DrawerItem
} from '@react-navigation/drawer';

import { UserContext } from '@src/Context/UserData';

const Header = Styled.View`
    border-bottom-width: 1px;
    border-color: #D3D3D3;
    padding: 8px 16px;
`;

const Title = Styled.Text``;

const Button = Styled.TouchableHighlight`
    padding: 8px 16px;
`;

const ButtonContainer = Styled.View`
    flex-direction: row;
    align-items: center;
`;

const Icon  = Styled.Image`
    margin-right: 8px;
`;

const Label = Styled.Text`
    font-size: 16px;
`;

const Footer = Styled.View`
    width: 100%;
    border-top-width: 1px;
    border-color: #D3D3D3;
`;

interface Props {
    props: DrawerContentComponentProps<DrawerContentOptions>;
}

const DrawerMenu = (props) => {
    const {user, logout} = useContext<IUserContext>(UserContext);

    return (
        <DrawerContentScrollView {...props}>
            <Header>
                <Title>안녕하세요, {user.name}님</Title>
            </Header>
            
            <DrawerItem
                label = '메인 화면'
                onPress = {() => props.navigation.navigate('Main')}
            />
            <Button onPress = {() => {
                //props.navigation.navigate('Account');
            }}>
                <ButtonContainer>
                    <Icon />
                    <Label>내 정보</Label>
                </ButtonContainer>
            </Button>
            
            <DrawerItem
                label = '공지사항'
                onPress = {() => props.navigation.navigate('Notice')}
            />

            <DrawerItem
                label = '수업 신청'
                onPress = {() => props.navigation.navigate('Schedule')}
            />
           
            <Footer>
                <Button onPress = {() => {
                    logout();
                }}>
                    <ButtonContainer>
                        <Icon />
                        <Title>로그아웃</Title>
                    </ButtonContainer>
                </Button>
            </Footer>
        </DrawerContentScrollView>
    );
}

export default DrawerMenu;