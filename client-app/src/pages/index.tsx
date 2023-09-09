import axios from "axios";
import { useEffect, useState } from "react"
import 'semantic-ui-css/semantic.min.css'
import { Header, List } from "semantic-ui-react";

export default function Home() {
  const [ activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [activities])
  return (
    <>
    <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </>
  )
}

