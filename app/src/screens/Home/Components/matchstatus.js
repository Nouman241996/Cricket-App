import React ,{ Component } from 'react';
import
{
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions, 
    Button,
    TouchableHighlight,

} from 'react-native';
import { icons } from '../../../../res/constants';
import CountDown from '../../../component/countComponent/countdown'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {styles} from './style'

class Matchstatuscomponent extends Component {

  
  constructor(props) {
    super(props);
    const status_match = ["UPCOMING","LIVE","COMPLETED"];
    const images_header=[
      {name:"barimage",path:icons.bars},
      {name:"logoimage",path:icons.logo},
      {name:"searchimage",path:icons.search},
      
    ];
    var timestamp1 = this.props.time;
    var hours1 = Math.floor(timestamp1 / 60 / 60);
    this.state = {
      setClick: false,
      status_match,
      images_header,
      ID:'',
      is_select:'',
      timer:50,
      is_live:false,


  }
 
}
componentDidMount(){
  this.interval = setInterval(
    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  );
}

componentDidUpdate(){
  if(this.state.timer === 1){ 
    clearInterval(this.interval);
  }
}

componentWillUnmount(){
 clearInterval(this.interval);
}

handlerButtonOnClick = (i) =>{  
  const newstate=!this.state.setClick;
  this.setState({
     setClick: newstate,
     is_select:i,    
  });
  
}
handlechange=(e)=>{
  this.setState({is_live:true})
  
}
calculate_bar_width_orange=()=>{


}
render() {
  
  
  var imagecolorfor1='\'rgba'+'('+this.props.imagecolor1+','+'0.3'+')\'';
  var imagecolorfor2='\'rgba'+'('+this.props.imagecolor2+','+'0.3'+')\'';
  var date_time=JSON.stringify(this.props.matchdatetime);
  var match_date=date_time.substring(1,11)
  // console.log(match_date)
  var msDiff =   new Date().getTime() -new Date(match_date).getTime(); //Future date - current date
  //var daysTill30June2035 = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  //console.log(msDiff/1000)
  
  
  //{Time coming from API}
  var timestamp = this.props.time;
  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - (hours * 60);
 
  //console.log(hours+':'+minutes+':'+ seconds)
  var date_time=this.props.matchdatetime;
  var d = new Date(match_date);
  let shortMonth = d.toLocaleString('en-us', { month: 'short' }); /* Jun */
  let month=shortMonth.substring(4,10);
  let year=shortMonth.substring(20,24);
  let final_match_date= month+"TH "+year;

  new Date(match_date_time).toLocaleString('en-us', { month: 'short' }).substring(4,10)+"TH "+ new Date(match_date).toLocaleString('en-us', { month: 'short' }).substring(20,24);
 
  if(minutes<25 && hours<=0)
  {
    this.state.is_live=true;
  }
  else{
    this.state.is_live=false;
  }

  return(

      <View>
      
      <TouchableOpacity onPress={() => this.props.navigation.navigate('contest',{
            name: this.props.title,
            date:this.props.time,
            day:final_match_date,
            match_id_c:this.props.matchid,

          })}
       activeOpacity={.9} style={styles.leaugecontainer}>
      
          <View style={{flexDirection:'row',justifyContent:'center', marginTop:-10,}}>
              <View style={styles.noofuserstag}>
                
              <View style={{marginRight:3}}>
                  <Image source={icons.vector} />
                  </View>
                 <View>
                 <Text>434 </Text>
                 </View>
               </View>
             </View>
          <View style={{flexDirection:'row',justifyContent:'center', marginTop:2,marginBottom:3}}>
               <Text>
                {this.props.leaugename}
               </Text>
               
             </View>
  
               
           <View style={styles.vscontainer}>
             
             <View style={[styles.vsflagleft, {backgroundColor:imagecolorfor1}]} >
               <Image source={{uri: this.props.imagepath1 }}  resizeMode="contain" style={styles.flagimage }/>
               <Text style={styles.vsflagtext}>{this.props.shortnameteam1}</Text>
            </View>
           
            <View>
              <Text style={styles.vstext} >VS  </Text>
            </View>
            <View style={[styles.vsflagright,{backgroundColor:imagecolorfor2}]}>
              <Image source={{uri: this.props.imagepath2 }}  resizeMode="contain" style={styles.flagimage }/>
              <Text style={styles.vsflagtext}>{this.props.shortnameteam2}</Text>
            </View>
            
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginBottom:5, marginTop:0}}>
          
            <View style={[this.state.is_live == true? styles.timetag: styles.timetagblack ]}>
                 <View style={{marginRight:5}}>
                 <Image style={this.state.is_live == true? {tintColor:'white'}: {tintColor:'orange'}} source={icons.timer}/>
                 </View>
                 <View>
                 <CountDown
                      size={5}
                      until={this.props.time}
                      digitStyle={{backgroundColor: null, borderWidth: 0, borderColor: null}}
                      digitTxtStyle={{color: '#fff',fontSize: RFValue(8, 580),}}
                      timeLabelStyle={{color: '#fff', fontSize: RFValue(8, 580), fontWeight: 'bold'}}
                      timeToShow={['D','H', 'M', 'S']}
                      timeLabels={{d:'D',h:'H',m: 'M', s: 'S'}}
                      showSeparator ={true}
                      separatorStyle={{color:'#fff'}}
                  />
               </View>
               </View>
               {this.state.is_live?
                <View style={styles.chatuptag}>
                <Text style={{fontSize: RFValue(10, 580), }}>
                  Line Up Cut
                </Text>
                </View>:null
              
              }
           </View>
          </TouchableOpacity>
          
      </View>
  )

  }
}

export default Matchstatuscomponent;