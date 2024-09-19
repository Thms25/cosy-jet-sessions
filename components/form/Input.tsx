type InputProps = {
  id?: string
  value: string
  type: string
  label?: string
  placeholder?: string
  required: boolean
  onChange?: (e: any) => void
  className?: string
  error?: string
}

export default function Input({
  id,
  value,
  type,
  label,
  placeholder,
  required = false,
  className,
  onChange,
  error,
}: InputProps) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
      {type === 'textarea' && (
        <textarea
          id={id}
          value={value}
          required={required}
          className={`bg-cjsPink text-xs placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0 ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {type === 'text' && (
        <input
          value={value}
          required={required}
          id={id}
          type={type}
          className={`bg-cjsPink text-xs placeholder-cjsWhite p-2 rounded-md w-full focus:outline-0 ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
      {error && (
        <p className="text-cjsWhite bg-red-700 py-1 px-2 uppercase mt-1 rounded-md text-xs">
          {error}
        </p>
      )}
    </div>
  )
}
