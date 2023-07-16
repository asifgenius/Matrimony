import { Col, Container, Image, Row } from 'react-bootstrap';
import './DashboardProfileCard.css'

function DashboardProfileCard() {
    return (
        <>
            <div>
                <div className='Dashboard-Profile-Card'>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image className='dashboard-images' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHt3vaSr5-4_z4DSqamFNG5gx5TTc83RnhQ&usqp=CAU" rounded  />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <hr />
                    <div className='d-flex Dashboard-Profile'>
                        <p>Asif Islam</p>
                        <a className='Dashboard-Profile-edit' href="">Edit</a>
                    </div>
                    <hr />
                    <div className='d-flex Dashboard-Profile'>
                        <p>Account Type</p>
                        <a onClick={() => alert("Thanks for upgrading")} className='Dashboard-Profile-upgrade' href="">Upgrade</a>
                    </div>
                    <hr />
                    <div className='d-flex Dashboard-Profile mb-3'>
                        <p>Mobile is verify</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardProfileCard;