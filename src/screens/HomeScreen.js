import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from "../components/categories";
import SortCategories from "../components/SortCategories";
import Workouts from "../components/Workouts";

export default function HomeScreen(){
    return(
        <SafeAreaView className="flex-1 bg-white">
           <ScrollView showsHorizontalScrollIndicator={false} className="space-y-6 mt-16">
                <View className="mx-5 flex-row justify-between items-center mb-10">
                    <Text className="font-bold text-neutral-700" style={{fontSize: wp(7)}}>Let's Discover</Text>

                    <TouchableOpacity>
                        <Image source={require('../../assets/Avatar.png')} style={{height: wp(10), width: wp(10)}} className="mt-2"/>
                    </TouchableOpacity>
                </View>

               <View className="mx-5 mb-4">
                   <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray"/>
                       <TextInput placeholder="Search Workouts" placeholderTextColor={"gray"} classname="flex-1 text-base mb-1 pl-4 tracking-wider" />
                   </View>
               </View>

               <View className="mb-4">
                    <Categories />
               </View>

               <View className="mb-4">
                   <SortCategories />
               </View>

               <View>
                    <Workouts />
               </View>
           </ScrollView>
        </SafeAreaView>
    )
}
