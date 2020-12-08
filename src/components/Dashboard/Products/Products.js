import React, {useState, useEffect} from 'react';
import Navigation from '../NavBar/Navigation';
import { firestore} from './../../../config/firebase';
import {Row, Col, Card, Icon} from 'react-materialize';
import ButtonSection from './../../Button/ButtonSection';


const Products =({displayName})=> {
    const [userProducts, setUserProducts] = useState([]);

    const uid = localStorage.getItem('uid');

    useEffect(()=>{
        const getProduct = async () => {
            const products = await firestore.collection('products').get();
            const listProducts = [];
            if(products){
                products.forEach((product)=>{
                    if(uid === product.data().uid){
                        const userProduct = {
                            id: product.id,
                            productName: product.data().productName,
                            productValue: product.data().productValue,
                            uid: product.data().uid
                        }
                        listProducts.push(userProduct);
                    }
                    
                })
                setUserProducts(listProducts);
            }
        }
       getProduct()
    }, [userProducts,uid]);

    const handleDelete = async (id) => {
        try {
            const getProduct = await firestore.collection('products').get()
            getProduct.forEach((product)=>{
                if(product.id === id){
                firestore.collection('products').doc(id).delete();
                }
            })
           
        } catch (error) {
            
        }
    }

    return (
        <div>
            <Navigation displayName={displayName}/>
            <Row>
                {userProducts.map((product)=>{
                    return(
                        <div>
                            <Col  m={4}  s={12}>
                                <Card
                                className="blue-grey darken-1" 
                                closeIcon={<Icon>close</Icon>}
                                revealIcon={<Icon>more_vert</Icon>}
                                textClassName="white-text"
                                title={product.productName}
                                >
                               {product.productValue} <br />
                               <ButtonSection text="Delete" handleClick={() => handleDelete(product.id)}/>   
                                </Card>
                            </Col>

                        </div>
                    )
                })}
            </Row>
        </div>
    )
}

export default Products
