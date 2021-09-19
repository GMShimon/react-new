import logo from './logo.svg';
import './App.css';

//object
const info = {
  name: 'GM Shimon',
  age: 20,
  profession: 'student',
};
const style = {
  fontSize: '20px',
  color: 'black',

};

function App() {

  const friendNames = ['GM Shimon', 'CB AimN', 'GM Shawon', 'GM Muaz'];
  const cinemas = [
    {nayok: 'koober', nayika: 'kopila'},
    {nayok: 'Rubel', nayika: 'Moushumi'},
    {nayok: 'Razzak', nayika: 'Shabana'},
  ]
  return (
    <div className="App">
      {/* dynamically showing the name in an ul */}
      <ul>
        {
          friendNames.map(name => <li>{name}</li>)
        }
      </ul>

      {/* dynamically sending and showing data in a content */}
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}
function Personal() {
  const style = {
    backgroundColor: 'lightgrey',
    margin: '20px',
    padding: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={style}>
      <h1>Name: GM Shimon</h1>
      <h3>profession: Student</h3>
      <h5>age:19</h5>
    </div>
  );
}

function Friend(props) {
  console.log(props)
  return (
    <div className="friend">
      <h1>{props.name}</h1>
      <h3>address:{props.address} </h3>
    </div>
  )
};
function Cinema(props) {
  return (
    <div className="friend">
      <h2>Nayok:{props.nayok}</h2>
      <h2>Nayika:{props.nayika}</h2>
    </div>
  )
}

export default App;


/*
  similar in look but different in data:
  <Friend name="GM Shimon" address="Mia para nutun rasta"></Friend>
      <Friend name="CB AimN" address="Mia para nutun rasta"></Friend>
  <Friend name="Muaz" address="Gopalgonj"></Friend>
*/