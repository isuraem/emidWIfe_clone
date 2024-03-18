import React from 'react';
import { TextInput, View, SafeAreaView, KeyboardAvoidingView, Text, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import { COLORS, IMGS, ROUTES } from '../../../constants';
import Button from '../../../components/Button';

const HealthFormExercise = (props) => {
    const { navigation } = props;
    return (
        <SafeAreaView >
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <ScrollView style={Styles.MainView}>
                        <View style={Styles.mainInputBox}>
                            <Text style={Styles.textInputLabel}>SystolicBP (mmHg)</Text>
                            <View style={Styles.inputBox}>
                                <TextInput
                                    style={Styles.input}
                                    onChangeText={handleChange('SystolicBP')}
                                    onBlur={handleBlur('SystolicBP')}
                                    value={values.SystolicBP}
                                    placeholder="SystolicBP" />
                            </View>

                            <Text style={Styles.textInputLabel}>DiastolicBP (mmHg)</Text>
                            <View style={Styles.inputBox}>
                                <TextInput
                                    style={Styles.input}
                                    onChangeText={handleChange('DiastolicBP')}
                                    onBlur={handleBlur('DiastolicBP')}
                                    value={values.DiastolicBP}
                                    placeholder="DiastolicBP" />
                            </View>
                            <Text style={Styles.textInputLabel}>Blood glucose(mmol/L)</Text>
                            <View style={Styles.inputBox}>

                                <TextInput
                                    style={Styles.input}
                                    onChangeText={handleChange('Blood_glucose')}
                                    onBlur={handleBlur('Blood_glucose')}
                                    value={values.Blood_glucose}
                                    placeholder="Blood_glucose" />
                            </View>
                            <Text style={Styles.textInputLabel}>BodyTemp (F)</Text>
                            <View style={Styles.inputBox}>

                                <TextInput
                                    style={Styles.input}
                                    onChangeText={handleChange('BodyTemp')}
                                    onBlur={handleBlur('BodyTemp')}
                                    value={values.BodyTemp}
                                    placeholder="BodyTemp" />
                            </View>
                            <Text style={Styles.textInputLabel}>HeartRate (bpm)</Text>
                            <View style={Styles.inputBox}>

                                <TextInput
                                    style={Styles.input}
                                    onChangeText={handleChange('HeartRate')}
                                    onBlur={handleBlur('HeartRate')}
                                    value={values.HeartRate}
                                    placeholder="HeartRate" />
                            </View>
                        </View>
                        <Button
                            title="Submit"
                            style={{
                                marginTop: 25,
                                width: "80%",
                                marginLeft: "10%",
                                marginBottom: 30
                            }}
                            color={COLORS.primary}
                            filled={true}
                            onPress={() => navigation.navigate(ROUTES.EXERCISE_MAIN_MENU)}
                        />

                        {/* <View style={Styles.mainButonBox}>
                            <Button styles={Styles.submitButton} onPress={handleSubmit} title="Submit" />
                        </View> */}


                    </ScrollView>
                )}
            </Formik>
        </SafeAreaView>
    )

};

export default HealthFormExercise;

const Styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#1899D6',
        borderRadius: 10, // Adjust the border radius as needed
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    textInputLabel: {
        marginTop: 5
    },
    MainView: {
        marginTop: 20,
        paddingBottom: 25,
    },
    mainInputBox: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 10
    },
    mainButonBox:{
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 20
    },
    inputBox: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#fff', // Add background color if needed
        borderRadius: 15, // You can add border radius here if needed
        marginTop: 10
    },
    input: {
        padding: 15,
        marginVertical: 10,
        borderRadius: 15,
        height: 35,
        paddingVertical: 0,
    },
});

