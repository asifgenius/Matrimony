import { useContext, useState ,ReactChildren, ReactChild, ReactNode} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { faCoffee, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ScarchAccordion.css'


type AdvancedCardType = {
  children: ReactNode,
  item: string
}

function ContextAware({ children, eventKey, callback }:{
    children:string,eventKey:string,callback:number
}) { 
 
  const [toggle, setToggle] = useState(false);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => {
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
  function ScarchAccordion({  children, item  } : AdvancedCardType) {
  return (
      <Accordion defaultActiveKey="0" className='filter-cards w-100'>
        <Card className='card-borderes'>    
        <Card.Header className='card-header'>
          <div className='d-flex card-container'>
           
            <div className=' p-2'>
              <ContextAware eventKey="0" children={''} callback={0}></ContextAware>
            </div>
            <div className='p-2 filter-text'>
              {item}
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

export default ScarchAccordion;
