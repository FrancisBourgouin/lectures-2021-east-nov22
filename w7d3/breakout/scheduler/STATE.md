# Scheduler project breakdown

API responses from the database, reflects the state that we have in our app. (Content taken from the readme of the API)

## Days

```jsx
const days = [
    {
      "id": 1,
      "name": "Monday",
      "appointments": [1, 2],
      "interviewers": [1, 2],
      "spots": 0
    }
  ]
```

## Appointments

```jsx
const appointments = {
    "1": {
      "id": 1,
      "time": "12pm",
      "interview": {
        "student": "Lydia Miller-Jones",
        "interviewer": 1
      }
    },
    "2": {
      "id": 2,
      "time": "1pm",
      "interview": {
        "student": "Archie Cohen",
        "interviewer": 2
      }
    }
  }
```
## Interviewers

```jsx
const interviewers = {
    "1": {
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      "id": 2,
      "name": "Tori Malcolm",
      "avatar": "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
```