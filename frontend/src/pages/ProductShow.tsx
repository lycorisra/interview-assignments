import React from 'react'
import Carousel from '../components/Carousel'
import { Options } from '../components/Carousel/Options'
import img_iphone from '../assets/iphone.png'
import img_tablet from '../assets/tablet.png'
import img_airpods from '../assets/airpods.png'

const options: Options[] = [
  {
    url: img_iphone,
    title: 'xPhone',
    subTitle: (
      <>
        <p>Lots to love.Less to spend.</p>
        <p>Starting at $339.</p>
      </>
    ),
    color: '#fff'
  },
  {
    url: img_tablet,
    title: 'Tablet',
    subTitle: 'Just the right amount of everything.',
    color: '#000'
  },
  {
    url: img_airpods,
    title: (
      <>
        <p>Buy a Tablet or xPhone for college.</p>
        <p>Get arPods.</p>
      </>
    ),
    color: '#000'
  }
]

function ProductShow(): React.ReactElement {

  return (
    <div className="container">
      <Carousel data={options} />
    </div>
  )
}

export default React.memo(ProductShow)
