import {FC} from 'react';
import productsData from "../../../dataFake/product-data.json";
import Stack from "@mui/material/Stack";
import {Autocomplete, TextField} from "@mui/material";


const ProductSearshBarre: FC<{}> = ({}) => {


    return (
        <Stack spacing={2} sx={{width: 300}}>

            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={productsData.products.map((product: any) => (product.name))}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: 'search',
                            },
                        }}
                    />
                )}
            />
        </Stack>
    );
};

export default ProductSearshBarre;