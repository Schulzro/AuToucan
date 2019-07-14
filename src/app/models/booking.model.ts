import * as moment from 'moment';

export interface Booking {
    id: number;
    booking_start_date: moment.Moment;
    booking_end_date:  moment.Moment;
    name: string;
    email: string;
    phone_number: string;
    comments: string;
    number_of_persons: number;
    booking_amount: number;
    created_at:  moment.Moment;
    updated_at:  moment.Moment;
    reference: string;
}
