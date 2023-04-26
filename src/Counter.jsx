import React from 'react'
import counter from './store/counter'
import {observer} from 'mobx-react-lite'

const Counter = observer(() => {
  return (
    <div>
      <div className='counter'>
        {counter.total}
        <div className='btns'>
            <button className='bnt' onClick={() => counter.increment()}>+</button>
            <button className='bnt' onClick={() => counter.decrement()}>-</button>
        </div>
      </div>
    </div>
  )
})

export default Counter
