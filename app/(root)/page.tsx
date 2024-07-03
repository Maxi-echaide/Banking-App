import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Max", lastName: "echa", email:"maxi.echaide@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type='greeting' title='Welcome' user={loggedIn?.firstName || "Guest"} subtext="Acces and manage your account and transactions efficiently"/>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        </header>

        RECENT TRABSACUTUIB
      </div>

      <RightSideBar user={loggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  );
}

export default Home