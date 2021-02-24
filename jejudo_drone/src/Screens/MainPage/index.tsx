import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Input from '@src/Components/Input';
import Button from '@src/Components/Button';
import Styled from 'styled-components/native';

import { UserContext } from '@src/Context/UserData';

const Container = Styled.SafeAreaView`
    flex: 1;
`;
const FormContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
const StyledText = Styled.Text``;

type NavigationProp = StackNavigationProp<MainPageParamList, 'MainPage'>;
interface Props {
    navigation: NavigationProp;
}

const MainPage = ({ navigation } : Props) => {
    const [ userName, setUserName ] = useState<string>('');
    const {user, logout} = useContext<IUserContext>(UserContext);

    return (
        <Container>
            <FormContainer>
                <StyledText>{user.name}</StyledText>
            </FormContainer>
        </Container>
    );
}

export default MainPage;