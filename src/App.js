import React,{useState} from 'react';
import InputNumber from './zz-ui/Input'

function App(){
    const [value,setValue] = useState('aa111a');
    return (
        <div>
            <InputNumber value={value} onChange={e=>{
                console.log(e.target.value)
            }}/>
            <InputNumber defaultValue={value}/>
        </div>
    )
}

export default App;
