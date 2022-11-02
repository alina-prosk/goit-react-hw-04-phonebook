
import PropTypes from 'prop-types';
import { Contact, Button, List } from './ContactList.styled';

export default function ContactList ({ contacts, onDelete }) {
        return (
            <List>
                {contacts.map(({ name, number, id }) => {
                    return (
                        <Contact key={id}>
                            <span>
                                {name}: {number}
                            </span>
                            <Button type="button" onClick={() => onDelete(id)}>
                                Delete
                            </Button>
                        </Contact>
                    );
                })}
            </List>
        );
    }


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};