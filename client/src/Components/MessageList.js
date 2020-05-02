import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class MessageList extends Component {
    state = {
        messages: [
            { id: 1, content: "hi" },
            { id: 11, content: "hghi" },
            { id: 111, content: ",fgfhi" },
            { id: 1111, content: "hfghfghfghfghi" }
        ]
    }

    render() {
        const { messages } = this.state;
        return (

            <Container>


                <ListGroup>
                    <TransitionGroup className="message-list">
                        {messages.map(({ id, content }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem> {content}
                                    <div className="text-right">
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={()=> {
                                        this.setState(state=>({
                                            messages: state.messages.filter(content =>content.id !==id)
                                        }))
                                    }}>

                                    Delete</Button></div>
                                   
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <div className="text-right">

                    <Button
                        color="dark"
                        style={{ marginBottom: '2rem' }}
                        //className="float-right"
                        onClick={() => {
                            const content = prompt('enter something')
                            if (content) {
                                this.setState(state => ({
                                    messages: [...state.messages, { id: 18, content }]
                                }))
                            }
                        }}
                    >
                        add message</Button>
                </div>
            </Container>

        )
    }
}

export default MessageList