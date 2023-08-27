import DeliveryInfo from "./components/DeliveryInfo";
import emailImage from './assets/icons/mail-Image.svg';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App bg-gray-200 bg-contain h-screen pt-6" >
      <header className="mb-6">
        <div className="h-14 bg-pink-600 shadow rounded mx-auto max-w-2xl" />
      </header>
      <main className="grid items-center mx-auto rounded bg-white shadow gap-6 p-6 max-w-2xl" >
        <img alt="accepted cv" src={emailImage} className="mx-auto"/>
        <h2 className="font-semibold">Job inventation accepted</h2>
        <p className="text-gray-700">Dear firstname,</p>
        <p className="text-gray-700"> 
          we are delighted to inform you that your job invitation has been accepted by your employee. This is an exciting step forward in building your team and achieving your business goals.
        </p>
        <p className="text-gray-700">Here are the details of the accepted job invitation:</p>
        <DeliveryInfo 
          image={faHouse}
          title='Business: Simple Kitchen'
          info='4517 Washington Ave. Manchester, Kentucky 39495'
        />
        <hr className="gap-0"/>
        <DeliveryInfo 
          image={faUser}
          title='Courier'
          info='Courier Name'
        />
        <button className="rounded bg-pink-600 h-9 text-white w-48">Couriers page</button>
      </main>
    </div>
  );
}

export default App;
