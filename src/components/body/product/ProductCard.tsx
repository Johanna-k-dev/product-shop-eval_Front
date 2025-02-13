import React, {FC} from "react";
import productsData from "../../../dataFake/product-data.json"; // Chemin vers ton fichier JSON
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductCard: FC = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center",width:"100%",height:"100%"}}>
            {productsData.products.map((product) => (
                <Card key={product.id} sx={{maxWidth: 350,minWidth:250,minHeight: 400, m: 2,borderRadius:2,backgroundColor: "aliceblue"}}>
                    <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <img
                            src={product.posterPath}
                            alt={product.name}
                            style={{width: "100%", height: "100%", objectFit: "cover"}}
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