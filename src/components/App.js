

import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your budget to check available items:</h1>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>

        <table>
          <tbody>
          <tr>
            <td>Apple</td>
            <td style={{'color': value > 20 ? 'green' : 'red'}}>20</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td style={{'color': value > 10 ? 'green' : 'red'}}>10</td>
          </tr><tr>
            <td>Neutella</td>
            <td style={{'color': value > 30 ? 'green' : 'red'}}>30</td>
          </tr><tr>
            <td>Razor</td>
            <td style={{'color': value > 5 ? 'green' : 'red'}}>5</td>
          </tr><tr>
            <td>CornFlakes</td>
            <td style={{'color': value > 15 ? 'green' : 'red'}}>15</td>
          </tr>
          <tr>
            <td>SoundBar</td>
            <td style={{'color': value > 50 ? 'green' : 'red'}}>50</td>
          </tr><tr>
            <td>Iphone</td>
            <td style={{'color': value > 80 ? 'green' : 'red'}}>80</td>
          </tr>
          </tbody>
        </table>
    </div>
  )
}

export default App
