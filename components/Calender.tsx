import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Calendar({
                             selected,
                             onSelect,
                         }: {
    selected: Date | undefined;
    onSelect: (date: Date | undefined) => void;
}) {
    return (
        <DatePicker
            selected={selected}
            onChange={onSelect}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full p-2 border rounded"
        />
    );
}