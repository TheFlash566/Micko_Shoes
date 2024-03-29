import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"



type storeItemProps = {
    id: number
    brand: string
    price: number
    imgUrl: string
}

export function StoreItem({id, brand, price, imgUrl}:
    storeItemProps) {
        const {
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity,
            removeFromCart,
        } = useShoppingCart()

        const quantity = getItemQuantity(id)

        return (
            <Card className="h-100">
                <Card.Img 
                    variant="top"
                    src={imgUrl}
                    height="200px"
                    style={{objectFit: "cover"}}
                />
                <Card.Body className="d-flex flex-column" style={{background: 'rgb(209 176 209 / 72%)'}}>
                    <Card.Title className="d-flex 
                    justify-content-between 
                    align-items-basline 
                    mb-4">
                        <span className="fs-1.2">{brand}</span>
                        <span className="ms-2 text-muted">{formatCurrency (price)}</span>
                    </Card.Title>
                    <div className="mt-auto ">
                        { quantity === 0 ? (
                            <Button className="w-100 add-btn" onClick={() => increaseCartQuantity(id)}>+ Add to cart</Button>
                        ) : ( 
                            <div className="d-flex align-items-center 
                                flex-column" style={{gap: ".5rem"}}>
                                <div className="d-flex align-items-center
                                justify-content-center"
                                style={{gap: ".5rem"}}
                                >
                            <Button className="minus" onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button className="plus" onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        )
    }