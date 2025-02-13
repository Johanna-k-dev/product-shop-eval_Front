import React, {FC, useEffect, useState} from 'react';
import {Product} from '../../../type/product';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProductData from '../../../dataFake/product-data.json'

const ProductCard: FC = () => {
    const [products, setProducts] = useState<Product[]>([]);


    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {products.map((product) => (
                <Card key={product.id} sx={{maxWidth: 245, m: 2, backgroundColor: 'salmon'}}>
                    <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{width: "100%", height: "150px", objectFit: "cover"}}
                        />
                        <Typography variant="body1">{product.price} €</Typography>
                        <Typography variant="body2">{product.description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default ProductCard;