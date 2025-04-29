import { useState } from "react";

export default function interactivecounter({ start=0 }){
  const [count,setcount] = useState(start);

return (
    <div style={{ border: '1px solid blue', padding: '1em',}}>
      <h4>react counter island</h4>
      <p> current count:{count}</p>
      <button onClick={()=> setcount( count +1 )}>increment</button>
      <p><small>this component only becomes interactive on the client.</small></p>
    </div>
    );
}