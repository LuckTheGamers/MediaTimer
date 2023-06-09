import { Animated } from "react-native";
import { timerStyle } from "./styles/timerStyle";
import { totalTimeOpacity } from "./TimerAnimations/TimerSequence";
import { RootState } from "../Utils/Redux/store";

interface dataType {
    dataInfo: RootState
}

export default  function TotalTimeText({dataInfo}: dataType){

    const hours = Math.floor(dataInfo.timerValues.totalValue / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((dataInfo.timerValues.totalValue % 3600) / 60).toString().padStart(2, "0");
    const seconds = Math.floor((dataInfo.timerValues.totalValue % 3600) % 60).toString().padStart(2, "0");

    return(
        <Animated.Text style={[timerStyle.totalTimeText, {opacity: totalTimeOpacity}]} allowFontScaling={false}>Total {hours}:{minutes}:{seconds} </Animated.Text>
    )
}