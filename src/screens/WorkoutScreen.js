import {Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ChevronLeftIcon} from "react-native-heroicons/mini";
import {ClockIcon, HeartIcon} from "react-native-heroicons/solid";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

export default function WorkoutScreen(props){
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite, toggleIsFavourite] = useState(false);

    return(
       <View className="bg-white flex-1">
            <Image source={item.image} style={{width: wp(100), height: hp(75)}} />

           <SafeAreaView className="flex-row justify-between items-center w-full absolute mt-12">
                <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 rounded-full ml-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
                </TouchableOpacity>

               <TouchableOpacity onPress={() => toggleIsFavourite(!isFavourite)} className="p-2 rounded-full mr-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
                   <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite?"red":"white"} />
               </TouchableOpacity>
           </SafeAreaView>

           <View className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-8" style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
                <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                    <View className="flex-row justify-between items-start">
                        <Text style={{fontSize: wp(7)}} className="font-bold flex-1 text-neutral-700">{item?.title}</Text>
                        <Text style={{fontSize: wp(4)}} className="text-blue-600 mt-3 font-semibold">{item?.condition}</Text>
                    </View>

                    <Text style={{fontSize: wp(3.5)}} className="text-neutral-700 mb-2 tracking-wide">{item?.longDescription}</Text>

                    <View className="flex-row mx-2">
                        <ClockIcon size={wp(7)} color="skyblue"/>
                        <Text className="font-bold text-neutral-700 mt-1 ml-3">{item?.set}</Text>
                    </View>
                </ScrollView>

               <TouchableOpacity className="bg-blue-600 mx-auto p-3 mb-4 px-12 rounded-full">
                   <Text className="text-white font-bold" style={{fontSize: wp(4)}}>Let's go!</Text>
               </TouchableOpacity>
           </View>
       </View>
    )
}
