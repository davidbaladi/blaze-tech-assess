import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FoodItem from '../components/FoodItem';
import { INITIAL_COMPONENT_STATE, groceryStoreReducer } from './groceryStoreReducer';
import Card from 'react-bootstrap/Card';

const inventory = [{ item: 'apple', price: 3 }, { item: 'grapes', price: 5 }, { item: 'peaches', price: 7 }]

const GroceryStore = () => {
    const [compState, compDispatch] = React.useReducer(groceryStoreReducer, INITIAL_COMPONENT_STATE)

    React.useEffect(() => console.log(compState), [compState])

    const [subtotal, setSubtotal] = React.useState('0');

    React.useMemo(() => {

        const calcSubtotal = () => {
            let peachesPrice = 7
            let applesPrice = 3
            let grapesPrice = 5
            let sum = 0
            if (compState.applesQuantity > 1) {
                applesPrice = applesPrice * .8
            }
            if (compState.grapesQuantity == 1) {
                sum = compState.applesQuantity * applesPrice +
                    compState.grapesQuantity * grapesPrice +
                    compState.peachesQuantity * peachesPrice
            } else if (!(compState.grapesQuantity % 2)) {
                sum = compState.applesQuantity * applesPrice +
                    compState.grapesQuantity * grapesPrice / 2 +
                    compState.peachesQuantity * peachesPrice
            } else {
                sum = compState.applesQuantity * applesPrice +
                    compState.grapesQuantity % 2 * grapesPrice +
                    (compState.grapesQuantity - 1) * grapesPrice / 2 +
                    compState.peachesQuantity * peachesPrice
            }
            return sum
        }

        let result = calcSubtotal();

        setSubtotal(result.toFixed(2))

    }, [compState.applesQuantity, compState.grapesQuantity, compState.peachesQuantity])


    return (
        <Container style={{ paddingTop: '5rem' }}>
            <Row  >
                <Card body style={{ maxWidth: '14rem', margin: 'auto' }}>{`Subtotal: $${subtotal}`}</Card>
            </Row>
            {inventory.map(itm =>
                <FoodItem key={itm.item} itm={itm} compState={compState} compDispatch={compDispatch} />
            )}
            <Row >
                <Button variant="warning" type='submit' style={{ maxWidth: '14rem', margin: 'auto' }}>Add to Shopping Cart</Button>
            </Row>

        </Container>
    )
}

export default GroceryStore