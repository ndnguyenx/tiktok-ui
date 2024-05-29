import './Button.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    text = false,
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp
            className={`btn-wrapper ${primary ? 'primary' : ''} 
            ${outline ? 'outline' : ''}
            ${rounded ? 'rounded' : ''}  
            ${small ? 'small' : ''}
            ${large ? 'large' : ''}
            ${disabled ? 'disabled' : ''}
            ${className ? [className] : ''}
            ${text ? 'text' : ''}`}
            {...props}
        >
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
