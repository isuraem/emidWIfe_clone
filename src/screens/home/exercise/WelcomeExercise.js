// import React from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// const WelcomeExercise = () => {
//     return (
//         <View >
//             <Text>Register</Text>
//         </View>
//     );
// };

// export default WelcomeExercise;

import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, IMGS, ROUTES} from '../../../constants';
import Button from '../../../components/Button';

const WelcomeExercise = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.dark, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={IMGS.ex_1}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={IMGS.ex_2}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 200,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={IMGS.ex_3}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={IMGS.ex_4}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 370,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        // fontWeight: 800,
                        color: COLORS.white
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        // fontWeight: 800,
                        color: COLORS.white
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Strong mamas grow stronger babies</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>With every newborn baby, a little sun rises.</Text>
                    </View>

                    <Button
                        title="Start Today"
                        style={{
                            marginTop: 12,
                            width: "100%"
                        }}
                        onPress={() => navigation.navigate(ROUTES.EXERCISE_FORM)}
                    />

                    {/* <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View> */}
                </View>
            </View>
        </LinearGradient>
    )
}

export default WelcomeExercise