import React from 'react'

import * as S from './homeBackgroundDetails.styles'

import ApiInterfaceIcon from '../../assets/svg/api-interface.svg'
import AvailabilityServicesIcon from '../../assets/svg/availability-services.svg'
import SystemSettingsIcon from '../../assets/svg/system-settings.svg'
import { useTheme } from 'styled-components'
import { colorOpacify } from '../../theme/utils'
import useBreakpoint from '../../hooks/useBreakpoint'

const HomeBackgroundDetails = () => {
  const theme = useTheme()
  const { minSM, minMD, minXL } = useBreakpoint()

  const iconsSize = minXL ? 6 : minMD ? 5 : minSM ? 4 : 3

  return (
    <S.HomeBackgroundDetails>
      <S.HelloWord>console.log(&apos;Olá mundo!!&apos;)</S.HelloWord>
      <S.HelloWord>print(&apos;Olá mundo!!&apos;)</S.HelloWord>
      <S.HelloWord>System.out.println(&apos;Olá mundo!!&apos;)</S.HelloWord>
      <S.HelloWord>alert(&apos;Olá mundo!!&apos;)</S.HelloWord>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={2}
        row={10}
      >
        <ApiInterfaceIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={colorOpacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={10}
        row={8}
      >
        <AvailabilityServicesIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={colorOpacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={3}
        row={4}
      >
        <SystemSettingsIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={colorOpacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>
    </S.HomeBackgroundDetails>
  )
}

export default HomeBackgroundDetails
