import AnimatedNumber from "./AnimatedNumber";
import { Animated } from "react-native";
import { timerStyle } from "./styles/timerStyle";
import { useData } from "../Context/Context";

type listTimer ={
    dataArray: {
        array: number[];
        animated: {
            scrollY: Animated.Value;
    }},
    heightItems: number,
}

export default function ListTimer({dataArray, heightItems}:listTimer) {

    let data = useData();

    function snapArray(list: number[], elementHeight: number) {
        let array: number[] = [];
        for (let i = 0; i < list.length; i++) {
            array.push(i * elementHeight);
        }
        return array;
    }

    return (
        <Animated.ScrollView
            style={[timerStyle.list]}
            onScroll={Animated.event([{
                nativeEvent:
                {
                    contentOffset:
                        { y: dataArray.animated.scrollY },
                },
            },
            ], { useNativeDriver: false })}
            decelerationRate={"fast"}
            snapToOffsets={snapArray(dataArray.array, heightItems)}
            scrollEventThrottle={0}
            showsVerticalScrollIndicator={false}
        >
            {dataArray.array.map((item, index) => {
            return(
                <AnimatedNumber itemIndex={index} itemNumber={item} scrollY={dataArray.animated.scrollY} heightItem={heightItems} key={index}/>
            )
        })}
        </Animated.ScrollView>
    )
}