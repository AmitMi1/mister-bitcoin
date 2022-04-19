import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'


export function Lottie({ animate }) {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animate
        })
    })

    return (
        <div className="container" ref={container} />
    )
}
