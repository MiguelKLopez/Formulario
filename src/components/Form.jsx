import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/Forms.css';

function FormS() {
  return (
    <div className='forms-container'>
        <Form className='FormA'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="email" placeholder="Miguel" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text"  placeholder="López" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="int"  placeholder="18"/>
        </Form.Group>
        
        <Button type="submit" className='ButtonA'>
            Guardar
        </Button>
        </Form>
    </div>
  );
}

export default FormS;