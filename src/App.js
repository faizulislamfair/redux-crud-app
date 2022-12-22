import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/Users';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.value);


  const [name, setName] = useState("");
  const [username, setUsername] = useState("");


  return (
    <div className="App">
      {" "}
      <div className="addUser mt-5">
        <input className='placeholder:italic placeholder:text-slate-400 shadow appearance-none border rounded py-3 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2'
          type="text"
          placeholder='Name...'
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <input className='placeholder:italic placeholder:text-slate-400 shadow appearance-none border rounded py-3 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2'
          type="text"
          placeholder='Username...'
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name: name, username: username })); }} className='btn bg-red-400 border-none text-white'>Add User</button>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 mt-12">
        {
          userList.map(user => {
            return (
              <div key={user.id} className="card bg-teal-400 text-primary-content shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{user.username}</h2>
                  <p className='text-2xl'>{user.name}</p>
                  <div className="card-actions mt-2">
                    <input
                      type="text"
                      className='placeholder:italic placeholder:text-slate-400 shadow appearance-none border rounded py-1 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      placeholder="Update Username..."
                      onChange={(event) => {
                        // setUsername(event.target.value);
                      }}
                    />
                    <button className='btn bg-red-400 border-none text-white btn-sm'>Update Username</button>
                    <button className='btn bg-red-300 border-none btn-sm'>Delete User</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}

export default App;
