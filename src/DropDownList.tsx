
interface ComponentProps {
    show: boolean,
    data: string[]
}

export const DropDownList: React.FC<ComponentProps> = ({ show, data }) => {
  return (
    <ul className={`${ show ? 'block' : 'hidden'} flex flex-col gap-2 md:text-center text-[#006AFF] font-normal [&>*]:cursor-pointer`}>
        {
            data.map( option => (
            <li key={option}>{option}</li>
            ))
        }
    </ul>
  )
}
