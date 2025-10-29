import { useMediaQuery } from "react-responsive";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });
