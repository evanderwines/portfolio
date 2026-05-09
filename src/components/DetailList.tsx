type DetailListProps = {
  items: readonly string[]
}

export function DetailList({ items }: DetailListProps) {
  return (
    <ul className="m-0 grid list-none gap-2.5 p-0">
      {items.map((detail) => (
        <li className="flex gap-3 leading-[1.65]" key={detail}>
          <span className="mt-[0.62em] size-2 shrink-0 rounded-full bg-[#F59E42]" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  )
}
