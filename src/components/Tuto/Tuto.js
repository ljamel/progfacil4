import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Manatee() {
    return <div className="body2"><h2>Formation sur mesure</h2> <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Modules
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    </div>;
}
