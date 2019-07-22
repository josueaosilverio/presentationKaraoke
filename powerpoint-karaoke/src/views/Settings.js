import React, { useState, useEffect } from 'react';

const Topics = [
  "Architecture",
  "Business",
  "Food",
  "Games",
  "Nature",
  "Tech",
  "Travel",
  "Random",
];

const Presets = [
{id:0, name: "Pecha Kucha",slides:20,timeperslide:20},
{id:1, name: "10 Minutes 20 Slides",slides:20,timeperslide:30},
{id:1, name: "5 Minutes 10 Slides",slides:10,timeperslide:30},
]


const Settings = () => {
  // const [background, setBackground] = useState(null)

  // useEffect(() => { fetch() }, []);

  // if (!background) return 'loading...';

  return (
    <div>
Settings
    </div>
  )

}
export default Settings;