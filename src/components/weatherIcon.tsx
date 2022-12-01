import WbSunnyIcon from "@mui/icons-material/WbSunny"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
export const WeatherIcon = (props: any) => {
    const weatherStates = [
        {
            name: "default",
            icon: <AirIcon {...props} />
        },
        {
            name: "sunny",
            icon: <WbSunnyIcon {...props}></WbSunnyIcon>
        },
        {
            name: "cloudy",
            icon: <CloudIcon {...props}></CloudIcon>
        },
        {
            name: "thunderstorm",
            icon: <ThunderstormIcon {...props}></ThunderstormIcon>
        },
    ];

    const weatherState = props.weatherState;
    const weatherIcon = weatherStates.find((item) => weatherState.toLowerCase().includes(item.name)) || weatherStates[0];
    return weatherIcon?.icon;
}

