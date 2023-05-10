import { TouchableOpacity } from "react-native/";
import PlaySvg from "../../assets/images/play.svg";
import { buttonsStyle } from "./styles/buttonsStyle";
import { useData } from "../Context/Context";
import { heightItems } from "../Timer/Timer";

export default function PlayButton() {

    let data = useData();

    function timerStart() {
        if (data.dataItem.scrollOne != 0 || data.dataItem.scrollTwo != 0 || data.dataItem.scrollThree != 0) {
            data.stateTimer.changeState({isPlay: true, isPaused: false})
            const numberHours = (data.dataItem.scrollOne / heightItems) * 3600;
            const numberMinutes = (data.dataItem.scrollTwo / heightItems) * 60;
            const numberSeconds = (data.dataItem.scrollThree / heightItems);

            let timeStampValue = (numberHours + numberMinutes + numberSeconds);
            data.timeStamp.changeState(timeStampValue);

            setTimeout(() => {
                setInterval(() =>{
                    data.timeStamp.changeState((state) => state -= 1);
                }, 1000)
            }, 800);
            
            
        }
    }

    return (
        <TouchableOpacity style={[buttonsStyle.buttons, buttonsStyle.principalButton]} onPress={() => timerStart()}>
            <PlaySvg width={26} height={32} />
        </TouchableOpacity>
    )
}