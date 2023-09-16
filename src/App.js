import './App.css';
import { useState } from 'react';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && todo.length > 0) {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo('')
    }
  }

  return (
    <div>

      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List🚀</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2 className='animate-character'>Whoop, it's {dayName}</h2>
        </div>
        <div className="input">
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="📝 Add item..." onKeyDown={handleEnterKeyPress} />
          {/* /////////////////////////////////////////////////// */}
          {/* add list */}

          {
            todo ? (<i className="fas fa-plus"
              onClick={() => { setTodos([...todos, { id: Date.now(), text: todo, status: false }]); setTodo('') }}>
            </i>) : ('')

          }

        </div>

        <div className="todos">
          {todos.length < 1 ? (<h3 style={{ marginTop: 20,letterSpacing:6 }}>ZERO LIST</h3>) : (null)}

          {todos.map((obj) => {

            return (

              <div key={obj.id} className="todo">
                <div className="left">
                  {/* /////////////////////////////////////////////////// */}
                  {/* checkBoc */}
                  <div className="checkbox-wrapper-31">
                    <input onChange={(e) => {

                      setTodos(todos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        console.log(obj);
                        return obj2;

                      }))
                    }}
                      value={obj.status} type="checkbox" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                      <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                      <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                    </svg>
                  </div>

                  {obj.status ? (
                    <p style={{ textDecoration: 'line-through' }} >{obj.text}</p>
                  ) : (
                    <p>{obj.text}</p>
                  )}

                  {/* /////////////////////////////////////////////////// */}
                </div>

                {/* delete an list */}
                <div className="right">
                  <i className="fas fa-times" onClick={() => setTodos(

                    todos.filter((obj2) => {
                      if (obj.id !== obj2.id) {
                        return obj2
                      }
                      return null
                    })
                  )}></i>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}


