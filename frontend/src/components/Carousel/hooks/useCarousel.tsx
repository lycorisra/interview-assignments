import React, { useCallback, useState, useEffect, useRef } from 'react'
import { Options, CarouselProps } from '../Options'

function useCarousel(props: CarouselProps): {
  index: number,
  total: number,
  data: Array<Options>,
  duration: number,
  refWrap: React.RefObject<HTMLDivElement>,
  onTransitionEnd: React.TransitionEventHandler<HTMLDivElement>
} {
  const { data, duration = 9 } = props
  const total = data.length  // 轮播图总数

  // 记录当前轮播图的索引，后面根据这个值来计算panel-wrap元素偏移量（使用百分比）
  const [index, setIndex] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  // 使用onTransitionEnd，在Slider过渡动画结束后开始切换轮播图
  const onTransitionEnd = useCallback(() => {
    if (!ref.current) {
      return
    }
    // 根据当前索引设置下一个轮播图的偏移量
    const offsetX = index === total ? '0%' : `${(- index) * 100 / total}%`
    ref.current.style.transform = `translateX(${offsetX})`
    // 计算下一个active的指示器下标
    const curIndex = (index) % total + 1
    // 由于轮播duration时长设置为0.5s，所以为了保持整体动作一致，500ms后开始新的轮播过程
    setTimeout(() => {
      setIndex(curIndex)
    }, 500)

  }, [index, total])

  // 页面初始化，开始执行轮播
  useEffect(() => {
    if (!ref.current || total <= 1) {
      return
    }
    // 设置容器宽度，容器的宽度 = 帧宽 * 帧数，使用百分比计算
    ref.current.style.width = `${total * 100}%`
    setIndex(1)
  }, [total])

  return {
    index,
    total,
    data,
    duration,
    refWrap: ref,
    onTransitionEnd
  }
}

export default useCarousel
