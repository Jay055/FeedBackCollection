// Make an AJAX request 

function fetchAlbums() { 
  fetch('http')
  .then(res => res.json())
  .then(json => console.log(json));
}




async function fetchAlbums() {
  const res = awiat fetch('http')
  const json = await readSync.json
}


const fetchAlbums () = async => {
  const res = awiat fetch('http')
  const json = await readSync.json
}




//<----------  CLASS BASED TO FUNCTIONAL BASED -----> 
// const App = () => {
class App extends Component {
  render() {
  return (
    <div></div>

  );
};
}

// converting from app to class based 

const App = () => { 
  return (
    <div></div>
  )
}



//<--------- REFACTOR ASYNC AWAIT ------------------>

export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};




export const fetchUser = () => async dispatch => { 
      const res = await axios.get('/api/current_user')
           dispatch({ type: FETCH_USER, payload: res})}



// CHECK for Authentication 
app.post('/api/stripe', async (req, res) => {
      
            if(!req.user) {
              return res.status(401).send({error: 'You must log in'})
            }
        



const survey = {title: 'my title', subject: 'my subject', recipients: 'myportfolio2022@gmail.com', body: 'theres the body'}






 // return (
      // <div>
        

        {/* <Field type="text" name="title" label="Survey Title" component={SurveyField} /> 
        <Field type="text" name="Subject" label="Subject Line" component={SurveyField} /> 
        <Field type="text" name="Email" label="Email Body" component={SurveyField} /> 
        <Field type="text" name="Recipient" label="Recipient List" component={SurveyField} />  */}
      // </div>
    // )
  // }


  const {map, filter, uniqWith, compose} = require('lodash/fp');
 
router.post('/api/surveys/webhooks', (req, res) => {
 const extract = ({email, url}) => {
    const match = new Path('/api/surveys/:surveyId/:choice').test(new URL(url).pathname);
    return match ? {email, surveyId: match.surveyId, choice: match.choice} : null;
 };
  
 const events = compose(
    uniqWith((i, j) => (i.email === j.email) && (i.surveyId === j.surveyId)),
    filter(val => val),
    map(extract)
 )(req.body || []);
  
 console.log(events);
 res.send({});
});



const arr =[1,2,3]
arr.map(a=>a*2).map(b=>b*3).reverse()
_.chain(arr).map(c=>c*6).reverse()