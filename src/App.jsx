import React from 'react'
import Card from './Components/Card'
import './Components/Card.css'
import './App.css'

const App = () => {
  const jobs = [
    {
        brandLogo: "/google.png",
        name: "Google",
        post: "Frontend Developer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: '$85/hr'
    },
    {
        brandLogo: "/microsoft.png",
        name: "Microsoft",
        post: "Software Engineer",
        tag1: "Full-time",
        tag2: "Junior Level",
        pay: '$55/hr'
    },
    {
        brandLogo: "/ama.png",
        name: "Amazon",
        post: "UI/UX Designer",
        tag1: "Part-time",
        tag2: "Senior Level",
        pay: '$65/hr'
    },
    {
        brandLogo: "/meta.png",
        name: "Meta",
        post: "React Developer",
        tag1: "Full-time",
        tag2: "Mid Level",
        pay: '$70/hr'
    },
    {
        brandLogo: "/apple.png",
        name: "Apple",
        post: "iOS Developer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: '$90/hr'
    },
    {
        brandLogo: "/netflix.png",
        name: "Netflix",
        post: "Backend Developer",
        tag1: "Full-time",
        tag2: "Mid Level",
        pay: '$80/hr'
    },
    {
        brandLogo: "/nvidia.png",
        name: "NVIDIA",
        post: "AI/ML Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: '$95/hr'
    },
    {
        brandLogo: "/adobe.png",
        name: "Adobe",
        post: "Web Developer",
        tag1: "Part-time",
        tag2: "Junior Level",
        pay: '$45/hr'
    },
    {
        brandLogo: "/uber.png",
        name: "Uber",
        post: "Data Analyst",
        tag1: "Full-time",
        tag2: "Mid Level",
        pay: '$60/hr'
    },
    {
        brandLogo: "/openai.png",
        name: "OpenAI",
        post: "Machine Learning Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: '$100/hr'
    }
];

// export default jobs;
  return (
    <div className='parentt'>
      {/* <Card comLogo='/ama.png' compony='Amazon' profession='Senior UI/UX designer' level1='part-time' level2='Senior Level' pay='120$/hr'/> */}
      {jobs.map(function(ele, idx){
        return <div key = {idx}>
        <Card comLogo={ele.brandLogo} compony={ele.name} profession={ele.post} level1={ele.tag1} level2={ele.tag2} pay={ele.pay}/>
      </div>
      })}
    </div>
  )
}

export default App
