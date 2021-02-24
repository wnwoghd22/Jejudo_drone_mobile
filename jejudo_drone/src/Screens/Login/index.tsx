import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '@src/Components/Input';
import Button from '@src/Components/Button';

import { UserContext } from '@src/Context/UserData';

const Container = Styled.SafeAreaView`
    flex: 1;
`;
const FormContainer = Styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 32px;
`;
const Logo = Styled.Text`
    color: #FFFF00;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
`;

type NavigationProp = StackNavigationProp<LoginParamList, 'Login'>;
interface Props {
    navigation: NavigationProp;
}

const Login = ({ navigation } : Props) => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const {login} = useContext<IUserContext>(UserContext);

    return (
        <Container>
            <FormContainer>
                <Logo>JEJUDO-DRONE</Logo>
                <Input style = {{marginBottom: 16}} placeholder = "이메일" onChangeText = {setEmail}/>
                <Input style = {{marginBottom: 16}} placeholder = "비밀번호"
                    secureTextEntry = {true} onChangeText = {setPassword} />
                
                <Button
                    label = "로그인"
                    style = {{ marginBottom: 24 }}
                    onPress = {() => {
                        login(email, password);
                        console.log("touched!");
                    }}
                />
            </FormContainer>
        </Container>
    );
}

export default Login;