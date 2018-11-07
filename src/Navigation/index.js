import { createStackNavigator } from 'react-navigation';
import Home from '../features/home/home';
import Shipment from "../features/shipment/shipment"

const Navigation = createStackNavigator(
  {
    Home: {
      screen: Home
    },
      Shipment :{
        screen: Shipment
      }
  },
  {
    initialRouteName: 'Home'
  }
);

export default Navigation;
