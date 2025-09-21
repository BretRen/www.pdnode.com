"use client";
// import Grid from "@mui/material/Grid";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Toolbar,
  Typography,
} from "@mui/material";
// import Link from "next/link";

const teamMembers = [
  {
    name: "Bret",
    joined: "2024-07-10",
    position: "Founder",
    mainTasks: "Full-stack Development",
    introduce: "Responsible for the main development of Pdnode.",
  },
  {
    name: "Mark",
    joined: "Unknown",
    position: "Admin",
    mainTasks: "Front-end Development",
    introduce: "Focus on front-end development of Nextjs and Mui+react.",
  },
  {
    name: "cigcig",
    joined: "2025-07-01",
    position: "Member",
    mainTasks: "Back-end Development",
    introduce: "Focus on back-end development",
  },
];

const services = ["ChatRoom", "Website Development"];

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* 导航 */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar className="flex flex-col md:flex-row justify-between w-full">
          <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mt: { xs: 1.5, md: 0 } }}>
            <MuiLink href="/" underline="hover" color="inherit">
              Pdnode Team
            </MuiLink>
          </Typography>
          {/* <Box className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
            <MuiLink href="#home" underline="hover" color="inherit">
              Home
            </MuiLink>
            <MuiLink href="#about" underline="hover" color="inherit">
              About
            </MuiLink>
            <MuiLink href="#members" underline="hover" color="inherit">
              Members
            </MuiLink>
            <MuiLink href="#services" underline="hover" color="inherit">
              Services
            </MuiLink>
            <MuiLink href="#contact" underline="hover" color="inherit">
              Contact
            </MuiLink>
            <Link href="/announcement" passHref>
              <MuiLink underline="hover" color="inherit">
                Announcements
              </MuiLink>
            </Link>
          </Box> */}
        </Toolbar>
      </AppBar>

      {/* 欢迎区 */}
      <Box
        id="home"
        textAlign="center"
        py={10}
        px={{ xs: 2, md: 10 }}
        bgcolor="grey.50"
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Pdnode Team
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
          A company specializing in web development
        </Typography>
      </Box>

      {/* About */}
      <Container id="about" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Pdnode is a group of people with the same interests. Founded on 2024-07-10. A company specializing in web development
        </Typography>
      </Container>

      {/* Team Members */}
      <Box id="members" bgcolor="grey.50" className="py-8 md:py-20">
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
            textAlign={{ xs: "center", md: "left" }}
            className="text-2xl md:text-3xl text-center md:text-left font-bold mb-8"
          >
            Our Team Members
          </Typography>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] flex"
              >
                <Card className="w-full" sx={{ transition: "0.3s", '&:hover': { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" className="text-lg md:text-xl font-bold">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Joined:</strong> {member.joined}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Position:</strong> {member.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Main tasks:</strong> {member.mainTasks}
                    </Typography>
                    <Typography mt={1}>{member.introduce}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* Services */}
      <Container id="services" sx={{ py: 10 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          gutterBottom
          textAlign={{ xs: "center", md: "left" }}
        >
          Services
        </Typography>
        <List>
          {services.map((service, idx) => (
            <ListItem key={idx}>
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </Container>

      {/* Contact */}
      <Box id="contact" bgcolor="grey.50" py={10}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
            textAlign={{ xs: "center", md: "left" }}
          >
            Contact Us
          </Typography>
          <Typography>
            <strong>Email:</strong> contact@pdnode.com
          </Typography>
          <Typography>
            <strong>Github Issues:</strong>{" "}
            <MuiLink
              href="https://github.com/BretRen/pdnode/issues"
              target="_blank"
              rel="noopener"
              color="primary"
              underline="hover"
            >
              Here
            </MuiLink>
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        py={4}
        px={{ xs: 2, md: 10 }}
        bgcolor="white"
        borderTop="1px solid #e5e7eb"
        textAlign={{ xs: "center", md: "left" }}
        color="text.secondary"
        fontSize="0.875rem"
      >
        © 2025 Pdnode LLC. All rights reserved. ·{" "}
        <MuiLink href="https://forum.pdnode.com/d/5-pdnode-terms-of-service" underline="hover">
          Terms
        </MuiLink>{" "}
        ·{" "}
        <MuiLink href="https://forum.pdnode.com/d/6-pdnode-privacy-policy" underline="hover">
          Privacy
        </MuiLink>
      </Box>
    </Box>
  );
}
