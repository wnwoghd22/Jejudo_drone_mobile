import React from 'react';
import Styled from 'styled-components/native';

const InputContainer = Styled.View`
    width: 100%;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    border-width: 1px;
`;
const InputField = Styled.TextInput`
    flex: 1;
`;

interface Props {
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    style?: Object;
    clearMode?: boolean;
    onChangeText?: (text: string) => void;
}

const Input = ({
    placeholder,
    keyboardType,
    secureTextEntry,
    style,
    clearMode,
    onChangeText,
} : Props) => {
    return (
        <InputContainer style = {style}>
            <InputField
                selectionColor = "#292929"
                secureTextEntry = {secureTextEntry}
                keyboardType = {keyboardType ? keyboardType : 'default' }
                autoCapitalize = "none"
                allowFontScaling = {false}
                placeholderTextColor = "#666666"
                placeholder = {placeholder}
                clearButtonMode = {clearMode ? 'while-editing' : 'never' }
                onChangeText = {onChangeText}
            />
        </InputContainer>
    );
}

export default Input;