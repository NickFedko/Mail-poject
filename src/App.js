import DeliveryInfo from "./components/DeliveryInfo";
import emailImage from './assets/icons/mail-Image.svg';
import addessImage from './assets/icons/address-image.svg';
import courierImage from './assets/icons/courier-image.svg'

function App() {
  return (
    <div className="App grid gap-6 items-start bg-gray-200 h-screen">
      <header className="mt-6">
        <div className="h-14 bg-pink-600 shadow rounded mx-auto" style={{maxWidth: '600px'}}/>
      </header>
      <main className="grid items-center mx-auto rounded bg-white shadow gap-6 p-6" style={{maxWidth: '600px'}}>
        <img alt='accepted cv' src={emailImage} />
        <h2>Job inventation accepted</h2>
        <p className="text-gray-700">Dear firstname,</p>
        <p className="text-gray-700"> 
          we are delighted to inform you that your job invitation has been accepted by your employee. This is an exciting step forward in building your team and achieving your business goals.
        </p>
        <p className="text-gray-700">Here are the details of the accepted job invitation:</p>
        <DeliveryInfo 
          image={addessImage}
          title='Business: Simple Kitchen'
          info='4517 Washington Ave. Manchester, Kentucky 39495'
        />
        <hr style={{gridGap: '0'}}/>
        <DeliveryInfo 
          image={courierImage}
          title='Courier'
          info='Courier Name'
        />
        <button className="rounded bg-pink-600 h-9 text-white" style={{width:'200px'}}>Couriers page</button>
      </main>
    </div>
  );
}

export default App;
