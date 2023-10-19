import Header from "./components/Header";
import Footer from "./components/Footer";
import CalendarView from "./components/CalendarView";


function App() {

  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-gray-900 via-gray-600 to-blue-gray-900 min-h-screen">
      <Header />
      <CalendarView />
      <Footer />
    </div>
  );
}

export default App;