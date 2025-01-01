import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GitHub } from "@mui/icons-material";

interface ProfileProps {
  name: string;
  academicYear: string;
  course: string;
  introduction: string;
  interests: string;
  hobbies: string[];
  imageUrl: string;
  linkedInUrl: string;
  instagramUrl: string;
  githubUrl: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  academicYear,
  course,
  introduction,
  interests,
  hobbies,
  imageUrl,
  linkedInUrl,
  instagramUrl,
  githubUrl,
}) => {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {academicYear} {course}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-start", mt: 4 }}>
        <Box flex={1}>
          <Typography variant="h6" gutterBottom>
            Introduction
          </Typography>
          <Typography paragraph>{introduction}</Typography>
          <Typography paragraph>{interests}</Typography>
          <Stack>
            {linkedInUrl && (
              <MuiLink
                href={linkedInUrl}
                target="_blank"
                rel="noopener"
                sx={{ mt: 2, display: "inline-flex", alignItems: "center" }}
              >
                <LinkedInIcon fontSize="small" sx={{ mr: 1 }} /> LinkedIn
              </MuiLink>
            )}
            {instagramUrl && (
              <MuiLink
                href={instagramUrl}
                target="_blank"
                rel="noopener"
                sx={{ mt: 2, display: "inline-flex", alignItems: "center" }}
              >
                <InstagramIcon fontSize="small" sx={{ mr: 1 }} /> Instagram
              </MuiLink>
            )}
            {githubUrl && (
              <MuiLink
                href={githubUrl}
                target="_blank"
                rel="noopener"
                sx={{ mt: 2, display: "inline-flex", alignItems: "center" }}
              >
                <GitHub fontSize="small" sx={{ mr: 1 }} /> GitHub
              </MuiLink>
            )}
          </Stack>
        </Box>
        <Box sx={{ ml: 4 }}>
          <Image
            src={imageUrl}
            alt={`${name}'s photo`}
            width={200}
            height={150}
            style={{ borderRadius: 8 }}
          />
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Hobbies
          </Typography>
          <List>
            {hobbies.map((hobby, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={`• ${hobby}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
