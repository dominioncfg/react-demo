interface MyButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const MyButton = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: MyButtonProps) => {
  const variantStyle = variant === 'primary' ? 'primatry' : 'secondary';
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantStyle} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
};
