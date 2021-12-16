import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xa6580381Bf6e20a8343A5C29E2C9523D3d53c2EC&order_direction=asc');
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts();
  }, []);
  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
         <Main {...{selectedPunk, punkListData}}/>
         <PunkList {...{punkListData, setSelectedPunk}} />
        </>
      )}
    </div>
  );
}

export default App;
