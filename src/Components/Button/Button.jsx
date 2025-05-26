import React from 'react';

// Base Button Component with common styling and functionality
export const Button = ({children, variant = 'primary', outlined = false, disabled = false, className = '', onClick, ...props }) => {
    // Build class names based on variant, outlined state and disabled state
    const getButtonClasses = () => {
        const baseClasses = "px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 flex items-center justify-center";
        const variantClasses = {
            primary: {
                default: "bg-[var(--color-btn-primary)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover)] active:bg-[var(--color-btn-primary-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-outline-border)] text-[var(--color-btn-outline-text)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            secondary: {
                default: "bg-[var(--color-btn-secondary)] text-[var(--color-btn-secondary-text)] hover:bg-[var(--color-btn-secondary-hover)] active:bg-[var(--color-btn-secondary-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-secondary)] text-[var(--color-btn-secondary)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            tertiary: {
                default: "bg-[var(--color-btn-tertiary)] text-[var(--color-btn-tertiary-text)] hover:bg-[var(--color-btn-tertiary-hover)] active:bg-[var(--color-btn-tertiary-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-tertiary)] text-[var(--color-btn-tertiary)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            neutral: {
                default: "bg-[var(--color-btn-neutral)] text-[var(--color-btn-neutral-text)] hover:bg-[var(--color-btn-neutral-hover)] active:bg-[var(--color-btn-neutral-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-neutral)] text-[var(--color-btn-neutral)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            danger: {
                default: "bg-[var(--color-btn-danger)] text-[var(--color-btn-danger-text)] hover:bg-[var(--color-btn-danger-hover)] active:bg-[var(--color-btn-danger-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-danger)] text-[var(--color-btn-danger)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            success: {
                default: "bg-[var(--color-btn-success)] text-[var(--color-btn-success-text)] hover:bg-[var(--color-btn-success-hover)] active:bg-[var(--color-btn-success-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-success)] text-[var(--color-btn-success)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            warning: {
                default: "bg-[var(--color-btn-warning)] text-[var(--color-btn-warning-text)] hover:bg-[var(--color-btn-warning-hover)] active:bg-[var(--color-btn-warning-active)]",
                outlined: "bg-transparent border border-[var(--color-btn-warning)] text-[var(--color-btn-warning)] hover:bg-[var(--color-btn-outline-hover)]"
            },
            outline: {
                default: "bg-transparent border border-[var(--color-btn-outline-border)] text-[var(--color-btn-outline-text)] hover:bg-[var(--color-btn-outline-hover)]",
                outlined: "bg-transparent border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-btn-outline-hover)]"
            }
        };

        const disabledClasses = "bg-[var(--color-btn-disabled)] text-[var(--color-btn-disabled-text)] cursor-not-allowed border-[var(--color-btn-disabled)] hover:bg-[var(--color-btn-disabled)]";
        const outlinedDisabledClasses = "bg-transparent border border-[var(--color-btn-disabled)] text-[var(--color-btn-disabled-text)] cursor-not-allowed hover:bg-transparent";

        let classes = `${baseClasses} `;

        if (disabled) {
            classes += outlined ? outlinedDisabledClasses : disabledClasses;
        } else {
            classes += outlined
                ? variantClasses[variant].outlined
                : variantClasses[variant].default;
        }

        return `${classes} ${className}`;
    };

    return (
        <button
            className={getButtonClasses()}
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            {...props}
        >
            {children}
        </button>
    );
};

// Primary Button Components
export const PrimaryButton = (props) => (
    <Button variant="primary" {...props} />
);

export const PrimaryOutlinedButton = (props) => (
    <Button variant="primary" outlined {...props} />
);

export const PrimaryDisabledButton = (props) => (
    <Button variant="primary" disabled {...props} />
);

export const PrimaryOutlinedDisabledButton = (props) => (
    <Button variant="primary" outlined disabled {...props} />
);

// Secondary Button Components
export const SecondaryButton = (props) => (
    <Button variant="secondary" {...props} />
);

