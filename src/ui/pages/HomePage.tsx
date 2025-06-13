import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import NavigationBar from '@components/NavigationComponent';

const HomePage = () => {
    return (
        <SafeAreaView>
            <NavigationBar
                activeIndex={0} onPress={()=>{}}
            />
        </SafeAreaView>
    )
};

export default HomePage;