import React, { useReducer } from 'react';
import './App.css';
import Hookcounter from './Component/Hookcounter';
import HookCounterTwo from './Component/HookCounterTwo';
import HookCountThree from './Component/HookCountThree';
import HookCounterFour from './Component/HookCounterFour';
import Hook_useeffect_one from './Component/Hook_useeffect_one';
import IntervalHokkcounter from './Component/IntervalHokkcounter';
import DatFetchinh from './DatFetchinh';
import DatFetching_byid from './DatFetching_byid';
import Reducer_counterone from './Component/Reducer_counterone';
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import ComponentC from './Component/ComponentC'
import DataFetchingOne from './Component/DataFetchingOne';
import DataFetchingTwo from './Component/DataFetchingTwo';
import ExampleUsememo from './Component/ExampleUsememo';
import Focusinput from './Component/Focusinput';
import HookTimer from './Component/HookTimer';
import DocTitleOne from './Component/DocTitleOne';
import DocTitleTwo from './Component/DocTitleTwo';
import UserForm from './Component/UserForm';

export const UserContext= React.createContext()
export const ChannelContext=React.createContext()


const initialState=0
const reducer=(state, action)=>{
switch(action)
{
  case 'increment':
  return state + 1
  case 'decrement':
  return state - 1
  case 'reset':
  return initialState
  default:
   return state
}

}

function App() {
const[count, dispacth]=useReducer(reducer,initialState)

  return (
   
//      {/* <Hookcounter />
//      {<HookCounterTwo /> */}
//      {/* <HookCountThree /> */}
//      {/* <HookCounterFour /> */}
//     {/* <Hook_useeffect_one /> */}
//     {/* <IntervalHokkcounter /> */}
//     {/* <DatFetchinh /> */}
//     {/* <DatFetching_byid /> */}
// {/* <UserContext.Provider value={'Ted'}>
// <ChannelContext.Provider value={'AAA'}>
//   <ComponentC />
// </ChannelContext.Provider>

// </UserContext.Provider> */}
// {/* <Reducer_counterone /> */}

//<UserContext.Provider
//value={{countstate: count, countdispatch: dispacth}}
//>
/*{/* <div className="App">
Count : {count}
<ComponentA />
<ComponentB />
<ComponentC />
<DataFetchingOne />
<DataFetchingTwo />
<counterUseMemo />
    </div> }*/

    
   // <counterUseMemo />
   <div className="App">
     <Hookcounter />
     <ExampleUsememo />
     <Focusinput />
     <HookTimer />
     <DocTitleOne />
     <DocTitleTwo />
     <UserForm />
     {/* <expen */}
     
        </div>
   // </UserContext.Provider>
   

  )
}

export default App;
