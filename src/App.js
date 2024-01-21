import './App.css';
import Portfolio from "./portfolio";
import "slick-carousel/slick/slick.css";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  showSystemCursor={true}
  innerStyle={{
    backgroundColor: '#EA4343'
  }}
  outerStyle={{
    border: '3px solid #EA4343'
  }}
/>
      <Portfolio/>
    </div>
  );
}

export default App;
