import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
class EventListItem extends Component {
    render() {
        const {events} = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image 
                            size="tiny" 
                            circular 
                            src={events.hostPhotoURL} 
                            />
                            <Item.Content>
                                <Item.Header as="a">{events.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{events.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {events.date}
                    <Icon name="marker" /> {events.venue}
                  </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        
                        <EventListAttendee/>
                        <EventListAttendee/>
                        <EventListAttendee/>
                        
                    </List>
                </Segment>
                <Segment clearing>
                <span>{events.description}</span>
                    <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        )
    }
}
export default EventListItem