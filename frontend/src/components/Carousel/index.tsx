import React from 'react'
import Panel from './components/Panel'
import Slider from './components/Slider'
import { CarouselProps } from './Options'
import useCarousel from './hooks/useCarousel'
import './index.css'

function Carousel(props: CarouselProps): React.ReactElement {
  const {
    index,
    total,
    data,
    duration,
    onTransitionEnd
  } = useCarousel(props)

  // 设置下一个轮播图的偏移量，index取值范围：[1, total]，offsetY取值范围：[0,-(total-1)%]
  const offsetX = index === 0 ? 0 : `${(1 - index) * 100}%` // 初始化时index=0，所以需要特殊处理

  return (
    <div className="carousel">
      <div className="panel-wrap" style={{ transform: `translate(${offsetX}` }}>
        {
          data.map((item, index) => {
            return <Panel key={index} data={item} />
          })
        }
      </div>
      <Slider count={total} current={index} duration={duration} onTransitionEnd={onTransitionEnd} />
    </div>
  )
}

export default React.memo(Carousel)
