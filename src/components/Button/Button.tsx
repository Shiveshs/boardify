type ButtonProps = {
    type: 'primary' | 'secondary' | 'danger',
    size: 'small' | 'medium' | 'large',
    label: string,
    onClick: () => void
};

export const Button = ({type, size, label, onClick}: ButtonProps) => {

    const typeClass = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-300 text-black',
    danger: 'bg-red-600 text-white',
  }[type];

  const sizeClass = {
    small: 'text-sm px-2 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  }[size];

    return (
        <button onClick={onClick} className={`rounded ${typeClass} ${sizeClass}`}>
            {label}
        </button>
    );
}