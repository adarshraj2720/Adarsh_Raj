import React from 'react';
import '../stylesheet/style.css';

function App() {
  return (
    <>
      <main className="container">
        <header className="flex">
          <div className="flex-50">
            <h2>
              <i class="fas-solid fas-m">M</i>
            </h2>
          </div>
          <div className="flex-50 flex1">

            <i class="fas fa-calendar-week"></i>
            <div>
              <h2>Day 1</h2>
              <h2 className='five'>of 5</h2>
            </div>

          </div>
        </header>

        <section className="main-card">
          <div>
            <h2>Unlock to</h2>
            <h3>Power your Dreams!</h3>
            <div>
              <h4>Stand a chance to win</h4>
              <h4>
                <span>N3,000,000</span> everday for the next days
              </h4>
            </div>
            <div className="small-card">
              <h2>🚀 How To Play </h2>
              <div>
                <h4>1. guess the right combination of number</h4>
                <h4>2. Win N3,000,000 instantly</h4>
                <h4>Sounds unbeilevable? Well, guess right and see yourself</h4>
                <p>
                  💡 Think well before you guess you have only 2 attempts per
                  day and even after you wi, you can come back next day to try
                  for another jackport.
                </p>
              </div>
            </div>
            <button className="button">Play The Game ≫ </button>
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
