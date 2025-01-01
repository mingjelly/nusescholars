import Profile from "./Profile";
import database from "C:/Users/matth/WebstormProjects/nusescholars/src/data/database.json";

interface ProfileBuilderProps {
  name: string;
  batch: string;
  major: string;
}

export default function ProfileBuilder({
  name,
  batch,
  major,
}: ProfileBuilderProps) {
  //@ts-expect-error ignore to let names be processed as string
  const data = database[batch][major][name];

  return (
    <Profile
      name={data.name}
      academicYear={data.admit_year}
      course={data.major}
      introduction={data.writeup}
      interests={data.interests_hobbies}
      hobbies={["Hobby1", "Hobby2"]}
      imageUrl={"/images/" + batch + "/" + name + ".jpg"}
      linkedInUrl={data.linkedin_url}
      instagramUrl={data.instagram_url}
      githubUrl={data.github_url}
    />
  );
}
