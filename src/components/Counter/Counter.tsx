import { useCookieContext } from "@_config/hooks/useCookieContext"

function Counter() {

  const { accumulated } = useCookieContext();

  return (
    <div className='flex flex-col justify-center items-center p-1 absolute left-4 top-2'>
      <span className='font-datatype'>Galletas Acumuladas:</span>
      <span className='font-roboto'>{accumulated}</span>
    </div>
  )
}

export default Counter