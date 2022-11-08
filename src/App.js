import { Button } from 'flowbite-react';
import './App.css';

function App() {
  return (
    <div className="bg-primary-400 mt-10 ">
      <div className='flex text-center align-center'>
        <p className="text-3xl font-bold text-center text-amber-300">
          Hello world!
        </p>
        <Button
          outline={true}
          gradientDuoTone="tealToLime"
        >
          Teal to Lime
        </Button>
      </div>
    </div>
  );
}

export default App;
