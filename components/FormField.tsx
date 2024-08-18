import { icons, images } from '@/constants'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

interface FormFieldProps {
  title: string
  value: string
  handleChangeText: (e: any) => void
  placeholder?: string
  otherStyles?: string
  keyboardType?: string
}
const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  keyboardType,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-14 px-4 bg-black-100 rounded-2xl transition-all duration-500 ease-in-out focus:border-secondary items-center flex-row'>
        <TextInput
          className='w-full flex-1 text-slate-200 font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          selectionColor='#7b7b8b'
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
