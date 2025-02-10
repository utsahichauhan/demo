import { createRoot } from 'react-dom/client'
// import Mycomponent from './comp1'
// import StateExample from './state1'
// import StateMerge from './state2'
// import Propsexample from './lec2712/exa1'
// import StateExample from './lec0201/stateexa1'
// import TextToggle from './excercise1/btn'
// import ApiTesting from './lec1601/useeffect'
import InterestCalculator from './excercise1/interest'


createRoot(document.getElementById('root')).render(
  
  <div>
    {/* <Mycomponent/> */}
    {/* <ReqCancel/> */}
    <InterestCalculator/>
    </div>
)
