import React, { useState } from 'react'
import Alert from 'react-bootstrap-alert'

const AlertCiNotFound = () => {

    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>
                    C.I. no encontrada
                </Alert.Heading>
            </Alert>
        )
    } else {
        return <button onclick={() => setShow(true)}>Show Alert modafoca</button>;

    }
}


export default AlertCiNotFound;