import { Card, CardActions, CardContent, CardHeader, IconButton, TextField } from "@material-ui/core"
import { AddCircleOutlined, Save } from "@material-ui/icons"
import { connect } from "react-redux"
import { updateContactNameAction, updateContactNumberAction, addContactAction } from '../actions/contact-list.actions'

const ContactForm = (props) => {
    return (
        <Card>
            <CardHeader title={props.isEditing ? 'Edit Contact' : 'Add Contact'} />
            <CardContent>
                <form>
                    <TextField
                        style={{ width: '100%', marginBottom: '10px' }}
                        label="Outlined"
                        variant="outlined"
                        label="Name"
                        value={props.contact.name} 
                        onChange={(e) => props.updateContactNameAction(e.target.value)} />
                    <TextField
                        style={{ width: '100%' }}
                        label="Outlined"
                        variant="outlined"
                        label="Number"
                        value={props.contact.number}
                        onChange={(e) => props.updateContactNumberAction(e.target.value)} />
                </form>
            </CardContent>
            <CardActions disableSpacing style={{display: 'flex', justifyContent: 'flex-end'}}>
                <IconButton onClick={() => props.addContactAction()}>
                    {props.isEditing ? 
                        <Save style={{ fontSize: 50 }} color="primary" /> : 
                        <AddCircleOutlined style={{ fontSize: 50 }} color="primary" />
                    }
                </IconButton>
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        contact: state.contact,
        isEditing: state.isEditing
    }
}

export default connect(mapStateToProps, { updateContactNameAction, updateContactNumberAction, addContactAction })(ContactForm);