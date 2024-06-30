import { Loader } from "@googlemaps/js-api-loader";
import { GOOGLE_MAP_API_KEY } from ".";

/**
 * GoogleMapを使用するにあたり設定するものを定義したモジュール
 */
export const useGoogleMapSetUp = () => {
    const googleMapApiLoader = new Loader({
        apiKey: GOOGLE_MAP_API_KEY,
        version: 'weekly',
        libraries: ['places', 'geometry', 'drawing', 'marker', 'maps']
    })

    const mapCommonOption: google.maps.MapOptions = {
        tilt: 0,
        disableDefaultUI: true,
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,
        clickableIcons: true,
        center: {
            lat: 35.65861,
            lng: 139.74556,
        },
        zoom: 18,
    }

    const createMapInstance = (mapDiv: HTMLElement, option?: google.maps.MapOptions) => {
        return new google.maps.Map(mapDiv, {...option})
    }

    return {googleMapApiLoader, mapCommonOption, createMapInstance}
}
