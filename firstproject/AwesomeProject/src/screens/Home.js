import React from 'react';
import {View,Text,Button , StyleSheet} from 'react-native';

function Home(props){
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Go to About" onPress={()=>props.navigation.navigate("About")}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default Home;