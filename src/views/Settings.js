import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { func } from 'prop-types';

const Topics = [
  "Random",
  "Architecture",
  "Business",
  "Food",
  "Games",
  "Nature",
  "Tech",
  "Travel",
];

const Presets = [
  { id: 0, name: "None", slides: "", timeperslide: "" },
  { id: 1, name: "Pecha Kucha", slides: 20, timeperslide: 20 },
  { id: 2, name: "10 Minutes 20 Slides", slides: 20, timeperslide: 30 },
  { id: 3, name: "5 Minutes 10 Slides", slides: 10, timeperslide: 30 },
]
let presetList = [];
Presets.forEach(preset => {
  presetList.push(<option value={preset.id}>{preset.name}</option>)
})
let topicList = [];
Topics.forEach(topic => {
  let topicKey = topic;
  if (topic === "Random")
    topicKey = "";
  topicList.push(<option value={topicKey}>{topic}</option>)
})




const Settings = () => {

  const [currentSlideTime, setCurrentSlideTime] = useState(1);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  
  //TODO Ver se esta merda é necessária
  const [input, setInput] = useState("")


  //TODO FIX Fields not changing manually :(
  function changeCenas(e) {
    setCurrentSlideTime(Presets[e.target.value].timeperslide);
    setCurrentSlideNumber(Presets[e.target.value].slides);
  }


  return (
    <div>
      <h1>Presentation Karaoke</h1>
      <Form action="/presentation">
        <Form.Row>
          <Col>
            <Form.Label>Settings Template</Form.Label>
            <Form.Control onChange={changeCenas} as="select" name="preset">
              {presetList}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Presentation Topic</Form.Label>
            <Form.Control as="select" name="topic">
              {topicList}
            </Form.Control>
          </Col>
        </Form.Row>
        <br></br>
        <Form.Row>
          <Col>
            <Form.Label>Number of Slides</Form.Label>
            <Form.Control type="number" name="slideNumber" id="slideNumber" min="1" onChange={(e) => setInput(e.target.value)} value={currentSlideNumber}></Form.Control>
          </Col>
          <Col>
            <Form.Label>Time per slide</Form.Label>
            <Form.Control type="number" name="slideTime" id="slideTime" min="1" onChange={(e) => setInput(e.target.value)}value={currentSlideTime}></Form.Control>
          </Col>
        </Form.Row>
        <br></br>
        <Button variant="success" type="submit">Start</Button>
      </Form>
    </div>
  )

}
export default Settings;