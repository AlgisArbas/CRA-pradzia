import './App.css';
import MyButton from "./Components/MyButton";
import BottomCardContainer from "../src/Components/ButtonCardContainer";
import BottomSectionHeader from "../src/Components/BottomSectionHeader";
import Tags from "./Components/Tags";


const topSectionData = {
    title: 'The band!',
    subTitle: 'We love music',
    para: 'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    cardName: 'Shop',
    cardImage: 'cart.jpg',
};




function App() {
  return (
    <div className="App">
     <h1>Cia yra CRA</h1>
        <section className='top container'>
            <h1 className='title title--main'>{topSectionData.title}</h1>
            <MyButton text='I am button' color='green' />
            <MyButton text='I am button' />
            <MyButton />
            <h6 className='title title--sub'>{topSectionData.subTitle}</h6>
            <p className='text--main'>{topSectionData.para}</p>
            <div className='people-container d-flex justify-around'>
                <article className='people-card'>
                    <p>{topSectionData.cardName}</p>
                    <img src={`img/${topSectionData.cardImage}`} alt='cart' />
                </article>
                <article className='people-card'>
                    <p>{topSectionData.cardName}</p>
                    <img src={`img/${topSectionData.cardImage}`} alt='cart' />
                </article>
                <article className='people-card'>
                    <p>{topSectionData.cardName}</p>
                    <img src={`img/${topSectionData.cardImage}`} alt='cart' />
                </article>
            </div>
        </section>
        <section className='black'>
            <div className='container'>
                <BottomSectionHeader title='Pirk drambli' subTitle='Begam pirkti visus'/>
                <BottomCardContainer />
            </div>
        </section>
        <section className='extra container'>
            <Tags />
        </section>
    </div>
  );
}

export default App;
