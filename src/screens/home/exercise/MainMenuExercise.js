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
    ScrollView,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../../assets/icons/progress.svg';
import CircleProgressBar from '../../../components/CircleProgressBar';
import { COLORS, ROUTES } from '../../../constants';
// import Button from '../../../components/Button';
// import Carousel from 'react-native-snap-carousel-v4';

// const carouselRef = useRef(null);

const carouselItems = [
    {
        title: "Item 1",
        text: "Text 1",
    },
    {
        title: "Item 2",
        text: "Text 2",
    },
    {
        title: "Item 3",
        text: "Text 3",
    },
    {
        title: "Item 4",
        text: "Text 4",
    },
    {
        title: "Item 5",
        text: "Text 5",
    },
];
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1st Day Plan',
        time: '5 min',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2st Day Plan',
        time: '15 min',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '3st Day Plan',
        time: '10 min',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e88d72',
        title: '3st Day Plan',
        time: '10 min',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e88d72',
        title: '3st Day Plan',
        time: '10 min',
    },
];

const sliderrenderItem = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: 'floralwhite',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
        }}>
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>
    );
};
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor, flexDirection: "row", width: '100%' }]}>
        <Image
            source={require("../../../assets/user.jpg")}
            //borderRadius style will help us make the Round Shape Image
            style={{ width: 50, height: 50, borderRadius: 200 / 2, paddingVertical: 10, paddingHorizontal: 10 }}
        />
        <View style={{ width: 200, height: 50, borderRadius: 200 / 2, paddingVertical: 5, paddingHorizontal: 10 }}>
            <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
            <Text style={[styles.title, { color: textColor }]}>Duration : {item.time}</Text>
        </View>
        <View style={{ width: 50, height: 50, paddingVertical: 10, alignItems: "flex-end" }}>
            <Icon name='arrow-forward-sharp' size={22} />
        </View>
    </TouchableOpacity>
);

const MainMenuExercise = (props) => {
    const { navigation } = props;
    const [selectedId, setSelectedId] = useState();

    function exerciseNavigate(value) {
        setSelectedId(value);
        navigation.navigate(ROUTES.EXERCISE_VIEW)
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <View style={{
                flexDirection: "row",
                marginTop: 15,
                marginHorizontal: 20,
                borderRadius: 20,
                borderColor: 'white',
                borderWidth: 1,
                position: "relative",
                backgroundColor: backgroundColor,
                elevation: 5, // Add elevation for shadow effect
                shadowColor: '#000', // Specify shadow color
                shadowOffset: { width: 0, height: 2 }, // Specify shadow offset
                shadowOpacity: 0.25, // Specify shadow opacity
                shadowRadius: 3.84, // Specify shadow radius
            }}>
                <Item
                    item={item}
                    onPress={() => exerciseNavigate(item.id)}
                    textColor={color}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.secondContainer} >
                <Text style={styles.topTextMain}>Active Exercises Plans</Text>
                <TouchableOpacity>
                    <Logo width={30} height={30} style={{ marginTop: 10, marginRight: 10 }} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ height: 300 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    style={{ marginBottom: 20 }}
                />
            </ScrollView>
            <Text style={styles.topText}>Progress</Text>
            <View style={styles.progressMainView}>
                <CircleProgressBar percentage={55} />
                <View style={styles.progressTextView}>
                    <Text>Duration</Text>
                    <Text>1hr 30m</Text>

                </View>
                <View style={styles.progressTextView}>
                    <Text>Completed</Text>
                    <Text>1hr 30m</Text>
                </View>
            </View>
            <View style={styles.thirdContainer} >
                <Text style={styles.topText}>Follow these</Text>
                <ScrollView style={{ height: 300, marginLeft: 10 }} horizontal={true}>
                    <View style={styles.tileContainer}>
                        <Image
                            source={require("../../../assets/Exercise_illness.png")}
                            //borderRadius style will help us make the Round Shape Image
                            style={{ width: 72, height: 100, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 10, marginLeft: 20, marginTop: 10 }}
                        />
                        <View>
                            <Text style={{ width: 100, marginTop: 5 }}>Please make sure to inform illness or difficulties</Text>
                            <TouchableOpacity
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>Inform</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={styles.tileContainer}>
                    <Image
                            source={require("../../../assets/exercise_guides.png")}
                            //borderRadius style will help us make the Round Shape Image
                            style={{ width: 100, height: 100, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 10, marginLeft: 10, marginTop: 10 }}
                        />
                        <View>
                            <Text style={{ width: 100, marginTop: 20, marginLeft: 5 }}>Please follow the exercise guidence and steps on video</Text>

                        </View>
                    </View>
                    <View style={styles.tileContainer}>
                    <Image
                            source={require("../../../assets/tracking.jpg")}
                            //borderRadius style will help us make the Round Shape Image
                            style={{ width: 100, height: 100, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 10, marginLeft: 10, marginTop: 10 }}
                        />
                        <View>
                            <Text style={{ width: 100, marginTop: 20, marginLeft: 5 }}>Please wear the watch for necessary exercises to track your self</Text>

                        </View>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        // marginTop: StatusBar.currentHeight || 0,
        paddingBottom: 20,
        marginBottom: 10,
        backgroundColor: "#FDFCF6"
    },
    progressMainView: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        borderRadius: 15,
        marginTop: 10,
        paddingVertical: 10
    },
    progressTextView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "30%",
        // backgroundColor: COLORS.black
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 14,
    },
    topText: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    topTextMain: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    tileContainer: {
        width: 220,
        height: 120,
        marginRight: 20,
        marginLeft: 10,
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
        flexDirection: "row"
    },
    thirdContainer: {
        marginTop: 10
    },
    button: {
        backgroundColor: '#841584',
        padding: 8,
        borderRadius: 20,
        height: 30,
        width: "60%",
        marginTop: 10,
        marginLeft: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 12, // Set your desired font size here
        textAlign: 'center',
    },
});

export default MainMenuExercise;