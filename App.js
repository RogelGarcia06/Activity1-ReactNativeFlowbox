import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
      <Image source={{uri: 'https://th.bing.com/th/id/R.841832317fcf7b5c274765400f62c32c?rik=gN1M%2fjnqfN2%2fkQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f32900000%2fAce-one-piece-32958351-495-700.jpg&ehk=Kt7%2bzQt5pGWC6%2f0MqpbTNfH1cD5ghqfmflwhknpMzhI%3d&risl=&pid=ImgRaw&r=0'}}style ={styles.Picture} />
      </View>
  )
  };
  function BioData() {
  return (
    <View>
      <Text style={styles.name}> Rogel J. Garcia </Text>
      <Text style={styles.course}> BS Information Technology 3 </Text>
    </View>
  );
}
  
  const SubjectLabel = () =>{
    return(
      <View>
        <Text style={styles.label}> My Subject </Text>
        </View>
        
    )
  }
  const SubjectOfferings = ()=>{
    return(
       
         <View style = {styles.subjectContainer}>
    <View style = {styles.subjectOfferings}>
          <View>
            <Text style = {styles.subjectCode}>ELEC 2</Text>
            </View>
            <View>
            <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
            <Text style = {styles.subjectUnits}> Units: 3</Text>
          </View>
          </View>

          
       
        <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

        <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

         <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

         <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}     

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture />
      <BioData />
      </View>

      <View style ={styles.label}>
      <SubjectLabel/> 
      </View>

      
      <SubjectOfferings/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },

  profile: {
    backgroundColor: '#4169e1',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#ffffff',
    fontSize: '30px',
    marginLeft: '20px' 
  },
  course: {
    color: '#ffffff',
    marginLeft: '20px',
  },

 label:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
  fontWeight: 'bold'
 },

 subjectOfferings:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: '#DCDCDC',
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 subjectCode:{
  fontSize: '22px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescription:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectUnits:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'white',
 },

seeMore:{
  color:'#24469C',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
});
  
