import { Button, Card, CardContent, CardHeader } from "@material-ui/core"
import { connect } from "react-redux"
import { removeContactAction, editContactAction } from '../actions/contact-list.actions'

const ContactList = (props) => {
    return (
        <Card>
            <CardHeader title="Contacts" />
            <CardContent>
                {props.contacts.map((contact, index) => (
                    <Card key={index} style={{marginBottom: '5px'}}>
                        <CardContent>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <div>{contact.name}</div>
                                <div>{contact.number}</div>
                                <div style={{display: 'flex'}}>
                                    <Button variant="contained" color="primary" onClick={() => props.editContactAction(index)}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => props.removeContactAction(index)}>Delete</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { removeContactAction, editContactAction })(ContactList);