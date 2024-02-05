import React, { useState, useEffect } from 'react'

import * as S from './homoBackgroundDetails.styles'

import ApiInterfaceIcon from '../../assets/svg/api-interface.svg'
import AvailabilityServicesIcon from '../../assets/svg/availability-services.svg'
import SystemSettingsIcon from '../../assets/svg/system-settings.svg'
import { useTheme } from 'styled-components'
import { opacify } from '../../theme/utils'
import useBreakpoint from '../../hooks/useBreakpoint'

const DEGREE_ROTATION_LIMIT = 10

const HomeBackgroundDetails = () => {
  const theme = useTheme()
  const { minSM, minMD, minLG, minXL } = useBreakpoint()

  const iconsSize = minSM ? 4 : minMD ? 5 : minLG ? 5 : minXL ? 6 : 3

  const [_, setClientX] = useState(0) //eslint-disable-line

  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const handleMouseMove = ({ clientX }: MouseEvent) => {
      setClientX((clientXPrev) => {
        if (clientX < 1) return 0

        const leftDirection = clientXPrev > clientX

        if (leftDirection) {
          setDeg((prevDeg) =>
            prevDeg > DEGREE_ROTATION_LIMIT ? DEGREE_ROTATION_LIMIT : ++prevDeg,
          )
        } else {
          setDeg((prevDeg) =>
            prevDeg < -DEGREE_ROTATION_LIMIT
              ? -DEGREE_ROTATION_LIMIT
              : --prevDeg,
          )
        }

        return clientX
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const handleTouchMove = ({ touches }: TouchEvent) => {
      const clientX = touches[0].clientX

      setClientX((clientXPrev) => {
        if (clientX < 1) return 0

        const leftDirection = clientXPrev > clientX

        if (leftDirection) {
          setDeg((prevDeg) =>
            prevDeg > DEGREE_ROTATION_LIMIT ? DEGREE_ROTATION_LIMIT : ++prevDeg,
          )
        } else {
          setDeg((prevDeg) =>
            prevDeg < -DEGREE_ROTATION_LIMIT
              ? -DEGREE_ROTATION_LIMIT
              : --prevDeg,
          )
        }

        return clientX
      })
    }

    window.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <S.HomeBackgroundDetails>
      <S.HelloWord rotate={deg}>
        console.log(&apos;Olá mundo!!&apos;)
      </S.HelloWord>

      <S.HelloWord rotate={deg}>print(&apos;Olá mundo!!&apos;)</S.HelloWord>

      <S.HelloWord rotate={deg}>
        System.out.println(&apos;Olá mundo!!&apos;)
      </S.HelloWord>

      <S.HelloWord rotate={deg}>alert(&apos;Olá mundo!!&apos;)</S.HelloWord>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={2}
        row={10}
        rotate={deg}
      >
        <ApiInterfaceIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={opacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={10}
        row={8}
        rotate={deg}
      >
        <AvailabilityServicesIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={opacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>

      <S.GeometricShapes
        width={`${iconsSize}rem`}
        height={`${iconsSize}rem`}
        column={3}
        row={4}
        rotate={deg}
      >
        <SystemSettingsIcon
          width={`${iconsSize}rem`}
          height={`${iconsSize}rem`}
          color={opacify(theme.colors.neutral_white, 0.1)}
        />
      </S.GeometricShapes>
    </S.HomeBackgroundDetails>
  )
}

export default HomeBackgroundDetails
