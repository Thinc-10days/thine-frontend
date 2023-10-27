import { useState, useEffect } from 'react';

interface Position {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
}

const usePosition = (): Position => {
    const [position, setPosition] = useState<Position>({
        latitude: null,
        longitude: null,
        error: null,
    });

    useEffect(() => {
        const success = (pos: GeolocationPosition) => {
            setPosition({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                error: null,
            });
        };

        const error = (err: GeolocationPositionError) => {
            setPosition({
                latitude: null,
                longitude: null,
                error: err.message,
            });
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    return position;
};

export default usePosition;