export const SecondaryOutlinedButton = (props) => (
    <Button variant="secondary" outlined {...props} />
);

export const SecondaryDisabledButton = (props) => (
    <Button variant="secondary" disabled {...props} />
);

export const SecondaryOutlinedDisabledButton = (props) => (
    <Button variant="secondary" outlined disabled {...props} />
);

// Tertiary Button Components
export const TertiaryButton = (props) => (
    <Button variant="tertiary" {...props} />
);

export const TertiaryOutlinedButton = (props) => (
    <Button variant="tertiary" outlined {...props} />
);

export const TertiaryDisabledButton = (props) => (
    <Button variant="tertiary" disabled {...props} />
);

export const TertiaryOutlinedDisabledButton = (props) => (
    <Button variant="tertiary" outlined disabled {...props} />
);

// Neutral Button Components
export const NeutralButton = (props) => (
    <Button variant="neutral" {...props} />
);

export const NeutralOutlinedButton = (props) => (
    <Button variant="neutral" outlined {...props} />
);

export const NeutralDisabledButton = (props) => (
    <Button variant="neutral" disabled {...props} />
);

export const NeutralOutlinedDisabledButton = (props) => (
    <Button variant="neutral" outlined disabled {...props} />
);

// Outline Button Components (this is different from outlined variant buttons)
export const OutlineButton = (props) => (
    <Button variant="outline" {...props} />
);

export const OutlineOutlinedButton = (props) => (
    <Button variant="outline" outlined {...props} />
);

export const OutlineDisabledButton = (props) => (
    <Button variant="outline" disabled {...props} />
);

export const OutlineOutlinedDisabledButton = (props) => (
    <Button variant="outline" outlined disabled {...props} />
);

// Danger Button Components
export const DangerButton = (props) => (
    <Button variant="danger" {...props} />
);

export const DangerOutlinedButton = (props) => (
    <Button variant="danger" outlined {...props} />
);

export const DangerDisabledButton = (props) => (
    <Button variant="danger" disabled {...props} />
);

export const DangerOutlinedDisabledButton = (props) => (
    <Button variant="danger" outlined disabled {...props} />
);

// Success Button Components
export const SuccessButton = (props) => (
    <Button variant="success" {...props} />
);

export const SuccessOutlinedButton = (props) => (
    <Button variant="success" outlined {...props} />
);

export const SuccessDisabledButton = (props) => (
    <Button variant="success" disabled {...props} />
);

export const SuccessOutlinedDisabledButton = (props) => (
    <Button variant="success" outlined disabled {...props} />
);

// Warning Button Components
export const WarningButton = (props) => (
    <Button variant="warning" {...props} />
);

export const WarningOutlinedButton = (props) => (
    <Button variant="warning" outlined {...props} />
);

export const WarningDisabledButton = (props) => (
    <Button variant="warning" disabled {...props} />
);

export const WarningOutlinedDisabledButton = (props) => (
    <Button variant="warning" outlined disabled {...props} />
);

// Button Group Component for dynamically numbered buttons
export const ButtonGroup = ({
    count = 3,
    variant = 'primary',
    outlined = false,
    disabled = false,
    activeIndex = 0,
    onButtonClick,
    className = ''
}) => {
    return (
        <div className={`inline-flex rounded-md shadow-sm ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
                <Button
                    key={index}
                    variant={variant}
                    outlined={outlined}
                    disabled={disabled}
                    className={`
            ${index === 0 ? 'rounded-l-md rounded-r-none' : ''} 
            ${index === count - 1 ? 'rounded-r-md rounded-l-none' : ''} 
            ${index > 0 && index < count - 1 ? 'rounded-none' : ''}
            ${index > 0 ? '-ml-px' : ''}
            ${activeIndex === index ? 'relative z-10 ring-1 ring-[var(--color-focus-ring)]' : ''}
          `}
                    onClick={() => onButtonClick && onButtonClick(index)}
                >
                    {index + 1}
                </Button>
            ))}
        </div>
    );
};

export default Button;