import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

const HocCounter = () => {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  )
}

export default HocCounter