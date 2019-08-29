import Axios from 'axios';

function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

export const getAddressByLocation = async () => {
    const { coords } = await getCurrentPosition();
    const { latitude, longitude } = coords;

    const googleMapUrl = 'https://maps.googleapis.com/maps/api';
    const placeDetailsByLocationUrl = `${googleMapUrl}/geocode/json?`;
    const response = await Axios({
      method: 'get',
      url: `${placeDetailsByLocationUrl}&latlng=${latitude},${longitude}&location_type=ROOFTOP&result_type=street_address&key=AIzaSyD_y--2NQuQa6VertIH6YUmy_oU2mw8vHw`
    });
    return response
}