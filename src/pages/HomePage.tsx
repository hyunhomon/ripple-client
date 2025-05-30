import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import HomeIcon from '@icons/ic_home.svg';

const HomePage = () => {
    return (
        <SafeAreaView>
            <Text>홈 화면</Text>
            <HomeIcon />
        </SafeAreaView>
    )
};

export default HomePage;