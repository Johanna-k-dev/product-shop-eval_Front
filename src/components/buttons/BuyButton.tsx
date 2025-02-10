import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from '@mui/material';
import React from 'react';
import {FC} from 'react';

const BuyButton: FC<{}> = ({}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>


            return (
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    ACHETER
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const email = formJson.email;
                            console.log(email);
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Vos coordonnées</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Merci de bien vouloir remplir toutes les informations du formulaire.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            id="name"
                            name="name"
                            label="Nom"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            id="name"
                            name="surname"
                            label="Prénom"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            id="name"
                            name="email"
                            label="Email "
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            id="name"
                            name="address"
                            label="Adresse"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Annuler</Button>
                        <Button type="submit">Envoyer</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            );
        </>
    );
};

export default BuyButton;