import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BigCalendar from 'react-big-calendar'
import events from '../../data/events';
import moment from 'moment';

const CustomToolbar = (toolbar) => {
    const goToBack = () => {
        toolbar.date.setMonth(toolbar.date.getMonth() - 1);
        toolbar.onNavigate('prev');
    };

    const goToNext = () => {
        toolbar.date.setMonth(toolbar.date.getMonth() + 1);
        toolbar.onNavigate('next');
    };

    const label = () => {
        const date = moment(toolbar.date);
        return (
            <label className='calendar__toolbar__label label-date'>{date.format('MMMM')} {date.format('YYYY')}</label>
        );
    };

    return (
        <div className='calendar__toolbar'>
            <div className='calendar__toolbar__button btn-back' onClick={goToBack}><i className="fa fa-long-arrow-left" /></div>
            {label()}
            <div className='calendar__toolbar__button btn-next' onClick={goToNext}><i className="fa fa-long-arrow-right" /></div>
        </div >
    );
};

moment.locale('en');
BigCalendar.momentLocalizer(moment);

const CalendarInner = (props) => {
    return (
        <div className='card calendar-inner'>
            <BigCalendar
                selectable
                events={events}
                defaultView="month"
                scrollToTime={new Date(1970, 1, 1, 6)}
                defaultDate={new Date()}
                onSelectEvent={event => (event.title)}
                components={{
                    toolbar: CustomToolbar
                }}
            />
        </div>
    );
};

export default CalendarInner;















