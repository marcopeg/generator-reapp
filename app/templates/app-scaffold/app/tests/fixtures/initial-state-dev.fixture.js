
import { INITIAL_STATE as APP_INITIAL_STATE } from 'reducers/app-reducer';

const INITIAL_STATE = {
    app: {
        ...APP_INITIAL_STATE,
        // override properties from the APP reducer:
        // title: 'my fixture title'
    },
};

export default INITIAL_STATE;
