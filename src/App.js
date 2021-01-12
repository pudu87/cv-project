import './App.scss'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)

function App() {
  return (
    <div className='App'>
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
