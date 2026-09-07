import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          image="https://pub-ad67cc16ec0e4208b8088ba0d85f6b7a.r2.dev/courses/1785900904898-59e49c1c8c42f77b-chatgpt-image-aug-5-2026-09-15-46-am.png" 
          medium="Hybrid | Online | Physical" 
          courseName="SQL & Data Analytics" 
          desc="The once skill every data interview in Nepal Test , Eight Focused Week"
          price="21,999" 
          url="https://sipalaya.com/courses/9"
        />       

        <Card 
          image="https://pub-ad67cc16ec0e4208b8088ba0d85f6b7a.r2.dev/courses/1785900936812-66fde5b620a95f3b-chatgpt-image-aug-5-2026-09-19-35-am.png" 
          medium="Online | Hybrid | Physical" 
          courseName="Generative AI & LLM Application" 
          desc="Built RAG and document automation on your own data"
          price="21,999"
          url="https://sipalaya.com/courses/8" 
        />     

        <Card 
          image="https://pub-ad67cc16ec0e4208b8088ba0d85f6b7a.r2.dev/courses/1785900936812-66fde5b620a95f3b-chatgpt-image-aug-5-2026-09-19-35-am.png" 
          medium="Online | Hybrid | Physical" 
          courseName="Generative AI & LLM Application" 
          desc="Built RAG and document automation on your own data"
          price="21,999" 
          url="https://sipalaya.com/courses/6"
        />     

        <Card 
          image="https://pub-ad67cc16ec0e4208b8088ba0d85f6b7a.r2.dev/courses/1785900936812-66fde5b620a95f3b-chatgpt-image-aug-5-2026-09-19-35-am.png" 
          medium="Online | Hybrid | Physical" 
          courseName="Generative AI & LLM Application" 
          desc="Built RAG and document automation on your own data"
          price="21,999"
          url="https://sipalaya.com/courses/3" 
        />     

        <Card 
          image="https://pub-ad67cc16ec0e4208b8088ba0d85f6b7a.r2.dev/courses/1785900936812-66fde5b620a95f3b-chatgpt-image-aug-5-2026-09-19-35-am.png" 
          medium="Online | Hybrid | Physical" 
          courseName="Generative AI & LLM Application" 
          desc="Built RAG and document automation on your own data"
          price="21,999"
          url="https://sipalaya.com/courses/1" 
        />     
      </div>
    </div>
  )
}

export default App