import { useEffect, useState } from 'react'
import { isMobile as isMobilePackage } from 'react-device-detect'

export const useIsMobile = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobilePackage)
  }, [setMobile])

  return mobile;
}

