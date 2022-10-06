import './App.css';
import { Route, Routes } from "react-router-dom";
import GroceryStore from './pages/GroceryStore';
import Checkout from './pages/Checkout';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <Routes>

      <Route path='/' element={
        <PageLayout>
          <GroceryStore />
        </PageLayout>}
      />

      <Route path='/checkout' element={
        <PageLayout>
          <Checkout />
        </PageLayout>}
      />

    </Routes >


  );
}

export default App;
