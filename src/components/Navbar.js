import React from 'react';
import { Button, Typography, Toolbar, AppBar, TextField, Grid } from '@material-ui/core';

class Navbar extends React.Component {

    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
    }

    render() {
        return (
            <div style={{flexGrow: '1'}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{flexGrow: '1'}}>
                            Youtube API
                        </Typography>
                        <Grid style={{ flexGrow: '1' }}>
                            <form onSubmit={this.handleSubmit}>
                                <TextField label="Search..." onChange={this.handleChange} 
                                style={{color:'#ffff', width:'50%', height:'100%'}} color="white"
                                />
                            </form>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;