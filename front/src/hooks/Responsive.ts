import { useMediaQuery } from 'react-responsive'

export const useDeviceSize = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) // iPhone 14 Plus
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }) // iPad Pro 11
  const isDesktop = useMediaQuery({ minWidth: 1024 }) // Desktop
  const isMobileOrTablet = isMobile || isTablet
  const isTableOrDesktop = isTablet || isDesktop

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet,
    isTableOrDesktop,
  }
}
