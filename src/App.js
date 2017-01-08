import React, { Component } from 'react';
import data from './data.json'
import { map, range } from 'lodash/fp'

class App extends Component {
  render() {
    const page = +window.location.search.substr(1) || 1
    const pageSize = 20
    document.title = page
    return (
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        { map(i => {
          const idx = ((page - 1) * pageSize) + i
          console.log('--------------')
          console.log('page', page)
          console.log('idx', idx)
          const item = data[idx]
          console.log(item)
          return !!item && (
            <div key={idx} style={{ display: 'inline-block', width: '50%', fontSize: 20, height: '10%', bsorder: '1px solid #faf', alignItems: 'center' }}>
              <div style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', }}>
                  <div>
                    <div style={{ fontSize: 30}}>{item.Leilighetsnummer}</div>
                  </div>
                  <div style={{ padding: '0 20px', flexGrow: 6}}>
                    <div>{item.PostkasseNavn1}</div>
                    <div>{item.PostkasseNavn2}</div>
                  </div>
                  <div style={{ fontSize: 10, opacity: .5, textAlign: 'right', paddingRight: 20 }}>
                    <div style={{whiteSpace: 'nowrap'}}>JSV{item.Eiendom.replace(/[a-zA-Z\s]/ig, '') }/{item['H-nummer']}</div>
                    <div style={{whiteSpace: 'nowrap'}}>Seksjon: {item.Seksjon}</div>
                    <div style={{whiteSpace: 'nowrap'}}>{item['Solid-nummer']}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        }, range(0, pageSize)) }
      </div>
    );
  }
}

export default App;
