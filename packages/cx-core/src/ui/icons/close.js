import {VDOM} from '../Widget';
import {Icon} from './Icon';

export default Icon.register('close', props => {
   return <svg
      {...props}
      viewBox="0 0 32 32">
      <path fill="currentColor"
            strokeWidth="1"
            stroke="currentColor"
            d="M16.715 16l3.912-3.91c.19-.192.19-.478 0-.67-.19-.19-.477-.19-.668 0l-3.912 3.912-4.007-3.96c-.19-.19-.476-.19-.667 0-.19.192-.19.478 0 .67L15.333 16l-3.96 3.96c-.19.19-.19.476 0 .667.19.19.477.19.668 0l3.96-3.96 3.96 3.96c.19.19.476.19.667 0 .19-.19.19-.477 0-.668L16.715 16z"/>
   </svg>
});

