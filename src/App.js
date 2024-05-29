import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getWordList} from "./word";
import Setting from "./Setting";
import useCheckbox from "./useCheckbox";

const getRand = function (len){
    const rand = Math.random();
    return Math.floor(rand * len);
}


function App() {
    const [w, setW] = useState([])
    const [index, setIndex] = useState(0)

    const [checkAnswer, setCheckAnswer] = useState(false)


    const shouldShow = function (key){
        if(checkAnswer){
            return true;
        }
        return checkedItems[key]
    }


    const {checkedItems, handleChange} = useCheckbox();

    const getCurrentRand = function (){
        const max = w?.length;
        return getRand(max);
    }

    const setNext = function (){
        setCheckAnswer(false);
        setIndex(getCurrentRand())
    }

    useEffect( ()=>{
        async function get(){
            const words =  await getWordList();
            console.log(words)
            setW(words)
            setIndex(getCurrentRand())
        }
        get()

    },[])
  return (
    <div className="App">
      <header className="App-header">
          <Setting checkedItems={checkedItems} handleChange={handleChange}/>
          {shouldShow('han')&&<div className={'han'}>{w[index]?.[0]}</div>}
          {shouldShow('kana')&&<div className="kana">{w[index]?.[1]}</div>}
          {shouldShow('meaning')&& <div className="meaning">{w[index]?.[2]}</div>}
          {shouldShow('roman')&&<div className="roman">{w[index]?.[3]}</div>}

          <div style={{marginTop:10}}>
              <button onClick={setNext} style={{marginRight:10}}>下一个</button>
              <button onClick={()=>setCheckAnswer(true)} className={'green'}>看答案</button>
          </div>


      </header>
        <div className="bottom">
            目前已收录<span style={{color:"#61dafb"}}>{w?.length}</span>个词语
        </div>
    </div>
  );
}

export default App;
