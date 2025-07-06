import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

// classname utility function that makes setting classnames look cleaner
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
}