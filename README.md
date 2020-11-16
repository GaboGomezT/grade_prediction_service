# grade_prediction_service
Full stack service that takes in 10 questions and gives you your predicted final score.

I chose RandomForestRegressor for fitting my data and I took the easy route of dropping all catergorial columns and training on only numerical features.

* The notebook can be found [here](https://www.kaggle.com/gabogabe/student-grade-prediction)

* For the backend I used [FastAPI](https://fastapi.tiangolo.com/)

* For frontend I used [ReactJS](https://reactjs.org/)

* I used [Deta](https://deta.sh/) to host my API, it was pretty easy to use and they have a supportive Slack channel

* To host my static website I just used [Firebase](https://firebase.google.com/)
