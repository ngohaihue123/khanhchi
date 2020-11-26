import './App.css';
import { Image } from 'antd';
import AVARTA from './assets/images/khanhchi.jpg';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ top: '50%', left: '50%', position: 'absolute' }}>
        <Image src={AVARTA} width={60} height={60}></Image>
        <h4> Hi! I'm Khanh Chi</h4>
      </div>
    </div>
  );
}

export default App;
