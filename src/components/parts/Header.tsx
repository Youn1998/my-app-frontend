import { AppBar, Box, Container, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import logo from 'assets/logo.svg'
import { PagePathValue } from "constants/path"

const setNavLinks = [
    { text: 'Top', path: PagePathValue.ROOT }
]

const Header: React.FC = () => {
    return (
        <>
            <AppBar component={"header"} position="static">
                <Container maxWidth="md">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography component="h1">
                                <Link to="/">
                                    <img src={logo} alt="Webエンジニアのポートフォリオサイト" height="60" width="auto" />
                                </Link>
                            </Typography>
                        </Box>
                        <Box>
                            <List component="nav" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                {setNavLinks.map((navLink) => (
                                    <ListItem disablePadding>
                                        <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={navLink.path}>
                                            <ListItemText primary={navLink.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}
export default Header