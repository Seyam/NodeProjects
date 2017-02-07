#Bark Tracker
This sketch uses the Intel Edison to listen to a sound sensor on Port A0. The Edison analyzes any sound that it hears, and then logs the sound level and time to a Phant.io data feed if the sound is over a certain threshold. Check out the [Instructable](http://www.instructables.com/id/Push-to-datasparkfuncom-from-an-Intel-Edison-with-/) to learn how to build the circuit.


### Links
- [data.sparkfun Phant.io stream link](https://data.sparkfun.com/streams/yA8Llvj4MXtdr3OmZ2VG)
- [analog.io chart link](http://analog.io/#/s29)
	
### Tech
- Node.js
- MRAA
- Forever
- Request
- Moment
- Moment.timezone
	

### Hardware
- [Intel Edison w/ Arduino Breakout Board](https://www.sparkfun.com/products/13097)
- [Grove Sound Sensor](http://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html)
- [Grove Base Shield](http://www.seeedstudio.com/depot/Grove-Base-Shield-p-754.html)