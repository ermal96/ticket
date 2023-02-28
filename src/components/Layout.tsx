import { Container } from "@mui/material";
import Header from "./Header";

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <Container maxWidth="lg">
            <Header />
            {children}
        </Container>
    )
}

export default Layout;