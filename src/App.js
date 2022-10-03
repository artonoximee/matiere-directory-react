import React from 'react';
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('app71fe0Ff06gsUXD');
  const [data, setData] = React.useState([])

  // React.useEffect(() => {
  //   base('test').select({
  //       maxRecords: 1000,
  //       view: "Grid view"
  //   }).eachPage(function page(records, fetchNextPage) {
  //       records.forEach(function(record) {
  //           setData(prev => [...prev, record.get('name')]);
  //       });
  //       fetchNextPage();

  //   }, function done(err) {
  //       if (err) { console.error(err); return; }
  //   });
  // }, []) 
  
  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
