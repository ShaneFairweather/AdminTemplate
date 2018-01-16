import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from 'react-big-calendar'
import events from '../data/events';
import moment from 'moment';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const Selectable = props => (
        <BigCalendar
            selectable
            events={events}
            defaultView="month"
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => (event.title)}
            onSelectSlot={slotInfo =>
                alert(
                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                )
            }
        />
)

export default Selectable;