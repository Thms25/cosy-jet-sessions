export default function Container({ children }) {
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-10 xl:p-14 mx-auto max-w-[1400px]">
      {children}
    </div>
  )
}
