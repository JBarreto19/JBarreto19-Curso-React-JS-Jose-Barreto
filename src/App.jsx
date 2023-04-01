import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'


export const App =() => {
  return (
    <div>
    <Navbar/>
     <ItemListContainer greeting={" --Print the posters of your greatest memories --"}/>
    </div>
  );
}


