import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Placeholder from 'react-bootstrap/Placeholder'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <Container className="d-flex justify-content-center pt-3">
            <Card style={{ width: '35rem' }}>
                <Spinner animation="border" />
                <Card.Body>
                <Card.Title className="fs-1">Loading...</Card.Title>
                    <Placeholder xs={6} />
                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Loading
