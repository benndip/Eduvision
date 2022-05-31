import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '3%'
    },
    modelViewCard: {
        marginTop: '3%',
        width: '100%',
        height: '55%',
        elevation: 5,
        alignSelf: 'center',
        shadowColor: 'red',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    detailsText:{
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center',
        lineHeight: 25
    },
    changeView:{
        width: '20%',
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        zIndex: 9999,
        right: 10,
    },
    touchText: {
        color: '#e84393',
        fontWeight: 'bold',
        fontSize: 20
    },
    modelView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    titleText:{
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    modelLoadingText: {
        position: 'absolute',
        fontSize: 16
    },
    lableAndRotateViews: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        padding: 3,
        marginVertical: 10,
        justifyContent: 'space-between'
    },
    labelButton: {
        height: '100%',
        borderRadius: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#130f40',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    rotateButton: {
        height: '100%',
        borderRadius: 10,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b71540',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 5
    },
    labelText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    rotateButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    }
});

export default styles