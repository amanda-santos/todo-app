import { ReactElement } from "react"
import { Image, View } from "react-native"

import logoImg from '../../assets/logo.png'

export const Header = (): ReactElement => {
  return (
    <View>
      <Image source={logoImg} />
    </View>
  )
}