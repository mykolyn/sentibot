const router = require('express').Router();
require("dotenv").config();
console.log('test');

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
      'sentiment': {},
      'emotion': {}
    }
  };

  naturalLanguageUnderstanding.analyze(analyzeParams).then(analysisResults => res.send(analysisResults));
})

module.exports = router;