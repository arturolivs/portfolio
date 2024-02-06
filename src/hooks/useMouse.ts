import { useState, useEffect } from 'react'

const useMouseRotation = (ref) => {
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)

  useEffect(() => {
    const updateRotation = (event) => {
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = event.clientX - centerX
      const dy = event.clientY - centerY

      const q = 0.15

      setX(dx * q * 1.25)
      setY(-dy * q * 1.25)
    }

    window.addEventListener('mousemove', updateRotation)
    return () => window.removeEventListener('mousemove', updateRotation)
  }, [ref])

  return { X, Y }
}

export default useMouseRotation

// import { useState, useEffect } from 'react'

// const useMouseRotation = (ref) => {
//   const [rotationAngle, setRotationAngle] = useState(0)
//   const [X, setX] = useState(0)
//   const [Y, setY] = useState(0)

//   useEffect(() => {
//     const updateRotation = (event) => {
//       const rect = ref.current.getBoundingClientRect()
//       const centerX = rect.left + rect.width / 2
//       const centerY = rect.top + rect.height / 2

//       const dx = event.clientX - centerX
//       const dy = event.clientY - centerY

//       const q = 0.15

//       setX(dx * q * 1.25)
//       setY(-dy * q * 1.25)
//       // Calculate the angle based on the cursor's position relative to the component's center
//       let angle = Math.atan2(dy, dx) * (180 / Math.PI)

//       // Adjust the angle so that it's always between  0 and  360 degrees
//       if (angle < 0) {
//         angle += 360
//       }

//       setRotationAngle(angle)
//     }

//     window.addEventListener('mousemove', updateRotation)
//     return () => window.removeEventListener('mousemove', updateRotation)
//   }, [ref])

//   return { rotationAngle, X, Y }
// }

// export default useMouseRotation

// import { useState, useEffect } from 'react'

// const useMouseRotation = (ref) => {
//   const [rotationVector, setRotationVector] = useState([0, 0, 0])

//   useEffect(() => {
//     const updateRotation = (event) => {
//       const rect = ref.current.getBoundingClientRect()
//       const centerX = rect.left + rect.width / 2
//       const centerY = rect.top + rect.height / 2
//       const dx = event.clientX - centerX
//       const dy = event.clientY - centerY
//       const dz = Math.sqrt(dx * dx + dy * dy)
//       // const angle = Math.atan2(dy, dx)
//       setRotationVector([dx, dy, dz])
//     }

//     window.addEventListener('mousemove', updateRotation)
//     return () => window.removeEventListener('mousemove', updateRotation)
//   }, [ref])

//   return [rotationVector]
// }

// export default useMouseRotation
