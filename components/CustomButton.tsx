import { useRef } from 'react'
import { Animated, Text, TouchableOpacity } from 'react-native'

interface CustomButtonProps {
  title: string
  handlePress: () => void
  containerStyles: string
  textStyles?: string
  isLoading?: boolean
}
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start()
    handlePress()
  }

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl px-4 w-ful min-h-[50px] justify-center items-center ${containerStyles} ${
          isLoading ? 'opacity-50' : ''
        }`}
        disabled={isLoading}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default CustomButton
