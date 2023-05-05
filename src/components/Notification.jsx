
import "../styles/notification.css";
// import { TodoContexetUser } from "../context/TodoContext";

export default function Notification({alert}) {
  // const {alert} = TodoContexetUser();

  return (
    <div className="notification" style={{display: alert.type == null ? "none": "flex"}}>
      <h5 style={{color: alert.type === 'success'? 'green': 'red'}}>{alert.type}</h5>
      <p>{alert.msg}</p>
    </div>
  );
}
