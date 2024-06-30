import "./App.css";
import InvoiceForm from "./components/InvoiceForm";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100 bg-dark-subtle">
      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
}

export default App;
