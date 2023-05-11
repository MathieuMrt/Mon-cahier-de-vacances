
import React,{useState,useEffect} from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Consigne from './Consigne.jsx';
import ReponseCapitale from './ReponseCapitale.jsx';
import ReponseDrapeau from './ReponseDrapeau.jsx';
import End from './End.jsx';
import Jeu from './Jeu.jsx';


const Geographie = () => {

    const [apays,setApays]=useState(undefined)
    const [questionsTab,setQuestionsTab]=useState([])
    const [questionsTabCap,setQuestionsTabCap]=useState([])

    
    useEffect (()=>{
        const fetchData = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all")
       const newData = await response.json()
  
       setApays(newData)
  
        }
        fetchData()
        }
       


    ,[])    
const handleReponses = () =>{
        if (apays) { 
        const filtEu =apays.filter(((e)=>e.continents[0]==='Europe' && e.population>2000000))
      
        setApays(filtEu)
        console.log(filtEu)
        
        const question = []
        const test = []
            while(question.length<5){
                const rand = Math.floor(Math.random() *filtEu.length)
                
                if(test.indexOf(filtEu[rand].flag)===-1){
                    question.push([{bonnereponse : true, drapeau : filtEu[rand].flag, pays : filtEu[rand].translations.fra.common}])}
                
                    test.push(filtEu[rand].flag)
                }
        question.map((e,i)=>{
                const test2 = []
                while (e.length<4){
                    const rand2 =Math.floor(Math.random() *filtEu.length)
                    if(test2.indexOf(filtEu[rand2].flag)===-1){
                        e.push({bonnereponse : false , drapeau : filtEu[rand2].flag, pays : filtEu[rand2].translations.fra.common})
                        test2.push(filtEu[rand2].flag)
                    }

                }
             })
        setQuestionsTab(question)            
        console.log (questionsTab)



        const questionCap = []
        const testCap = []
            while(questionCap.length<5){
                const rand = Math.floor(Math.random() *filtEu.length)
                
                if(test.indexOf(filtEu[rand].flag)===-1){
                    questionCap.push([{bonnereponse : true, drapeau : filtEu[rand].capital[0], pays : filtEu[rand].translations.fra.common}])}
                
                    testCap.push(filtEu[rand].flag)
                }
        questionCap.map((e,i)=>{
                const test2 = []
                while (e.length<4){
                    const rand2 =Math.floor(Math.random() *filtEu.length)
                    if(test2.indexOf(filtEu[rand2].flag)===-1){
                        e.push({bonnereponse : false , drapeau : filtEu[rand2].capital[0], pays : filtEu[rand2].translations.fra.common})
                        test2.push(filtEu[rand2].flag)
                    }

                }
             })
        setQuestionsTabCap(questionCap)            
        console.log (questionsTabCap)
        
        
   
        }
      
        }
    
    
 



    



    return (
        <div className="geographie">
            <Header/>
            <button onClick={handleReponses}>CLIIIIIIIIIICK</button>
            <Footer/>

        </div>
    );
};

export default Geographie;