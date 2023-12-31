import classNames from 'classnames';
import './Task.css';

const STATUS = "ONGOING";

export default function Task({ title }) {
    return <>
        <div className="task">
            { title }
            <div className='bottomWrapper'>
                <div></div>
                <div className={classNames("status", STATUS)}>{ STATUS }</div>
            </div>
        </div>
    </>
}