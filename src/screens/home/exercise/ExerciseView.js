import React, { useState, useRef } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    ScrollView
} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../../../constants';
import Button from '../../../components/Button';
import TimeLogo from '../../../assets/icons/time.svg';
import RoundLogo from '../../../assets/icons/rounds.svg';
import WatchLogo from '../../../assets/icons/watch.svg';

const ExerciseView = () => {
    return (
        <>
            <Text style={styles.topTextMain}>Exercise Details</Text>
            <View style={styles.tileContainer}>
                <Image
                    source={IMGS.ex_1}
                    style={{ width: "80%", 
                    height: 250, 
                    marginLeft: "10%", 
                    borderRadius: 15, 
                    borderWidth: 1,
                    borderColor: "#d0c6c6",
                    marginTop: 15
                }}
                />
                <Text style={styles.topTextSecond}>Details</Text>
                <View style={styles.exerciseDetailsView}>
                    <Text> Yoga as exercise is a physical activity consisting mainly of postures, often connected by flowing sequences, sometimes accompanied by breathing exercises, and frequently ending with relaxation lying down or meditation. Yoga in this form has become familiar across the world, especially in the US and Europe.</Text>
                </View>
                <Text style={styles.topTextSecond}>Activity</Text>
               
                <View style={styles.mainActivityView}>
                    <View style={styles.secondActivityView}>
                        <TimeLogo width={20} height={20} />
                        <Text> 5 min</Text>
                    </View>
                    <View style={styles.secondActivityView}>
                        <RoundLogo width={20} height={20} />
                        <Text> 5 Rounds</Text>
                    </View>
                    <View style={styles.secondActivityView}>
                        <WatchLogo width={20} height={20} />
                    </View>
                </View>
                <Button
                        title="Start"
                        style={{
                            marginTop: 12,
                            width: "70%",
                            marginLeft: "15%"
                        }}
                        color ="#ADD8E6"
                        filled = {true}
                        // onPress={() => navigation.navigate(ROUTES.EXERCISE_FORM)}
                    />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    topTextMain: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    topTextSecond: {
        marginTop: 15,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20
    },
    tileContainer: {
        width: "90%",
        height: 600,
        marginRight: 20,
        marginLeft: "5%",
        marginTop: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: COLORS.white,
    },
    exerciseDetailsView: {
        marginLeft: 20,
        height: 100,
        width: "85%",
        textAlign: "left"
    },
    mainActivityView:{
        display: "flex",
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10
    },
    secondActivityView: {
        flexDirection: 'row', // Align children in a row
        alignItems: 'center', // Center children vertically in the container
        justifyContent: 'center', // Center children horizontally in the container
        paddingHorizontal: 10, // Add some padding around the content
        paddingVertical: 5, 
        backgroundColor: "#ADD8E6",
        marginRight: 10,
        borderRadius: 15
    }
});

export default ExerciseView;