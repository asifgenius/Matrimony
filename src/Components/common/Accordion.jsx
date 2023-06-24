import { useContext, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Accordion.css'
function ContextAwareToggle({ children, eventKey, callback }) {

  const [toggle, setToggle] = useState(false);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => {
      callback && callback(eventKey);
      setToggle(!toggle);
    },
  );

  return (
    <span className=' toggle-pointer toggle-size'
      onClick={decoratedOnClick}
    >
      {toggle ? <FontAwesomeIcon className='toggle square border' icon={faPlus} /> : <FontAwesomeIcon className='toggle square border' icon={faMinus} />}
    </span>
  );
}

// function CustomAccordion({ children }) {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Card>
//         <Card.Header style={{ textAlign: 'end' }}>
//           <ContextAwareToggle eventKey="0"></ContextAwareToggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>{ children }</Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// }


function CustomAccordion({ item , children }) {
  return (
      <Accordion defaultActiveKey="0" className='filter w-100'>
        <Card className='card-border'>    
        <Card.Header className='card-header'>
          <div className='d-flex card-container'>
            <div className='p-2 filter-text'>
              {/* Recenly Joined */}
              {item}
            </div>
            <div className='ms-auto p-2'>
              <ContextAwareToggle eventKey="0"></ContextAwareToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CustomAccordion;
