import AVAILABILITY from "@/constants/AVAILABILITY";
import { Chip } from "@mui/material";

interface ProductAvailabilityProps{
    availability :number;
}


export default function Availability(props:ProductAvailabilityProps){
    const {availability} = props;
    switch(availability){
        case AVAILABILITY.AVAILABLE:
            return <Chip label="Available" color="success"/>
        case AVAILABILITY.UNAVAILABLE:
            return <Chip label="Unavailable" color="error"/>

        default:
            return null;
    }

}
    