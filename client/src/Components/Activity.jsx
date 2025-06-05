import { format } from "timeago.js";
"use client";

import{useEffect,useState} from 'react';
import { APIProvider, Map, useMapsLibrary, useMap,} from "@vis.gl/react-google-maps";



const Activity = ({activity}) => {
    const position = {lat: 4.711, lng: -74.072};
    const [routeInfo, setRouteInfo] = useState({ distance: "", duration: "" });

    return (
        <div className='p-4 bg-slate-50 rounded-xl mb-8'>
            <div className="flex items-center gap-4">
                <span className="font-medium">{activity.user.username}</span>
                <span className="text-sm text-gray-500">{format(activity.createdAt)}</span>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-8 items-start">
                {/* Text section */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-4">
                        <span>
                            <strong>Origin:</strong> {activity.origin}
                        </span>
                        <span>
                            <strong>Destination:</strong> {activity.destination}
                        </span>
                    </div>
                    {/* Show distance and duration below */}
                    {routeInfo.distance && routeInfo.duration && (
                        <div className="mt-2 text-gray-700">
                            <div><strong>Distance:</strong> {routeInfo.distance}</div>
                            <div><strong>Duration:</strong> {routeInfo.duration}</div>
                        </div>
                    )}
                </div>
                {/* Map section */}
                <div style={{height: "300px", width: "400px"}} className="flex-shrink-0">
                    <APIProvider apiKey='AIzaSyCGLqSk0WRgbC9zZBIuyfzFaS9423Gedyw'>
                        <Map 
                            center={position}
                            zoom={12}
                            options={{
                                gestureHandling: "auto",
                                zoomControl: true,
                                draggable: true,
                                scrollwheel: true,
                                disableDefaultUI: false,
                            }}>
                            <Directions activity={activity} onRouteInfo={setRouteInfo}/>
                        </Map>
                    </APIProvider>
                </div>
            </div>
        </div>
    );
};

export default Activity;

function Directions({activity, onRouteInfo }) {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes");

    const [directionsService, setDirectionsService] = useState();
    const [directionsRenderer, setDirectionsRenderer] = useState();
    const [routes, setRoutes] = useState([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
        if(!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}));
    },[routesLibrary, map]);

    useEffect(()=> {
        if(!directionsService || !directionsRenderer) return;

        directionsService.route({
            origin: activity.origin,
            destination: activity.destination,
            travelMode: google.maps.TravelMode.WALKING,
            provideRouteAlternatives: true,
        }).then((response) => {
            directionsRenderer.setDirections(response);
            setRoutes(response.routes);
            const firstLeg = response.routes[0]?.legs[0];
            if (firstLeg && onRouteInfo) {
                onRouteInfo({
                    distance: firstLeg.distance.text,
                    duration: firstLeg.duration.text,
                });
            }
        });
    }, [directionsService, directionsRenderer, activity, onRouteInfo]);

    console.log(routes);
    if(!leg) return null;

    return <div className="direction">
        <h2></h2>
    </div>
}