import { useCookieContext } from "@_config/hooks/useCookieContext"
import cookie from "@src/assets/cookie.png"

function Cookie() {

  const { registerAccumulated } = useCookieContext()

  const handlerClic = () => registerAccumulated()

  return(
    <div className='cookieWrapper'>
      <img
        onClick={handlerClic}
        src={cookie}
        className='mobile:w-[65%] tablet:w-[60%] desktop:w-[50%] cookie-spin cursor-pointer'
      />
    </div>
  )
}

export default Cookie