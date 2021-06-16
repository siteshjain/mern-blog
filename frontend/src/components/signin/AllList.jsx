import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'

const AllList = ({name,label,handleChange,type,autoFocus,handleShowPassword}) => {
    return (
        <Grid item xs={12}>
            <TextField name={name} onChange={handleChange} variant="outlined" fullWidth required label={label}
                type={type}
                autoComplete="off"
                autoFocus={autoFocus}
                InputProps={name==='password'?{
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {
                                    type==='password'?<Visibility/>:<VisibilityOff/>
                                }
                            </IconButton>
                        </InputAdornment>
                    )
                }:null}
            />
        </Grid>
    )
}

export default AllList
