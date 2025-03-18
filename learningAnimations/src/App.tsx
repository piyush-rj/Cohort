import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './App.css'

function App() {

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut"
    })

    timeline.to("blue-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut"
    })
  }, [])



  // useGSAP(() => {
  //   gsap.fromTo("#blue-box", {
  //     x: 0,
  //     y: 0,
  //     rotation: 0,
  //     borderRadius: "0%"
  //   },
  //   {
  //     x: 250,
  //     borderRadius: "100%",
  //     y: 10,
  //     repeat: -1,
  //     yoyo: true,
  //     rotation: 360,
  //     duration: 2,
  //     ease: "power1.inOut"
  //   })
  // }, [])

  return (
    <>
      <div className='mt-20'>
        <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'>

        </div>
      </div>
    </>
  )
}

export default App
