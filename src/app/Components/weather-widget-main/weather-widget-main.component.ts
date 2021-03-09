import { DesignUtilityService } from './../../Services/design-utility.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  
  cityName :string='';
  error_msg;
  daysTemp:any=[];
  tempbyDate: any=[];
  fiveDaysWeather: any=[];
  
  constructor( private dsgn_Utility: DesignUtilityService) {}

  ngOnInit() {
   
    this.dsgn_Utility.getDetails()
    .subscribe(
      (data)=>{
        // console.log("Response ",data);
        this.setWeatherData(data);
      },
      (error)=>this.error_msg=error)
  }
  
  setWeatherData(data){
    this.cityName =data.city.name; //fetching and storing the city name in cityName variable
    this.daysTemp = data.list;
    
    //to get the data of all new date and storing in tempbyDate
    this.tempbyDate = this.daysTemp.filter((val, i,Arr)=>{
       return i%8 === 0
    }) 
  
    //creating an array fiveDaysWeather and storing all main(temp, temp_min, temp_max, humidity) data in it.
    this.fiveDaysWeather = this.tempbyDate.map((res)=>{
      return res.main
    });
  }
}
