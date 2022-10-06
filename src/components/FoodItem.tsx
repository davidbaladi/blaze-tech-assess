import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ACTION_TYPES } from '../pages/actionTypes';

const FoodItem = ({ itm, compState, compDispatch }: Props) => {
    return (
        <Row style={{ maxWidth: '40rem', margin: 'auto' }} >
            <Col >
                <Row style={{ paddingLeft: '6rem', paddingTop: '2rem' }}>
                    {`Food Item: ${itm.item}`}
                </Row >
                <Row style={{ paddingLeft: '6rem' }}>
                    {`Item Price: ${itm.price}`}
                </Row >
            </Col >
            <Col >
                {itm.item === 'apple' &&
                    <ButtonGroup aria-label="Basic example" style={{ padding: '2rem' }}>
                        <Button variant="danger" onClick={() => compDispatch({ type: ACTION_TYPES.DECREASE_APPLE_QUANTITY })}>-</Button>
                        <Button variant="secondary" disabled>{compState.applesQuantity}</Button>
                        <Button variant="success" onClick={() => compDispatch({ type: ACTION_TYPES.INCREASE_APPLE_QUANTITY })}>+</Button>
                    </ButtonGroup>
                }
                {itm.item === 'grapes' &&
                    <ButtonGroup aria-label="Basic example" style={{ padding: '2rem' }}>
                        <Button variant="danger" onClick={() => compDispatch({ type: ACTION_TYPES.DECREASE_GRAPES_QUANTITY })}>-</Button>
                        <Button variant="secondary" disabled>{compState.grapesQuantity}</Button>
                        <Button variant="success" onClick={() => compDispatch({ type: ACTION_TYPES.INCREASE_GRAPES_QUANTITY })}>+</Button>
                    </ButtonGroup>
                }
                {itm.item === 'peaches' &&
                    <ButtonGroup aria-label="Basic example" style={{ padding: '2rem' }}>
                        <Button variant="danger" onClick={() => compDispatch({ type: ACTION_TYPES.DECREASE_PEACHES_QUANTITY })} >-</Button>
                        <Button variant="secondary" disabled>{compState.peachesQuantity}</Button>
                        <Button variant="success" onClick={() => compDispatch({ type: ACTION_TYPES.INCREASE_PEACHES_QUANTITY })}>+</Button>
                    </ButtonGroup>
                }
            </Col>
        </Row >
    )
}

export default FoodItem;

interface ComponentState {
    applesQuantity: number,
    grapesQuantity: number,
    peachesQuantity: number
}

interface Props {
    itm: {
        item: string;
        price: number;
    };
    compState: ComponentState;
    compDispatch: React.Dispatch<any>;
}