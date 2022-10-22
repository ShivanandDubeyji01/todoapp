const styles ={
    taskContainer:{
        justifyContent:'center',
        display:'flex'
    },
    taskWrapper:{
        marginBottom:20,
        width:'80%',
        textAlign:'center',
        alignSelf:'center',
        borderRadius:4,
        display:'flex',
        justifyContent:'space-between',
        boxShadow:'0 10px 15px 15px rgba(0,0,0,0.1)'

    },
    task:{
        textAlign:'right',
        TextDecoder:'none',
        padding:20,
        fontSize:20
    },
    iconsWrapper:{
        paddingTop:40
    },
    completedIcon:{
        fontSize: 20,
        color:'springgreen'
    },
    deleteIcon:{
        paddingLeft: 10,
        paddingRight: 20,
        fontSize:20,
        color:'red'
    }


}

export default styles;