import { StyleSheet, Dimensions } from "react-native";


const globalStyles = StyleSheet.create({
    

    container:{
        flex: 1,
        backgroundColor:'white',
        padding: 8,
        margin:'auto'
    },
    
    loginContainer:{
        flex: 1,
        alignContent:'center',
        justifyContent:'center',
        flexDirection:'column',
        width: Dimensions.get('window').width

        
    },
    login_Container:{
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

    },
    userInput: {
        marginTop:'10%',
        width: '90%',
        textAlignVertical:'center',
        borderBottomWidth: 10,
        borderBottomColor:'#6966FF',
     },
     userInputText:{
         color: '#6966FF',
         fontSize: 18,
         textAlign: 'center',
         lineHeight: 24,
     },
     login_Title:{
        fontSize: 30,
        color: '#6966FF',
        fontWeight: 'bold',
        left: '10%',
        bottom: '3%'
        
    },
    register_text : {
        alignSelf:'center',
        top:'10%'
    },


    // Same button styles for Sign Up button in Sign up page
    
    LoginButton:{ 
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width:"90%",
        backgroundColor: '#6966FF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},

    },
   
    LoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // Sign up button in Login Page
    RegisterButton: {
        alignSelf:'center',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.5,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    GetStartedText: {
        color: '#6966FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    SignupButton:{              //extra added
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 270,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#6966FF',
        borderRadius: 25,
        shadowColor: '#6966FF',
        shadowOpacity: 0.8,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    SignupText: {             //extra added
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    GetStartedText: {
        color: '#6966FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    SignupContainer: {
        alignSelf: 'center',
        //alignSelf:'center',
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


})


export default globalStyles