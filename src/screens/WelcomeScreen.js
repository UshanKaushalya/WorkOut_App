import {Image, Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";

export default function WelcomeScreen(){

    const navigation = useNavigation();

    return(
        <View className="flex-1 justify-end">
            <Image source={require('../../assets/WelcomeBG.jpg')}
                   className="h-full w-full absolute" />

            <View className="p-5 pb-10 space-y-8">
                <LinearGradient
                    colors={['transparent', 'rgba(3, 105, 161, 0.8)',]}
                    style={{width: wp(100), height: hp(60)}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className="absolute bottom-0"/>

                <View className="space-y-3">
                    <Text className="text-white font-bold text-5xl" style={{fontSize: wp(10)}}>Stronger Every Day!</Text>
                    <Text className="text-neutral-200 font-medium justify-center" style={{fontSize: wp(4)}}>Personalized workouts and progress tracking for achieving fitness goals anytime.</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-blue-600 mx-auto p-3 mb-4 px-12 rounded-full">
                    <Text className="text-white font-bold" style={{fontSize: wp(4)}}>Let's go!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
