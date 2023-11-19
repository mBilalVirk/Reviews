import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";

import Loading from "./Loading";
import Review from './Review';
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)

// Loading
/*
const fetchTours = async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
useEffect(() => {
  fetchTours();
}, []);
*/
// End-of-Loading
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>
              Our Reviews
            </h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App
