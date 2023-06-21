import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Employees } from './components/EmployeesPage/Employees'
import { EmployeInfoPage } from './components/EmployeInfoPage/EmployeInfoPage'
import { Tasks } from './components/TasksPage/Tasks'
import './App.css'
import { TaskInfoPage } from './components/TaskInfoPage/TaskInfoPage'



const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employe/:id" element={<EmployeInfoPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:id" element={<TaskInfoPage />} />
      </Routes>
    </div>
  )

}

export default App
