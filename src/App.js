import React from 'react';
import './App.css';

function App() {
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyEgsODRGeMoFEqh'}).base('appINu5zQbTPii8YK');
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    base('test').select({
        maxRecords: 1000,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            setData(prev => [...prev, record.get('name')]);
            console.log(data);
        });
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });
  }, []) 
  
  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
