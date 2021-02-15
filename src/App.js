import React, { useEffect, useState } from 'react';
import Brazil from '@svg-maps/brazil';
import { SVGMap, CheckboxSVGMap, RadioSVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import './style.css';

function App() {

  const [ BrazilPreSet, setBrasil ]= useState({
    ...Brazil,
    label: 'Custom map label'
  });

  useEffect(() => {
    setBrasil({
      ...BrazilPreSet,
      locations: Brazil.locations.map(location => {
      
        setTimeout(() => {
          let newarr = {
            ce: {
              fill: '#1e30ba'
            },
            ro: {
              fill: '#1e30ba'
            },
            rr: {
              fill: '#1e30ba'
            },
            sp: {
              fill: '#1e30ba'
            },
            rs: {
              fill: '#1e30ba'
            }
          };
          for(let k in newarr){
            if(location.id == k){
              document.getElementById(location.id).style.fill = newarr[k].fill;
            }
          }
        }, 100);
  
        return location;
      })
    });
  }, []);

  return (
    <SVGMap className="aps"  map={BrazilPreSet} />
    // onLocationFocus={(e) => {alert(e.nativeEvent.srcElement.ariaLabel)}}
  );
}

export default App;
