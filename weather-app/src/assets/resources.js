


export const getUrl = (coordinate)=>{
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lon}`;
    
    return weatherApiUrl;
}

