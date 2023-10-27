const buildUrl = (lat: number | null, lng: number | null) => {
    if(!lat || !lng) return ''
    const params = new URLSearchParams({
        api: '1',
        destination: `${lat},${lng}`,
        travelmode: 'walking',
    });
    
    return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export { buildUrl }