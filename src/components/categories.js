import {View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {categoryData} from "../constants";

export default function Categories(){
    return(
        <View className="space-y-5">
            <View className="mx-5 flex-row justify-between items-center">
                <Text style={{fontSize: wp(4)}} className="font-semibold text-neutral-700">Category</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: wp(4), color: 'blue'}}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} className="space-x-4" showsHorizontalScrollIndicator={false}>
                {
                    categoryData.map((cat, index) => {
                        return(
                            <TouchableOpacity key={index} className="flex items-center space-y-2">
                                <Image source={cat.image} className="rounded-3xl" style={{width: wp(25), height: wp(24)}} />
                                <Text style={{fontSize: wp(4)}} className="text-neutral-700 font-medium">{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }


            </ScrollView>
        </View>
    )
}
