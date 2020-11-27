import './App.css';
import { Image } from 'antd';
import AVARTA from './assets/images/khanhchi.jpg';
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined
} from '@ant-design/icons';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div className='boudary'>
        <div className='border-avartar'>
          <Image
            src={AVARTA}
            width={200}
            height={200}
            style={{
              margin: 18,
              border: '1px solid rgb(237, 237, 237)',
              borderRadius: '50%'
            }}
          ></Image>
        </div>
        <h1 className='greeting'>
          Hi! I'm <b style={{ color: 'black' }}> Chi </b>
        </h1>
        <p>
          Breakfast procuring no end happiness allowance assurance frank. Met
          simplicity nor difficulty unreserved who. Entreaties mr conviction
          dissimilar me astonished estimating cultivated
        </p>
        <div className='social-icons'>
          <a
            href='https://www.facebook.com/khanhchi1005'
            style={{ color: 'black' }}
          >
            <FacebookOutlined style={{ fontSize: '25px' }} />
          </a>
          <a
            href='https://www.instagram.com/chii1005/'
            style={{ color: 'black' }}
          >
            <InstagramOutlined style={{ fontSize: '25px' }} />
          </a>

          <TwitterOutlined style={{ fontSize: '25px' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
