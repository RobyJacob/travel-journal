import Card from "./components/Card";
import Header from "./components/Header";
import data from './data'
import './styles.css'

export default function App() {
  const travelCards = data.map(travelData => {
    return (
      <Card 
        key={travelData.id}
        {...travelData}
      />
    )
  })

  return (
    <div className='main'>
      <Header />
      <section className='card-list'>
        {travelCards}
      </section>
    </div>    
  )
}
