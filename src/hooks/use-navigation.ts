import { useLocation } from "react-router-dom";

export const useNavigation = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const getCurrentPath = () => pathname;

  return {
    currentPath: pathname,
    isActive,
    getCurrentPath,
  };
}; 