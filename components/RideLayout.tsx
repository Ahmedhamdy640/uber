import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { router } from "expo-router";
import { icons } from "@/constants";
import Map from "./Map";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const RideLayout = ({
  title,
  children,
  snapPoints,
  book = false,
}: {
  title: string;
  children: React.ReactNode;
  snapPoints?: string[];
  book?: boolean;
}) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="w-10 h-10 bg-white rounded-full items-center justify-center">
                <Image
                  source={icons.backArrow}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaBold ml-5">
              {title || "Go Back"}
            </Text>
          </View>
          <Map />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints || ["55%", "85%"]}
          index={0}
        >
          {book ? (
            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1, padding: 20 }}
            >
              {children}
            </BottomSheetScrollView>
          ) : (
            <BottomSheetView style={{ flex: 1, padding: 20 }}>
              {children}
            </BottomSheetView>
          )}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
