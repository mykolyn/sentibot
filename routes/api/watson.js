const router = require('express').Router();
const Chat = require('../../models/chat');
require("dotenv").config();

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-07-12',
  authenticator: new IamAuthenticator({
    apikey: process.env.REACT_APP_watsonKey,
  }),
  url: process.env.REACT_APP_watsonURL,
});

router.post('/analyzer', (req,res) => {
  const analyzeParams = {
    'text': req.body.text,
    'features': {
      "keywords": {
        "sentiment": true},
      'sentiment': {},
      'emotion': {}
    }
  };

  naturalLanguageUnderstanding.analyze(analyzeParams).then(analysisResults => {
    let sentiment = analysisResults.result.sentiment.document.label;
    let sentimentValue = Math.abs(analysisResults.result.sentiment.document.score) * 100;
    let value = sentimentValue.toFixed(2)
    // emotion calculated are sadness, joy, fear, disgust, and anger
    const emotions = analysisResults.result.emotion.document.emotion;
    let emotionVals = [];

    for (let emotion in emotions) {
      emotionVals.push({ emotion: emotion, value: emotions[emotion] })
    }
    emotionVals.sort(function(a, b) {return b.value - a.value} );

    const messages = {
      message1: `Based on what you said, I calculated that you are ${value}% ${sentiment}.`,
      message2: `It sounds like your feeling more ${emotionVals[0].emotion } than the other emotions in my database.`
    };

    res.send(messages);
  });
})

router.post('/chat', (req,res) => {
  Chat.create({
    userMsg: req.body.userMsg,
    botMsg: req.body.botMsg
  });

  res.status(200).end();
})

module.exports = router;