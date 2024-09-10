type InputProps = {
  value: string
  label?: string
  placeholder?: string
  onChange?: (e: any) => void
}

export default function InputChecbox({
  value,
  label,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="mb-4">
      <div className="mb-6">
        <p className="text-sm mb-2">{label}</p>
        <div className="flex items-center mb-6 bg-cjsPink p-2 rounded-lg">
          <input
            value={value}
            onChange={onChange}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-cjsWhite bg-cjsWhite"
          />
          <label className="ml-2 text-sm text-cjsWhite">{placeholder}</label>
        </div>
      </div>
    </div>
  )
}
