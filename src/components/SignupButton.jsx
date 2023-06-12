import React from "react";
import { Pressable, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";
const SignupButton = ({onPress}) => {
    return(
         <Pressable style = {globalStyles.SignupButton}>
            <View>
                   <Text>Signup</Text>
            </View>
         </Pressable>
    )
}

const globalStyles = {
    SignupButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 55,
      width: 270,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#6966FF',
      borderRadius: 25,
      shadowColor: '#6966FF',
      shadowOpacity: 0.5,
      shadowRadius: 15,
      shadowOffset: { width: 1, height: 13 }, 
    }, 
    SignupContainer: {
    alignSelf:'center',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    width:'80%',
    height:'60%',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 1.8,
    shadowRadius: 15 ,
    shadowOffset : { width: 4, height: 13},
    paddingVertical: 10,
  }
  };
export default SignupButton;