import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function Narwhal() {
    return <div className="body2"><h2>Contact</h2>         <Form method="get" action="http://localhost:5000/sendmessage">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="mail" type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control name="content" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Envoyer
        </Button>
    </Form><p>tel: 06 25 54 14 66 | contact@progfacil.com</p></div>;
}
